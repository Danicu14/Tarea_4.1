# Componentes Predefinidos de Bootstrap 5 - Uso y Personalización

En esta aplicación hemos implementado **8 componentes diferentes de Bootstrap 5**, personalizándolos mediante propiedades, clases, estilos y temas para adaptarlos a nuestras necesidades.

---

## 1. NAVBAR (Menú de Navegación)

### Descripción
Barra de navegación responsive que se mantiene fija en la parte superior al hacer scroll.

### Código Base
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-gradient sticky-top shadow-sm">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <i class="bi bi-rocket-takeoff-fill me-2"></i>
            FastAPI Dashboard
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#api-info">API Info</a>
                </li>
                <li class="nav-item">
                    <button id="theme-toggle" class="btn btn-sm btn-outline-light">
                        <i class="bi bi-moon-stars-fill"></i>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

### Personalizaciones Aplicadas

**Clases de Bootstrap:**
- `navbar-expand-lg` - Colapsa en móviles, se expande en pantallas grandes
- `navbar-dark` - Variante oscura (texto blanco)
- `sticky-top` - Se mantiene fijo al hacer scroll
- `shadow-sm` - Sombra sutil
- `ms-auto` - Empuja los links hacia la derecha

**Propiedades:**
- `data-bs-toggle="collapse"` - Activa el comportamiento colapsable en móvil
- `data-bs-target="#navbarNav"` - Especifica qué elemento colapsar

**Estilos CSS Personalizados:**
```css
.navbar {
    backdrop-filter: blur(10px);
    background: var(--gradient-primary) !important;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.2s;
}

.nav-link:hover::after {
    width: 80%;
}
```

**Resultado:** Navbar con gradiente morado, efecto blur, línea animada al hover y sticky scroll.

---

## 2. CARDS (Tarjetas)

### Descripción
Contenedores flexibles para mostrar información agrupada con headers, body y efectos hover.

### Código Base
```html
<div class="card shadow-lg border-0 hover-lift">
    <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h2 class="h4 mb-0">
            <i class="bi bi-broadcast"></i> Información de la API
        </h2>
    </div>
    <div class="card-body">
        <!-- Contenido -->
    </div>
</div>
```

### Personalizaciones Aplicadas

**Clases de Bootstrap:**
- `shadow-lg` - Sombra grande para profundidad
- `border-0` - Sin bordes (diseño limpio)
- `bg-primary`, `bg-success`, `bg-danger` - Colores semánticos en headers
- `text-white` - Texto blanco sobre fondos oscuros
- `d-flex`, `justify-content-between` - Flexbox para alinear elementos

**Estilos CSS Personalizados:**
```css
.card {
    border-radius: 15px !important;
    transition: all 0.3s ease;
    overflow: hidden;
}

.hover-lift:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1) !important;
}

.card-header {
    border-bottom: none !important;
    font-weight: 600;
    padding: 1.25rem !important;
}
```

**Tematización:**
```css
/* Tema oscuro */
[data-bs-theme="dark"] .card {
    background: rgba(30, 41, 59, 0.8) !important;
    backdrop-filter: blur(10px);
}
```

**Resultado:** Cards con bordes redondeados, efecto hover que las eleva, y adaptación automática al tema oscuro.

---

## 3. BUTTONS (Botones)

### Descripción
Botones interactivos con diferentes variantes y tamaños, incluyendo efectos de carga.

### Código Base
```html
<!-- Botón primario -->
<button id="load-items" class="btn btn-light btn-sm">
    <i class="bi bi-arrow-clockwise"></i> Cargar Items
</button>

<!-- Botón outline -->
<button class="btn btn-sm btn-outline-success">
    <i class="bi bi-eye"></i> Ver
</button>

<!-- Botón con tema toggle -->
<button id="theme-toggle" class="btn btn-sm btn-outline-light ms-2">
    <i class="bi bi-moon-stars-fill"></i>
</button>
```

### Personalizaciones Aplicadas

**Clases de Bootstrap:**
- `btn` - Clase base
- `btn-light`, `btn-primary` - Variantes de color sólido
- `btn-outline-success`, `btn-outline-light` - Variantes con borde
- `btn-sm` - Tamaño pequeño

