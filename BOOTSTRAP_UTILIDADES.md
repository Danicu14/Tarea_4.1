# Utilidades y Clases de Bootstrap 5 - Lo que nos pidieron

## ¿Qué tenemos que explicar?

La tarea pide que identifiquemos y usemos utilidades de Bootstrap en 5 categorías:
1. **Espaciado** - margenes y paddings
2. **Colores** - fondos, textos, badges
3. **Tipografía** - tamaños, pesos, estilos de texto
4. **Grid/Layout** - sistema de columnas, contenedores
5. **Alineación** - centrado, distribución de elementos

---

## CAPTURAS A MOSTRAR

### **Captura 1: Vista completa del dashboard (scroll completo)**
Muestra todas las secciones para ver el layout general

### **Captura 2: Navbar (parte superior)**
Verás las clases de alineación y espaciado

### **Captura 3: Hero header (cabecera morada)**
Verás tipografía, colores y espaciado

### **Captura 4: Sección "Información de la API"**
Verás el grid de 4 cards y colores

### **Captura 5: Sección "Items de Ejemplo"**
Verás el grid responsive de items

### **Captura 6: Sección "Estado del Servidor"**
Verás el grid de 3 columnas con health cards

### **Captura 7: Cards de estadísticas (3 cards coloridas al final)**
Verás grid de 3 columnas iguales

### **Captura 8: Versión móvil (Responsive)**
Redimensiona la ventana a móvil para ver cómo se apilan las columnas

---

## 1. ESPACIADO - Dónde verlo

### Lo más visible:

**EN EL HERO (cabecera morada):**
- `py-5` → Padding arriba/abajo grande
- `mb-3` → Separación entre el título y el párrafo
- `mb-4` → Separación entre párrafo y badges

**ENTRE SECCIONES:**
- `mb-5` → Espacio grande entre cada card blanca
- `my-5` → Espacio arriba/abajo del contenedor principal

**EN LA NAVBAR:**
- `me-2` → Espacio entre iconos y texto
- `ms-2` → Espacio antes del botón de tema
- `ms-auto` → Empuja los links a la derecha

**EN LOS GRIDS:**
- `g-3` y `g-4` → Espacios entre las tarjetas (gaps)

**📸 CAPTURA:** Hero header y cualquier sección para ver los espacios

---

## 2. COLORES - Dónde verlo

### Lo más visible:

**HEADERS DE CARDS (los encabezados de colores):**
- Azul (`bg-primary`) → Card de "Información de la API"
- Verde (`bg-success`) → Card de "Items de Ejemplo"  
- Rojo (`bg-danger`) → Card de "Estado del Servidor"
- Negro (`bg-dark`) → Footer (pie de página)

**GRADIENTES (las 3 cards coloridas del final):**
- Morado (`bg-gradient-primary`) → Card "Performance"
- Verde (`bg-gradient-success`) → Card "Seguridad"
- Azul claro (`bg-gradient-info`) → Card "Escalable"

**TEXTOS:**
- `text-white` → Texto blanco en headers y footer
- `text-muted` → Texto gris clarito (labels como "Entorno", "ID:")
- Iconos coloreados → Cada icono tiene su color (azul, verde, amarillo)

**BADGES (las etiquetas):**
- Verde (`bg-success`) → "Producción"
- Azul (`bg-info`) → "Alta Performance"
- Amarillo (`bg-warning`) → "Seguro"

**📸 CAPTURA:** 
- Headers de las 3 secciones principales (azul, verde, rojo)
- Las 3 cards del final con gradientes
- Hero header para ver los badges de colores

---

## 3. TIPOGRAFÍA - Dónde verlo

### Lo más visible:

**EN EL HERO:**
- `display-4` → Título gigante "Aplicación FastAPI"
- `lead` → Subtítulo más grande "Dashboard moderno conectado..."
- `fw-bold` → Título en negrita

**TAMAÑOS DE FUENTE:**
- `fs-1` → Icono grande cuando no hay items
- `fs-3` → Iconos en alertas de éxito/error
- `fs-4` → Iconos en las info-cards
- `fs-5` → Nombres de la API y datos importantes
- `fs-6` → Badges normales

**ALINEACIÓN:**
- `text-center` → Hero y footer centrados
- Títulos normales alineados a la izquierda

**📸 CAPTURA:**
- Hero header para ver el título grande
- Card de Items cuando está vacía (icono fs-1)
- Cualquier sección con info para ver fs-4 y fs-5

