const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Path to comments data file
const COMMENTS_FILE = path.join(__dirname, 'comments-data.json');

// Initialize comments file if it doesn't exist
if (!fs.existsSync(COMMENTS_FILE)) {
    fs.writeFileSync(COMMENTS_FILE, JSON.stringify({}));
}

// Get all comments
app.get('/api/comments', (req, res) => {
    try {
        const data = fs.readFileSync(COMMENTS_FILE, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        console.error('Error reading comments:', error);
        res.status(500).json({ error: 'Failed to read comments' });
    }
});

// Get comments for a specific page
app.get('/api/comments/:pageId', (req, res) => {
    try {
        const data = fs.readFileSync(COMMENTS_FILE, 'utf8');
        const allComments = JSON.parse(data);
        const pageComments = allComments[req.params.pageId] || [];
        res.json(pageComments);
    } catch (error) {
        console.error('Error reading comments:', error);
        res.status(500).json({ error: 'Failed to read comments' });
    }
});

// Add a comment
app.post('/api/comments/:pageId', (req, res) => {
    try {
        const { pageId } = req.params;
        const { text } = req.body;
        
        if (!text || text.trim() === '') {
            return res.status(400).json({ error: 'Comment text is required' });
        }
        
        // Read current comments
        const data = fs.readFileSync(COMMENTS_FILE, 'utf8');
        const allComments = JSON.parse(data);
        
        // Initialize page comments if doesn't exist
        if (!allComments[pageId]) {
            allComments[pageId] = [];
        }
        
        // Create new comment
        const newComment = {
            id: Date.now().toString(),
            text: text.trim(),
            timestamp: new Date().toISOString()
        };
        
        // Add comment
        allComments[pageId].push(newComment);
        
        // Save to file
        fs.writeFileSync(COMMENTS_FILE, JSON.stringify(allComments, null, 2));
        
        res.json(newComment);
    } catch (error) {
        console.error('Error adding comment:', error);
        res.status(500).json({ error: 'Failed to add comment' });
    }
});

// Delete a comment
app.delete('/api/comments/:pageId/:commentId', (req, res) => {
    try {
        const { pageId, commentId } = req.params;
        
        // Read current comments
        const data = fs.readFileSync(COMMENTS_FILE, 'utf8');
        const allComments = JSON.parse(data);
        
        if (!allComments[pageId]) {
            return res.status(404).json({ error: 'Page not found' });
        }
        
        // Filter out the comment
        allComments[pageId] = allComments[pageId].filter(c => c.id !== commentId);
        
        // Save to file
        fs.writeFileSync(COMMENTS_FILE, JSON.stringify(allComments, null, 2));
        
        res.json({ success: true });
    } catch (error) {
        console.error('Error deleting comment:', error);
        res.status(500).json({ error: 'Failed to delete comment' });
    }
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'sitemap-diagram.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

