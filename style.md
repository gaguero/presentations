# Azul_bot Control-Center - Guía de Estilo y Diseño

## 📋 Tabla de Contenidos
1. [Resumen del Sistema](#resumen-del-sistema)
2. [Paleta de Colores](#paleta-de-colores)
3. [Tipografía](#tipografía)
4. [Espaciado y Layout](#espaciado-y-layout)
5. [Componentes de UI](#componentes-de-ui)
6. [Iconografía](#iconografía)
7. [Interacciones y Animaciones](#interacciones-y-animaciones)
8. [Diseño Responsivo](#diseño-responsivo)
9. [Patrones de Código](#patrones-de-código)

---

## Resumen del Sistema

### Stack Tecnológico
- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 3.4+
- **Componentes UI**: React 18
- **Iconos**: React Icons (Font Awesome)
- **Gráficos**: Recharts

### Filosofía de Diseño
El diseño de Azul_bot Control-Center se basa en los siguientes principios:
- **Claridad**: Interfaces limpias con jerarquía visual clara
- **Consistencia**: Patrones de diseño uniformes en toda la aplicación
- **Eficiencia**: Diseño orientado a la productividad del usuario
- **Accesibilidad**: Contraste adecuado y navegación intuitiva
- **Profesionalismo**: Estética moderna y confiable

---

## Paleta de Colores

### Colores Primarios

#### Azul Claro (Primary)
- **Código**: `#A8DADC`
- **Uso**: Sidebar, elementos destacados, íconos de KPI
- **Tailwind**: `bg-[#A8DADC]`

```css
/* Ejemplo de uso */
.sidebar {
  background-color: #A8DADC;
}
```

#### Azul Oscuro (Primary Dark)
- **Código**: `#1D3557`
- **Uso**: Texto principal en sidebar, headers, números importantes
- **Tailwind**: `text-[#1D3557]`

### Colores de Acción

#### Azul Interactivo
- **Código**: `#3B82F6` (blue-500) / `#2563EB` (blue-600)
- **Uso**: Botones primarios, links, estados activos
- **Tailwind**: `bg-blue-500`, `hover:bg-blue-600`

### Colores Neutros

#### Fondos
- **Fondo Principal**: `#F5F7FA` - Gris muy claro
- **Fondo de Tarjetas**: `#FFFFFF` - Blanco puro
- **Fondo Input**: `rgba(255,255,255,0.2)` - Blanco translúcido
- **Tailwind**: `bg-[#F5F7FA]`, `bg-white`, `bg-white/20`

#### Texto
- **Texto Principal**: `#1D3557` - Azul oscuro
- **Texto Secundario**: `#6B7280` (gray-500)
- **Texto Deshabilitado**: `#9CA3AF` (gray-400)
- **Tailwind**: `text-[#1D3557]`, `text-gray-500`, `text-gray-400`

### Colores de Estado

#### Éxito
- **Código**: `#10B981` (green-500)
- **Uso**: Mensajes de éxito, indicadores positivos, métricas en crecimiento
- **Tailwind**: `text-green-600`, `bg-green-100`

#### Error
- **Código**: `#EF4444` (red-500)
- **Uso**: Mensajes de error, alertas, validaciones fallidas
- **Tailwind**: `text-red-600`, `bg-red-100`

#### Advertencia
- **Código**: `#F59E0B` (yellow-500)
- **Uso**: Avisos, estados pendientes
- **Tailwind**: `text-yellow-800`, `bg-yellow-100`

#### Información
- **Código**: `#3B82F6` (blue-500)
- **Uso**: Tooltips, notificaciones informativas
- **Tailwind**: `text-blue-700`, `bg-blue-100`

### Bordes
- **Borde Principal**: `#E5E7EB` (gray-200)
- **Borde Sutil**: `#F3F4F6` (gray-100)
- **Tailwind**: `border-gray-200`, `border-gray-100`

---

## Tipografía

### Familia de Fuente
- **Sistema por defecto**: Sans-serif del sistema (Tailwind default)
- Renderizado nativo optimizado para legibilidad

### Jerarquía de Tamaños

#### Headers
```tsx
// H1 - Títulos de página principal
className="text-3xl font-bold text-blue-900 mb-2"  // 30px (1.875rem)

// H2 - Títulos de sección
className="text-2xl font-bold mb-4"  // 24px (1.5rem)

// H3 - Títulos de componente/card
className="text-xl font-semibold mb-4"  // 20px (1.25rem)
```

#### Cuerpo y Etiquetas
```tsx
// Body - Texto normal
className="text-base"  // 16px (1rem)

// Small - Etiquetas, metadata
className="text-sm"  // 14px (0.875rem)

// Extra Small - Subtítulos, notas al pie
className="text-xs"  // 12px (0.75rem)
```

#### KPIs y Métricas
```tsx
// Números grandes (KPI Cards)
className="text-2xl font-bold"  // 24px (1.5rem)

// Porcentajes de cambio
className="text-xs font-semibold"  // 12px (0.75rem)
```

### Pesos de Fuente
- **Regular**: `font-normal` (400)
- **Medium**: `font-medium` (500)
- **Semibold**: `font-semibold` (600)
- **Bold**: `font-bold` (700)

### Ejemplo de Jerarquía Aplicada
```tsx
<div>
  <h1 className="text-3xl font-bold text-blue-900 mb-2">
    Azul_bot
  </h1>
  <p className="text-gray-500 text-sm">
    Sign in to your Control-Center
  </p>
  <div className="text-2xl font-bold text-[#1D3557]">
    1,245
  </div>
  <div className="text-sm text-gray-500 font-medium">
    Invoices
  </div>
</div>
```

---

## Espaciado y Layout

### Sistema de Espaciado (Tailwind)
Basado en múltiplos de 4px (0.25rem):

```css
/* Escala de espaciado */
spacing-1:   4px   (0.25rem)  - p-1, m-1
spacing-2:   8px   (0.5rem)   - p-2, m-2
spacing-3:   12px  (0.75rem)  - p-3, m-3
spacing-4:   16px  (1rem)     - p-4, m-4
spacing-5:   20px  (1.25rem)  - p-5, m-5
spacing-6:   24px  (1.5rem)   - p-6, m-6
spacing-8:   32px  (2rem)     - p-8, m-8
```

### Patrones de Espaciado Comunes

#### Tarjetas y Contenedores
```tsx
// Padding interno de tarjetas
className="p-5"  // 20px - KPI cards
className="p-6"  // 24px - Charts, contenido general
className="p-8"  // 32px - Modales, formularios

// Márgenes entre elementos
className="mb-4"  // 16px - Entre campos de formulario
className="mb-6"  // 24px - Entre secciones
```

#### Grids y Espaciado de Componentes
```tsx
// Espaciado entre tarjetas/componentes
className="gap-4"  // 16px - Spacing mínimo
className="gap-6"  // 24px - Spacing estándar
className="space-y-8"  // 32px - Entre secciones principales
```

### Layout Principal

#### Estructura de la Aplicación
```tsx
// Root Layout Structure
<div className="flex h-screen w-screen overflow-hidden">
  <Sidebar />  {/* w-64 (256px) */}
  <div className="flex flex-col flex-1 min-w-0">
    <TopNav />  {/* h-auto */}
    <main className="flex-1 overflow-y-auto p-6 bg-white/80">
      {children}
    </main>
  </div>
</div>
```

#### Dashboard Grid
```tsx
// KPI Cards Grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* 4 tarjetas en desktop, 2 en tablet, 1 en mobile */}
</div>

// Charts Grid
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {/* 2 columnas en desktop, 1 en mobile */}
</div>
```

### Contenedores y Max Width
```tsx
// Contenedor principal de página
className="container mx-auto p-4"

// Formularios y modales
className="w-full max-w-md"  // 448px max
```

---

## Componentes de UI

### Tarjetas (Cards)

#### KPI Card
```tsx
<div className="flex items-center bg-white rounded-xl shadow p-5 gap-4">
  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#A8DADC] text-[#1D3557] text-2xl">
    {icon}
  </div>
  <div className="flex-1">
    <div className="text-sm text-gray-500 font-medium">{label}</div>
    <div className="text-2xl font-bold text-[#1D3557]">{value}</div>
    <div className="text-xs text-green-600 font-semibold mt-1">{change}</div>
  </div>
</div>
```

**Características:**
- Fondo blanco con sombra sutil
- Border radius: `rounded-xl` (12px)
- Padding: `p-5` (20px)
- Ícono circular con fondo azul claro
- Métricas con jerarquía visual clara

#### Chart Card
```tsx
<div className="bg-white rounded-xl shadow p-6 min-h-[280px]">
  {/* Contenido del gráfico */}
</div>
```

**Características:**
- Padding mayor para contenido complejo: `p-6` (24px)
- Altura mínima definida para consistencia
- Border radius: `rounded-xl` (12px)

#### Content Card
```tsx
<div className="bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold mb-4">{title}</h2>
  {/* Contenido */}
</div>
```

### Botones

#### Botón Primario
```tsx
<button 
  className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors duration-200 disabled:opacity-60"
  disabled={loading}
>
  {loading ? 'Loading...' : 'Submit'}
</button>
```

**Características:**
- Background: `bg-blue-500`
- Hover: `hover:bg-blue-600`
- Transición suave: `transition-colors duration-200`
- Estado disabled: `disabled:opacity-60`
- Padding: `py-2 px-4` (8px vertical, 16px horizontal)
- Border radius: `rounded-md` (6px)

#### Botón Secundario / Link
```tsx
<button className="flex items-center w-full px-4 py-2 rounded-lg text-[#1D3557] hover:bg-[#F5F7FA] transition-colors">
  <FaIcon className="mr-3" />
  <span>{text}</span>
</button>
```

**Características:**
- Sin background inicial
- Hover: fondo gris claro `hover:bg-[#F5F7FA]`
- Texto azul oscuro
- Ícono a la izquierda con margin

### Campos de Entrada (Input Fields)

#### Text Input
```tsx
<div className="mb-4">
  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
    Email
  </label>
  <input
    id="email"
    type="email"
    className="w-full px-4 py-2 border border-gray-300 bg-white/20 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
</div>
```

**Características:**
- Background semi-transparente: `bg-white/20`
- Borde: `border-gray-300`
- Focus ring: `focus:ring-2 focus:ring-blue-300`
- Padding: `px-4 py-2` (16px horizontal, 8px vertical)
- Border radius: `rounded-md` (6px)
- Label siempre encima del campo

#### Search Input
```tsx
<input
  type="text"
  placeholder="Search..."
  className="w-full max-w-xs px-4 py-2 rounded-md border border-gray-200 bg-[#F5F7FA] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#A8DADC]"
/>
```

**Características:**
- Background gris claro
- Focus ring azul claro (color primario)
- Max width definido: `max-w-xs` (320px)

#### Textarea
```tsx
<textarea
  rows={15}
  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Paste content here..."
/>
```

### Navegación

#### Sidebar
```tsx
<aside className="hidden md:flex flex-col w-64 h-full bg-[#A8DADC] border-r border-gray-200 shadow-sm z-20">
  {/* Header con logo */}
  <div className="flex items-center justify-center h-20 border-b border-gray-200">
    <img src="/logo.png" alt="Logo" className="w-12 h-12" />
    <span className="ml-2 text-xl font-bold text-[#1D3557] tracking-wide">
      Azul_bot
    </span>
  </div>
  
  {/* Navegación */}
  <nav className="flex-1 py-6 px-2 space-y-2">
    {navLinks.map(link => (
      <Link 
        key={link.href} 
        href={link.href} 
        className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 text-[#1D3557] hover:bg-[#F5F7FA] ${
          pathname.startsWith(link.href) 
            ? 'bg-white font-semibold shadow' 
            : ''
        }`}
      >
        <span className="text-lg mr-3">{link.icon}</span>
        <span className="text-base">{link.label}</span>
      </Link>
    ))}
  </nav>
  
  {/* Footer */}
  <div className="p-4 border-t border-gray-200">
    {/* Logout button */}
  </div>
</aside>
```

**Características:**
- Ancho fijo: `w-64` (256px)
- Background: Azul claro `#A8DADC`
- Logo + texto en header (altura: `h-20`)
- Items activos: fondo blanco con sombra
- Hover: fondo gris muy claro
- Oculto en mobile: `hidden md:flex`

#### Top Navigation
```tsx
<header className="flex items-center justify-between px-6 py-3 bg-white shadow-sm rounded-b-lg border-b border-gray-100 z-10">
  {/* Search */}
  <div className="flex-1">
    <input type="text" placeholder="Search..." {...} />
  </div>
  
  {/* User actions */}
  <div className="flex items-center gap-6 ml-6">
    {/* Notification bell */}
    <button className="relative p-2 rounded-full hover:bg-[#F5F7FA] transition-colors">
      <FaBell className="text-[#1D3557] text-lg" />
      <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
    </button>
    
    {/* User avatar */}
    <div className="w-9 h-9 rounded-full bg-[#A8DADC] flex items-center justify-center text-white font-bold text-lg shadow-inner">
      G
    </div>
  </div>
</header>
```

**Características:**
- Background blanco con sombra sutil
- Padding horizontal generoso: `px-6`
- Search a la izquierda con flexbox
- Acciones del usuario a la derecha
- Notificaciones con badge rojo
- Avatar circular con iniciales

### Mensajes de Estado

#### Success Message
```tsx
<div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md">
  {successMessage}
</div>
```

#### Error Message
```tsx
<div className="mb-4 text-red-600 text-sm">
  {errorMessage}
</div>
```

#### Warning Message
```tsx
<div className="mb-4 p-3 bg-yellow-100 text-yellow-800 rounded-md">
  {warningMessage}
</div>
```

#### Info Message
```tsx
<div className="mt-4 p-3 rounded-md bg-blue-100 text-blue-800">
  {infoMessage}
</div>
```

**Características:**
- Padding: `p-3` (12px)
- Border radius: `rounded-md` (6px)
- Colores según tipo de mensaje
- Background claro con texto oscuro para legibilidad

---

## Iconografía

### Biblioteca de Iconos
**React Icons** (Font Awesome)

Instalación (si no está):
```bash
npm install react-icons
```

### Iconos Comunes Usados

```tsx
import { 
  FaHome,           // Dashboard
  FaFileInvoice,    // Invoices
  FaUsers,          // Users
  FaChartBar,       // Reports
  FaCog,            // Settings
  FaSignOutAlt,     // Logout
  FaBell,           // Notifications
  FaDollarSign,     // Cost/Money
  FaCheckCircle     // Success/Completion
} from 'react-icons/fa';
```

### Tamaños de Iconos

```tsx
// Pequeño (navegación, inline)
className="text-base"  // 16px

// Mediano (botones, labels)
className="text-lg"    // 18px

// Grande (iconos de KPI)
className="text-2xl"   // 24px
```

### Colores de Iconos

```tsx
// Iconos en sidebar/navegación
className="text-[#1D3557]"

// Iconos en KPI cards (dentro de círculo)
// El círculo tiene: bg-[#A8DADC]
// El icono: text-[#1D3557]

// Iconos en botones
// Heredan el color del texto del botón
```

### Patrones de Uso

#### Ícono con Texto
```tsx
<button className="flex items-center gap-2">
  <FaCog className="text-lg" />
  <span>Settings</span>
</button>
```

#### Ícono en Círculo (KPI)
```tsx
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#A8DADC] text-[#1D3557] text-2xl">
  <FaFileInvoice />
</div>
```

#### Ícono con Badge
```tsx
<button className="relative p-2 rounded-full hover:bg-[#F5F7FA]">
  <FaBell className="text-[#1D3557] text-lg" />
  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
</button>
```

---

## Interacciones y Animaciones

### Transiciones CSS

#### Transición Estándar
```tsx
// Para cambios de color y background
className="transition-colors duration-200"

// Para cambios generales
className="transition-all duration-200"
```

### Estados de Interacción

#### Hover States

**Botones Primarios:**
```tsx
className="bg-blue-500 hover:bg-blue-600"
```

**Botones Secundarios/Links:**
```tsx
className="hover:bg-[#F5F7FA]"
```

**Items de Navegación:**
```tsx
className="hover:bg-[#F5F7FA] transition-colors duration-200"
```

**Iconos Circulares:**
```tsx
className="rounded-full hover:bg-[#F5F7FA] transition-colors"
```

#### Focus States

**Input Fields:**
```tsx
className="focus:outline-none focus:ring-2 focus:ring-blue-300"
```

**Links y Botones:**
```tsx
className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
```

#### Active States

**Navegación Activa:**
```tsx
// Sidebar links
className={pathname.startsWith(link.href) 
  ? 'bg-white font-semibold shadow' 
  : ''
}
```

#### Disabled States

**Botones:**
```tsx
className="disabled:opacity-60"
disabled={loading}
```

### Indicadores de Carga

#### Loading Button
```tsx
<button disabled={loading}>
  {loading ? 'Signing in...' : 'Sign In'}
</button>
```

#### Loading State
```tsx
{isLoading ? (
  <p>Loading status...</p>
) : (
  // Content
)}
```

### Autofill Fix (Chrome/Edge)
Para mantener el estilo en campos autofilled:

```tsx
<style jsx global>{`
  input:-webkit-autofill {
    background-color: rgba(255,255,255,0.2) !important;
    -webkit-box-shadow: 0 0 0 1000px rgba(255,255,255,0.2) inset !important;
    box-shadow: 0 0 0 1000px rgba(255,255,255,0.2) inset !important;
    -webkit-text-fill-color: #1a202c !important;
  }
`}</style>
```

---

## Diseño Responsivo

### Breakpoints (Tailwind)

```css
/* Mobile First Approach */
sm:   640px   /* Tablet pequeña */
md:   768px   /* Tablet */
lg:   1024px  /* Desktop pequeño */
xl:   1280px  /* Desktop grande */
2xl:  1536px  /* Desktop extra grande */
```

### Patrones Responsivos Comunes

#### Sidebar Responsivo
```tsx
// Oculto en mobile, visible en desktop
className="hidden md:flex"

// Para implementar menú móvil (hamburger menu):
// - Sidebar como overlay con position fixed
// - Backdrop con onClick para cerrar
// - Animación de slide-in desde la izquierda
```

#### Grids Responsivos

**KPI Cards:**
```tsx
// 1 columna en mobile, 2 en tablet, 4 en desktop
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
```

**Charts:**
```tsx
// 1 columna en mobile/tablet, 2 en desktop
className="grid grid-cols-1 lg:grid-cols-2 gap-6"
```

#### Contenedores
```tsx
// Full width en mobile, max-width en desktop
className="w-full max-w-md"

// Padding responsive
className="p-4 md:p-6 lg:p-8"
```

#### Texto Responsivo
```tsx
// Título que se reduce en mobile
className="text-2xl md:text-3xl font-bold"

// Espaciado responsive
className="space-y-4 md:space-y-6 lg:space-y-8"
```

### Layout Responsivo Principal

```tsx
// Main Layout
<div className="flex h-screen w-screen overflow-hidden">
  {/* Sidebar - hidden on mobile */}
  <Sidebar className="hidden md:flex" />
  
  <div className="flex flex-col flex-1 min-w-0">
    <TopNav />
    <main className="flex-1 overflow-y-auto p-4 md:p-6">
      {children}
    </main>
  </div>
</div>
```

### Media Queries Personalizadas (si es necesario)
```css
/* En globals.css o componente específico */
@media (max-width: 768px) {
  /* Estilos para mobile */
}

@media (min-width: 769px) and (max-width: 1024px) {
  /* Estilos para tablet */
}

@media (min-width: 1025px) {
  /* Estilos para desktop */
}
```

---

## Patrones de Código

### Estructura de Componente Base

```tsx
'use client';

import { useState } from 'react';
import { FaIcon } from 'react-icons/fa';

interface ComponentProps {
  title: string;
  value: string;
  // ... más props
}

export default function Component({ title, value }: ComponentProps) {
  const [state, setState] = useState('');

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {/* Contenido */}
    </div>
  );
}
```

### Conditional Classes (clsx pattern)

```tsx
// Instalación si no existe
// npm install clsx

import clsx from 'clsx';

// Uso
<div className={clsx(
  'base-classes',
  isActive && 'active-classes',
  isError && 'error-classes',
  className // Props adicionales
)}>
```

### Formularios

```tsx
'use client';

import { useState } from 'react';

export default function FormComponent() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // API call
      const res = await fetch('/api/endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setMessage({ type: 'success', text: 'Success!' });
      } else {
        const data = await res.json();
        setMessage({ type: 'error', text: data.error || 'Error occurred' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to connect' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Form fields */}
      
      {error && (
        <div className="mb-4 text-red-600 text-sm">{error}</div>
      )}
      
      {message && (
        <div className={`mt-4 p-3 rounded-md ${
          message.type === 'success' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {message.text}
        </div>
      )}
      
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors duration-200 disabled:opacity-60"
      >
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
}
```

### Página con Layout Protegido

```tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProtectedPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/data');
        if (res.ok) {
          const jsonData = await res.json();
          setData(jsonData);
        } else if (res.status === 401) {
          router.push('/auth/signin');
        }
      } catch (error) {
        console.error('Failed to fetch data', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchData();
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Contenido */}
    </div>
  );
}
```

### Dashboard con KPIs

```tsx
import { FaIcon } from 'react-icons/fa';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard 
          icon={<FaIcon />} 
          label="Metric Name" 
          value="1,245" 
          change="+12.4%" 
        />
        {/* More cards */}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Chart 1" />
        <ChartCard title="Chart 2" />
      </div>
    </div>
  );
}