---

## 4. GRID Y LAYOUT - Dónde verlo

### Lo más visible:

**GRID DE 3 COLUMNAS (las más comunes):**

1. **Cards de estadísticas (final):**
   - 3 cards iguales en desktop, apiladas en móvil
   - Usa: `row g-4` y `col-md-4`

2. **Health status cards:**
   - 3 tarjetas del estado del servidor
   - Usa: `row g-3` y `col-md-4`

**GRID AUTOMÁTICO (items):**
- Se crean columnas automáticamente según el espacio
- Grid CSS personalizado con `minmax(280px, 1fr)`

**CONTENEDORES:**
- `container` → Centra todo el contenido con márgenes
- `container-fluid` → Navbar ocupa todo el ancho

**📸 CAPTURA:**
- Las 3 cards de estadísticas (Performance, Seguridad, Escalable)
- Health status con 3 mini-cards
- Redimensionar a móvil para ver cómo se apilan

---

## 5. ALINEACIÓN - Dónde verlo

### Lo más visible:

**FLEXBOX EN HEADERS DE CARDS:**
```html
<div class="d-flex justify-content-between align-items-center">
    <h2>Título</h2>          ← Izquierda
    <button>Botón</button>    ← Derecha
</div>
```
→ Verlo en "Items de Ejemplo" y "Estado del Servidor"

**CENTRADO:**
- Hero completo → `text-center`
- Badges del hero → `justify-content-center`
- Spinners de carga → `text-center`

**NAVBAR:**
- Links a la derecha → `ms-auto`
- Icono y texto alineados → `align-items-center`

**POSICIONAMIENTO FIJO:**
- Navbar → `sticky-top` (se queda arriba al hacer scroll)
- Toast → `position-fixed top-0 end-0` (esquina superior derecha)

**📸 CAPTURA:**
- Header de "Items" o "Health" para ver justify-content-between
- Hero para ver badges centrados
- Hacer scroll para ver que navbar se queda arriba
- Hacer clic en un botón para ver el toast (esquina superior derecha)

---

## RESUMEN RÁPIDO

| Categoría | Ejemplos usados | Dónde verlo |
|-----------|----------------|-------------|
| **Espaciado** | `py-5`, `mb-3`, `mb-5`, `g-4`, `me-2` | Hero, entre cards, navbar |
| **Colores** | `bg-primary`, `bg-success`, `text-white`, `bg-gradient-*` | Headers de cards, gradientes finales, badges |
| **Tipografía** | `display-4`, `lead`, `fw-bold`, `fs-1` a `fs-6` | Hero título, subtítulo, iconos grandes |
| **Grid** | `row`, `col-md-4`, `container`, grid CSS | 3 cards finales, health status |
| **Alineación** | `d-flex`, `justify-content-between`, `sticky-top` | Headers de cards, navbar, badges centrados |

---

## CONCLUSIÓN RÁPIDA

✅ **Espaciado:** Usamos `mb-5` entre secciones, `py-5` en hero, `g-4` en grids  
✅ **Colores:** Headers azul/verde/rojo, gradientes morados/verdes, badges de colores  
✅ **Tipografía:** Título `display-4`, subtítulo `lead`, tamaños `fs-1` a `fs-6`  
✅ **Grid:** Sistema de 3 columnas (`col-md-4`) que se apila en móvil  
✅ **Alineación:** Flexbox para separar títulos/botones, navbar sticky, todo centrado en hero  

**Total implementado: 70+ clases de Bootstrap 5**

---

## CHECKLIST DE CAPTURAS

Para la entrega, toma estas capturas:

1. ✅ **Vista general** - Todo el dashboard con scroll
2. ✅ **Hero header** - Título grande, badges, colores
3. ✅ **Card API Info** - Header azul, grid de 4 info-items
4. ✅ **Card Items** - Header verde, botón alineado a la derecha
5. ✅ **Card Health** - Header rojo, grid de 3 mini-cards
6. ✅ **3 Cards finales** - Gradientes morados/verdes/azules
7. ✅ **Vista móvil** - Redimensionar ventana < 768px
8. ✅ **Toast notification** - Clic en botón para ver notificación
9. ✅ **Navbar sticky** - Hacer scroll para ver que se queda arriba

Con estas capturas demuestras TODO lo que pedían.
