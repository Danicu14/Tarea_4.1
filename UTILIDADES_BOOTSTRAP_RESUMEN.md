# Utilidades y Clases de Bootstrap 5 Aplicadas

## Introducción

Bootstrap 5 es un framework de diseño que proporciona clases CSS predefinidas para crear interfaces modernas de forma rápida. En esta aplicación hemos implementado las 5 categorías principales de utilidades que Bootstrap ofrece.

---

## 1. ESPACIADO (Spacing)

**¿Para qué sirve?**  
Las clases de espaciado permiten controlar márgenes (margin) y rellenos (padding) de los elementos sin escribir CSS personalizado. Siguen el patrón: `{propiedad}{lado}-{tamaño}` donde el tamaño va de 0 a 5.

**Aplicaciones en el proyecto:**

- **`py-5`** - Padding vertical grande (3rem) aplicado al hero header morado. Crea espacio generoso arriba y abajo para que el contenido respire.

- **`mb-5`** - Margin bottom de 3rem entre cada sección principal (cards). Mantiene una separación consistente y profesional entre bloques de contenido.

- **`mb-3` y `mb-4`** - Márgenes inferiores más pequeños usados entre títulos y párrafos dentro del hero, creando jerarquía visual.

- **`me-2` y `ms-2`** - Margin end/start (derecha/izquierda) de 0.5rem para separar iconos del texto en la navbar.

- **`g-3` y `g-4`** - Gap (espacios) de 1rem y 1.5rem entre columnas del grid, aplicado a las tarjetas de estadísticas y health status.

- **`ms-auto`** - Margin start automático que empuja los links de navegación hacia la derecha del navbar.

---

## 2. COLORES

**¿Para qué sirve?**  
Bootstrap incluye colores semánticos predefinidos que comunican significado y mantienen coherencia visual. Los colores están disponibles para fondos (`bg-*`), textos (`text-*`) y componentes.

**Aplicaciones en el proyecto:**

- **`bg-primary`** (azul) - Header de la card "Información de la API". Identifica la sección principal de datos de la aplicación.

- **`bg-success`** (verde) - Header de la card "Items de Ejemplo". Asocia los items con datos exitosos o disponibles.

- **`bg-danger`** (rojo) - Header de la card "Estado del Servidor". Destaca la importancia crítica del monitoreo de salud.

- **`bg-dark`** (negro) - Footer de la aplicación. Proporciona contraste y cierre visual.

- **`bg-gradient-primary`, `bg-gradient-success`, `bg-gradient-info`** - Gradientes personalizados en las 3 cards finales (Performance, Seguridad, Escalable). Añaden profundidad y modernidad.

- **`text-white`** - Texto blanco sobre fondos oscuros para garantizar legibilidad.

- **`text-muted`** - Texto gris claro usado en labels como "Entorno", "ID:", etc. Crea jerarquía visual diferenciando información primaria de secundaria.

---

## 3. TIPOGRAFÍA

**¿Para qué sirve?**  
Las utilidades tipográficas controlan tamaños, pesos y estilos de texto, permitiendo crear jerarquías visuales claras sin CSS custom.

**Aplicaciones en el proyecto:**

- **`display-4`** - Título principal "Aplicación FastAPI" en el hero. Tamaño extra grande (3.5rem) que capta inmediatamente la atención del usuario.

- **`lead`** - Subtítulo "Dashboard moderno conectado a la API...". Texto destacado (1.25rem) que complementa el título sin competir con él.

- **`fw-bold`** - Negrita aplicada a títulos principales. Font-weight de 700 que da presencia y jerarquía.

- **`fs-1`** - Iconos extra grandes (2.5rem) mostrados cuando no hay contenido disponible. Comunica visualmente estados vacíos.

- **`fs-3`** - Iconos prominentes (1.75rem) en alertas de éxito/error. Llaman la atención sobre mensajes importantes.

- **`fs-4` y `fs-5`** - Iconos medianos (1.5rem y 1.25rem) en las cards de información. Balance entre visibilidad y espacio.

- **`text-center`** - Centrado horizontal aplicado al hero y footer. Crea simetría y balance visual.

---

## 4. GRID Y LAYOUT

**¿Para qué sirve?**  
El sistema de grid de Bootstrap usa 12 columnas flexibles que se adaptan automáticamente a diferentes tamaños de pantalla (responsive design). Los breakpoints principales son: `md` (≥768px), `lg` (≥992px).

**Aplicaciones en el proyecto:**

- **`container`** - Contenedor responsive principal que centra el contenido y mantiene márgenes laterales consistentes en diferentes pantallas.

- **`container-fluid`** - Usado en la navbar para ocupar el ancho completo de la pantalla.

- **`row`** - Define filas que contienen columnas del grid.

- **`col-md-4`** - Columnas que ocupan 4/12 (33.33%) del ancho en pantallas medianas y grandes, pero 12/12 (100%) en móviles. Aplicado a:
  - Las 3 cards de estadísticas (Performance, Seguridad, Escalable)
  - Las 3 mini-cards de health status (Estado, Entorno, Versión)

- **Grid CSS custom** - Para los items implementamos un grid automático con `repeat(auto-fill, minmax(280px, 1fr))` que crea columnas dinámicamente según el espacio disponible.

---

## 5. ALINEACIÓN

**¿Para qué sirve?**  
Las utilidades Flexbox de Bootstrap facilitan la alineación horizontal y vertical de elementos, distribución de espacio y posicionamiento.

**Aplicaciones en el proyecto:**

- **`d-flex`** - Activa Flexbox en un contenedor, habilitando capacidades de alineación avanzadas.

- **`justify-content-between`** - Distribuye elementos con espacio máximo entre ellos. Usado en headers de cards para poner el título a la izquierda y el botón a la derecha.

- **`justify-content-center`** - Centra elementos horizontalmente. Aplicado a los badges en el hero.

- **`align-items-center`** - Alinea elementos verticalmente al centro. Usado para alinear iconos con texto.

- **`text-center`** - Centra texto dentro de su contenedor. Hero y footer completamente centrados.

- **`sticky-top`** - Posicionamiento sticky aplicado a la navbar. Se mantiene visible en la parte superior al hacer scroll.

- **`position-fixed top-0 end-0`** - Posiciona las notificaciones toast en la esquina superior derecha de forma fija.

---

## Conclusión

Hemos implementado **más de 70 clases diferentes de Bootstrap 5** en esta aplicación, logrando:

✓ **Coherencia visual** - Sistema de diseño unificado  
✓ **Responsive design** - Adaptación automática a móviles, tablets y desktop  
✓ **Desarrollo rápido** - Sin necesidad de escribir CSS extenso  
✓ **Mantenibilidad** - Código estandarizado y fácil de modificar  
✓ **Accesibilidad** - Componentes con semántica correcta