**Estados Dinámicos (JavaScript):**
```javascript
// Deshabilitar durante carga
btn.disabled = true;
btn.innerHTML = '<i class="bi bi-arrow-repeat spinner-border spinner-border-sm"></i> Cargando...';

// Rehabilitar después
btn.disabled = false;
btn.innerHTML = '<i class="bi bi-arrow-clockwise"></i> Cargar Items';
```

**Estilos CSS Personalizados:**
```css
.btn {
    font-weight: 600;
    padding: 0.625rem 1.5rem;
    border-radius: 8px;
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;
}

.btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
    width: 300px;
    height: 300px;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

**Resultado:** Botones con efecto ripple al hacer clic, elevación al hover, y estados de carga animados.

---

## 4. BADGES (Etiquetas)

### Descripción
Pequeñas etiquetas para mostrar contadores, estados o categorías.

### Código Base
```html
<span class="badge bg-success fs-6 animate__animated animate__pulse animate__infinite">
    <i class="bi bi-check-circle"></i> Producción
</span>

<span class="badge bg-info fs-6">
    <i class="bi bi-speedometer2"></i> Alta Performance
</span>

<span class="badge bg-warning fs-6">
    <i class="bi bi-shield-check"></i> Seguro
</span>
```

### Personalizaciones Aplicadas

**Clases de Bootstrap:**
- `badge` - Clase base
- `bg-success`, `bg-info`, `bg-warning` - Colores semánticos
- `fs-6` - Tamaño de fuente específico

**Clases de Animación (Animate.css):**
- `animate__animated` - Activa las animaciones
- `animate__pulse` - Efecto de pulsación
- `animate__infinite` - Animación continua
- `animate__delay-1s`, `animate__delay-2s` - Retardos escalonados

**Estilos CSS Personalizados:**
```css
.badge {
    padding: 0.5rem 1rem !important;
    font-weight: 600 !important;
    letter-spacing: 0.5px;
    border-radius: 20px !important;
}
```

**Resultado:** Badges con forma de píldora, animación de pulso continua y espaciado generoso.

---

## 5. ALERTS (Alertas)

### Descripción
Mensajes contextuales para feedback de usuario, éxitos, errores e información.

### Código Base
```html
<div class="alert alert-success d-flex align-items-center" role="alert">
    <i class="bi bi-check-circle-fill fs-3 me-3"></i>
    <div>
        <strong>¡Servidor en perfecto estado!</strong>
        <p class="mb-0">Todos los sistemas funcionan correctamente</p>
    </div>
</div>

<div class="alert alert-danger animate__animated animate__shakeX" role="alert">
    <i class="bi bi-x-circle-fill fs-3 me-3"></i>
    <div>
        <strong>Error de conexión</strong>
        <p class="mb-0">No se pudo conectar con el servidor.</p>
    </div>
</div>
```

### Personalizaciones Aplicadas

**Clases de Bootstrap:**
- `alert` - Clase base
- `alert-success`, `alert-danger`, `alert-info` - Variantes semánticas
- `d-flex align-items-center` - Alineación flexbox
- `role="alert"` - Accesibilidad

**Animaciones:**
- `animate__shakeX` - Sacudida horizontal en errores para llamar la atención

**Estilos CSS Personalizados:**
```css
.alert {
    border: none;
    border-left: 4px solid;
    border-radius: 10px;
    animation: slideInDown 0.5s ease;
}

@keyframes slideInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

**Resultado:** Alertas que se deslizan desde arriba, con borde lateral colorido y animaciones contextuales.

---

## 6. SPINNERS (Indicadores de Carga)

### Descripción
Indicadores visuales de procesos en curso o carga de datos.

### Código Base
```html
<div class="text-center py-4 fade-in">
    <div class="spinner-border text-primary mb-3" role="status">
        <span class="visually-hidden">Cargando...</span>
    </div>
    <p class="text-muted">Cargando información...</p>
</div>

<!-- Spinner pequeño en botón -->
<i class="bi bi-arrow-repeat spinner-border spinner-border-sm"></i> Cargando...
```

### Personalizaciones Aplicadas

**Clases de Bootstrap:**
- `spinner-border` - Spinner circular rotatorio
- `spinner-border-sm` - Versión pequeña para botones
- `text-primary` - Color del spinner
- `visually-hidden` - Texto oculto visualmente pero accesible

**Uso Dinámico (JavaScript):**
```javascript
function createLoader(text = 'Cargando...') {
    return `
        <div class="text-center py-4 fade-in">
            <div class="spinner-border text-primary mb-3" role="status">
                <span class="visually-hidden">Cargando...</span>
            </div>
            <p class="text-muted">${text}</p>
        </div>
    `;
}

container.innerHTML = createLoader('Obteniendo items...');
```