function KpiCard({ icon, label, value, change }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="flex items-center bg-white rounded-xl shadow p-5 gap-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#A8DADC] text-[#1D3557] text-2xl">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-sm text-gray-500 font-medium">{label}</div>
        <div className="text-2xl font-bold text-[#1D3557]">{value}</div>
        <div className="text-xs text-green-600 font-semibold mt-1">{change}</div>
      </div>
    </div>
  );
}

function ChartCard({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 min-h-[280px]">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {/* Chart component */}
    </div>
  );
}
```

---

## Sombras (Shadows)

### Sistema de Sombras

```tsx
// Sombra sutil (cards, elementos elevados)
className="shadow"
// box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)

// Sombra suave (sidebar, topnav)
className="shadow-sm"
// box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)

// Sombra mediana (modales, dropdowns)
className="shadow-md"
// box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)

// Sombra grande (overlays importantes)
className="shadow-lg"
// box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)

// Sombra interna (avatares, elementos hundidos)
className="shadow-inner"
// box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05)
```

---

## Border Radius

### Sistema de Radios

```tsx
// Pequeño (inputs, botones pequeños)
className="rounded-md"  // 6px

// Mediano (cards, botones estándar)
className="rounded-lg"  // 8px

// Grande (cards principales, modales)
className="rounded-xl"  // 12px