**Resultado:** Spinners reutilizables con mensajes personalizados y accesibilidad integrada.

---

## 7. TOAST (Notificaciones)

### Descripción
Notificaciones temporales no intrusivas que aparecen en la esquina de la pantalla.

### Código Base
```html
<div class="toast-container position-fixed top-0 end-0 p-3">
    <div id="notification-toast" class="toast" role="alert">
        <div class="toast-header">
            <i class="bi bi-bell-fill me-2"></i>
            <strong class="me-auto">Notificación</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
        </div>
        <div class="toast-body">
            Mensaje aquí
        </div>
    </div>
</div>
```

### Personalizaciones Aplicadas

**Clases de Bootstrap:**
- `toast-container` - Contenedor de toasts
- `position-fixed top-0 end-0` - Posición esquina superior derecha
- `toast` - Componente toast
- `toast-header`, `toast-body` - Estructura interna
- `btn-close` - Botón de cierre
- `data-bs-dismiss="toast"` - Propiedad para cerrar

**JavaScript para Control:**
```javascript
function showToast(title, message, type = 'info') {
    const toastEl = document.getElementById('notification-toast');
    const toastHeader = toastEl.querySelector('.toast-header strong');
    const toastBody = toastEl.querySelector('.toast-body');
    
    toastHeader.textContent = title;
    toastBody.textContent = message;
    
    // Color según tipo
    const bgClass = `bg-${type}`;
    toastEl.querySelector('.toast-header').className = `toast-header ${bgClass} text-white`;
    
    // Mostrar
    const toast = new bootstrap.Toast(toastEl, {
        autohide: true,
        delay: 4000
    });
    toast.show();
}
```

**Estilos CSS Personalizados:**
```css
.toast {
    border-radius: 10px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border: none;
}

.toast-header {
    background: var(--gradient-primary);
    color: white;
    border: none;
}
```

**Propiedades Configurables:**
- `autohide: true` - Se oculta automáticamente
- `delay: 4000` - Duración en milisegundos

**Resultado:** Notificaciones elegantes con colores dinámicos, auto-cierre y posicionamiento fijo.

---

## 8. COLLAPSE (Navbar Responsive)

### Descripción
Sistema de colapso para el menú de navegación en dispositivos móviles.

### Código Base
```html
<button class="navbar-toggler" type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ms-auto">
        <!-- Links -->
    </ul>
</div>
```

### Personalizaciones Aplicadas

**Propiedades de Bootstrap:**
- `data-bs-toggle="collapse"` - Activa el comportamiento de colapso
- `data-bs-target="#navbarNav"` - Especifica el elemento a colapsar

**Clases de Bootstrap:**
- `collapse` - Estado inicial colapsado
- `navbar-collapse` - Transiciones suaves
- `navbar-toggler` - Botón hamburguesa
- `navbar-toggler-icon` - Icono de tres líneas

**Resultado:** Menú que se colapsa automáticamente en pantallas < 992px con animación suave.

---

## Resumen de Personalizaciones

### Por Método:

1. **Propiedades (data-attributes)**
   - `data-bs-toggle` - Controla comportamientos interactivos
   - `data-bs-target` - Especifica elementos objetivo
   - `data-bs-dismiss` - Cierra componentes

2. **Clases de Bootstrap**
   - Variantes: `bg-primary`, `btn-outline-success`
   - Tamaños: `btn-sm`, `fs-6`
   - Utilidades: `d-flex`, `shadow-lg`, `sticky-top`

3. **Estilos CSS Custom**
   - Transiciones y animaciones
   - Efectos hover (elevación, ripple)
   - Border-radius personalizados
   - Gradientes y blur effects

4. **Temas (Dark/Light)**
   - `[data-bs-theme="dark"]` para estilos condicionales
   - Variables CSS para colores adaptables
   - Transparencias con backdrop-filter

### Resultado Final:

✓ **8 componentes** completamente funcionales y personalizados  
✓ **Coherencia** visual en toda la aplicación  
✓ **Interactividad** mejorada con animaciones  
✓ **Responsive** adaptación automática a móviles  
✓ **Accesibilidad** con roles ARIA y textos ocultos  
✓ **Tematización** soporte para modo oscuro