// Completo (círculos, pills)
className="rounded-full"  // 9999px
```

---

## Mejores Prácticas

### 1. Consistencia Visual
- ✅ Usar siempre los mismos border-radius en componentes similares
- ✅ Mantener la paleta de colores consistente
- ✅ Usar el mismo sistema de espaciado (múltiplos de 4px)
- ✅ Aplicar las mismas transiciones en interacciones similares

### 2. Accesibilidad
- ✅ Asegurar contraste suficiente entre texto y fondo
- ✅ Incluir labels en todos los inputs
- ✅ Usar atributos ARIA cuando sea necesario
- ✅ Garantizar navegación por teclado funcional
- ✅ Proporcionar estados focus visibles

### 3. Rendimiento
- ✅ Usar 'use client' solo cuando sea necesario
- ✅ Optimizar imágenes (usar Next.js Image cuando sea posible)
- ✅ Minimizar re-renders innecesarios
- ✅ Lazy load componentes pesados

### 4. Responsive Design
- ✅ Diseñar mobile-first
- ✅ Probar en múltiples tamaños de pantalla
- ✅ Usar unidades relativas cuando sea apropiado
- ✅ Implementar overflow apropiado en contenedores

### 5. Mantenibilidad
- ✅ Mantener componentes pequeños y enfocados
- ✅ Extraer lógica repetida a componentes reutilizables
- ✅ Documentar componentes complejos
- ✅ Usar TypeScript para type safety

---

## Recursos y Referencias

### Documentación Oficial
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/)

### Herramientas Útiles
- [Tailwind Color Generator](https://tailwindcss.com/docs/customizing-colors)
- [Heroicons](https://heroicons.com/) - Iconos alternativos
- [Lucide Icons](https://lucide.dev/) - Iconos alternativos (ya instalado en el proyecto)

### Design System References
- [Material Design](https://material.io/design)
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)

---

## Changelog

### v1.0.0 (Actual)
- Sistema de diseño inicial documentado
- Componentes principales: Sidebar, TopNav, KPI Cards
- Paleta de colores: Azul claro (#A8DADC) como primario
- Tipografía basada en sistema sans-serif
- Patrón de autenticación implementado
- Dashboard con grid responsivo

---

## Contacto y Soporte

Para preguntas sobre el sistema de diseño o contribuciones:
- **Proyecto**: Azul_bot Control-Center
- **Built by**: [thecraftedhospitality.com](https://thecraftedhospitality.com)

---

*Última actualización: Noviembre 2025*

