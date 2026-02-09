// ============================================
// Cliente JavaScript Moderno con Bootstrap 5
// Tarea 4.1 - Framework de UI
// ============================================

// Configuración de la API
const API_BASE_URL = window.location.origin;

// ============================================
// UTILIDADES Y HELPERS
// ============================================

/**
 * Realiza peticiones fetch a la API con manejo de errores
 */
async function fetchAPI(endpoint, options = {}) {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error en la petición:', error);
        showToast('Error', `No se pudo completar la petición: ${error.message}`, 'danger');
        throw error;
    }
}

/**
 * Muestra notificaciones toast de Bootstrap
 */
function showToast(title, message, type = 'info') {
    const toastEl = document.getElementById('notification-toast');
    const toastHeader = toastEl.querySelector('.toast-header strong');
    const toastBody = toastEl.querySelector('.toast-body');
    
    // Configurar contenido
    toastHeader.textContent = title;
    toastBody.textContent = message;
    
    // Configurar color según tipo
    const bgClass = `bg-${type}`;
    toastEl.querySelector('.toast-header').className = `toast-header ${bgClass} text-white`;
    
    // Mostrar toast
    const toast = new bootstrap.Toast(toastEl, {
        autohide: true,
        delay: 4000
    });
    toast.show();
}

/**
 * Crea un spinner de carga de Bootstrap
 */
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

/**
 * Anima la entrada de elementos
 */
function animateElement(element, animation = 'fadeInUp') {
    element.classList.add('animate__animated', `animate__${animation}`);
}

// ============================================
// FUNCIONES DE LA API
// ============================================

/**
 * Carga la información de la API
 */
async function loadAPIInfo() {
    const container = document.getElementById('api-info-container');
    container.innerHTML = createLoader('Cargando información de la API...');

    try {
        const data = await fetchAPI('/api/info');
        
        // Determinar color del badge según entorno
        const envColor = data.environment === 'production' ? 'success' : 'warning';
        
        container.innerHTML = `
            <div class="api-info-details">
                <div class="info-item animate__animated animate__fadeInLeft">
                    <div class="d-flex align-items-center mb-2">
                        <i class="bi bi-tag-fill text-primary fs-4 me-2"></i>
                        <strong>Nombre</strong>
                    </div>
                    <p class="mb-0 fs-5">${data.name}</p>
                </div>
                
                <div class="info-item animate__animated animate__fadeInLeft animate__delay-1s">
                    <div class="d-flex align-items-center mb-2">
                        <i class="bi bi-box-seam text-success fs-4 me-2"></i>
                        <strong>Versión</strong>
                    </div>
                    <p class="mb-0 fs-5">
                        <span class="badge bg-secondary">${data.version}</span>
                    </p>
                </div>
                
                <div class="info-item animate__animated animate__fadeInRight">
                    <div class="d-flex align-items-center mb-2">
                        <i class="bi bi-file-text text-info fs-4 me-2"></i>
                        <strong>Descripción</strong>
                    </div>
                    <p class="mb-0">${data.description}</p>
                </div>
                
                <div class="info-item animate__animated animate__fadeInRight animate__delay-1s">
                    <div class="d-flex align-items-center mb-2">
                        <i class="bi bi-globe text-warning fs-4 me-2"></i>
                        <strong>Entorno</strong>
                    </div>
                    <p class="mb-0">
                        <span class="badge bg-${envColor} fs-6">
                            <i class="bi bi-server"></i> ${data.environment.toUpperCase()}
                        </span>
                    </p>
                </div>
            </div>
        `;
        
        showToast('Éxito', 'Información de la API cargada correctamente', 'success');
    } catch (error) {
        container.innerHTML = `
            <div class="alert alert-danger d-flex align-items-center" role="alert">
                <i class="bi bi-exclamation-triangle-fill fs-4 me-3"></i>
                <div>
                    <strong>Error al cargar la información</strong>
                    <p class="mb-0">No se pudo conectar con la API. Por favor, intenta de nuevo.</p>
                </div>
            </div>
        `;
    }
}

/**
 * Carga los items desde la API
 */
async function loadItems() {
    const container = document.getElementById('items-container');
    const btn = document.getElementById('load-items');
    
    // Deshabilitar botón mientras carga
    btn.disabled = true;
    btn.innerHTML = '<i class="bi bi-arrow-repeat spinner-border spinner-border-sm"></i> Cargando...';
    
    container.innerHTML = createLoader('Obteniendo items...');

    try {
        const data = await fetchAPI('/api/items');
        
        if (data.items && data.items.length > 0) {
            container.innerHTML = `
                <div class="items-grid">
                    ${data.items.map((item, index) => `
                        <div class="item-card animate__animated animate__bounceIn" style="animation-delay: ${index * 0.1}s">
                            <div class="d-flex justify-content-between align-items-start mb-3">
                                <h3 class="mb-0">
                                    <i class="bi bi-box text-success"></i>
                                    ${item.name}
                                </h3>
                                <span class="item-badge">#${item.id}</span>
                            </div>
                            <div class="d-flex align-items-center text-muted">
                                <i class="bi bi-hash me-2"></i>
                                <small>ID: ${item.id}</small>
                            </div>
                            <hr class="my-2">
                            <div class="d-flex justify-content-between align-items-center">
                                <small class="text-muted">
                                    <i class="bi bi-clock"></i> Cargado ahora
                                </small>
                                <button class="btn btn-sm btn-outline-success" onclick="showItemDetails('${item.id}', '${item.name}')">
                                    <i class="bi bi-eye"></i> Ver
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            
            showToast('Éxito', `${data.items.length} items cargados correctamente`, 'success');
        } else {
            container.innerHTML = `
                <div class="alert alert-info text-center" role="alert">
                    <i class="bi bi-inbox fs-1"></i>
                    <p class="mt-2 mb-0">No hay items disponibles en este momento</p>
                </div>
            `;
        }
    } catch (error) {
        container.innerHTML = `
            <div class="alert alert-danger d-flex align-items-center" role="alert">
                <i class="bi bi-exclamation-triangle-fill fs-4 me-3"></i>
                <div>
                    <strong>Error al cargar los items</strong>
                    <p class="mb-0">No se pudieron obtener los datos. Verifica tu conexión.</p>
                </div>
            </div>
        `;
    } finally {
        // Rehabilitar botón
        btn.disabled = false;
        btn.innerHTML = '<i class="bi bi-arrow-clockwise"></i> Cargar Items';
    }
}

/**
 * Verifica el estado de salud del servidor
 */
async function checkHealth() {
    const container = document.getElementById('health-container');
    const btn = document.getElementById('check-health');
    
    // Deshabilitar botón mientras verifica
    btn.disabled = true;
    btn.innerHTML = '<i class="bi bi-arrow-repeat spinner-border spinner-border-sm"></i> Verificando...';
    
    container.innerHTML = createLoader('Verificando estado del servidor...');

    try {
        const data = await fetchAPI('/health');
        
        container.innerHTML = `
            <div class="row g-3">
                <div class="col-md-4">
                    <div class="health-status-card animate__animated animate__fadeInLeft">
                        <div class="d-flex align-items-center">
                            <span class="health-indicator"></span>
                            <div>
                                <small class="text-muted d-block">Estado</small>
                                <strong class="text-success">${data.status}</strong>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-4">
                    <div class="health-status-card animate__animated animate__fadeInUp">
                        <div class="d-flex align-items-center">
                            <i class="bi bi-globe text-info fs-4 me-3"></i>
                            <div>
                                <small class="text-muted d-block">Entorno</small>
                                <strong>${data.environment}</strong>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-4">
                    <div class="health-status-card animate__animated animate__fadeInRight">
                        <div class="d-flex align-items-center">
                            <i class="bi bi-box text-warning fs-4 me-3"></i>
                            <div>
                                <small class="text-muted d-block">Versión</small>
                                <strong>${data.version}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="alert alert-success mt-3 animate__animated animate__bounceIn" role="alert">
                <div class="d-flex align-items-center">
                    <i class="bi bi-check-circle-fill fs-3 me-3"></i>
                    <div>
                        <strong>¡Servidor en perfecto estado!</strong>
                        <p class="mb-0">Todos los sistemas funcionan correctamente</p>
                    </div>
                </div>
            </div>
        `;
        
        showToast('Servidor OK', 'El servidor está funcionando correctamente', 'success');
    } catch (error) {
        container.innerHTML = `
            <div class="alert alert-danger animate__animated animate__shakeX" role="alert">
                <div class="d-flex align-items-center">
                    <i class="bi bi-x-circle-fill fs-3 me-3"></i>
                    <div>
                        <strong>Error de conexión</strong>
                        <p class="mb-0">No se pudo conectar con el servidor. Verifica que esté en ejecución.</p>
                    </div>
                </div>
            </div>
        `;
    } finally {
        // Rehabilitar botón
        btn.disabled = false;
        btn.innerHTML = '<i class="bi bi-activity"></i> Verificar Salud';
    }
}

/**
 * Muestra detalles de un item (ejemplo de modal)
 */
function showItemDetails(id, name) {
    showToast('Item Seleccionado', `Has seleccionado: ${name} (ID: ${id})`, 'info');
    console.log(`Detalles del item: ${id} - ${name}`);
}

// ============================================
// FUNCIONALIDAD DE TEMA CLARO/OSCURO
// ============================================

/**
 * Cambia entre tema claro y oscuro
 */
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-bs-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Actualizar icono del botón
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return; // Protección
    
    const icon = themeBtn.querySelector('i');
    if (!icon) return; // Protección
    
    if (newTheme === 'dark') {
        icon.className = 'bi bi-sun-fill';
        showToast('Tema Oscuro', 'Modo oscuro activado', 'dark');
    } else {
        icon.className = 'bi bi-moon-stars-fill';
        showToast('Tema Claro', 'Modo claro activado', 'light');
    }
    
    // Animar el cambio
    document.body.style.transition = 'background 0.3s ease';
}

/**
 * Carga el tema guardado
 */
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const html = document.documentElement;
    html.setAttribute('data-bs-theme', savedTheme);
    
    // Actualizar icono
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        const icon = themeBtn.querySelector('i');
        icon.className = savedTheme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
    }
}

// ============================================
// ANIMACIONES Y EFECTOS VISUALES
// ============================================

/**
 * Añade efecto de parallax al header
 */
function initParallaxEffect() {
    const hero = document.querySelector('.hero-header');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
}

/**
 * Añade contador animado a los badges
 */
function animateCounters() {
    const badges = document.querySelectorAll('.badge.fs-6');
    badges.forEach((badge, index) => {
        setTimeout(() => {
            badge.style.animation = 'pulse 2s ease-in-out infinite';
        }, index * 500);
    });
}

/**
 * Smooth scroll para navegación
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Añade efecto de typing al título
 */
function initTypingEffect() {
    const title = document.querySelector('.hero-header h1');
    if (!title) return;
    
    const originalText = title.textContent;
    title.textContent = '';
    let index = 0;
    
    const typeWriter = setInterval(() => {
        if (index < originalText.length) {
            title.textContent += originalText.charAt(index);
            index++;
        } else {
            clearInterval(typeWriter);
        }
    }, 100);
}

/**
 * Detecta cuando elementos entran en viewport
 */
function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
}

/**
 * Actualiza el estado de conexión en tiempo real
 */
function monitorConnectionStatus() {
    window.addEventListener('online', () => {
        showToast('Conexión Restaurada', 'Estás nuevamente conectado a internet', 'success');
    });
    
    window.addEventListener('offline', () => {
        showToast('Sin Conexión', 'Se perdió la conexión a internet', 'warning');
    });
}

/**
 * Añade confetti cuando todo carga correctamente (efecto especial)
 */
function celebrateSuccess() {
    // Simulación simple de confetti con emojis
    const emojis = ['🎉', '✨', '🚀', '💫', '⭐'];
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
    document.body.appendChild(container);
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.cssText = `
                position: absolute;
                left: ${Math.random() * 100}%;
                top: -50px;
                font-size: ${20 + Math.random() * 20}px;
                animation: fall ${3 + Math.random() * 2}s linear forwards;
            `;
            container.appendChild(emoji);
            
            setTimeout(() => emoji.remove(), 5000);
        }, i * 100);
    }
    
    setTimeout(() => container.remove(), 6000);
}

// Añadir animación CSS para el confetti
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// INICIALIZACIÓN
// ============================================

/**
 * Inicializa la aplicación cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Inicializando aplicación con Bootstrap 5...');
    
    // Cargar tema guardado
    loadSavedTheme();
    
    // Cargar información de la API al inicio
    loadAPIInfo();
    
    // Event Listeners para botones
    const loadItemsBtn = document.getElementById('load-items');
    if (loadItemsBtn) {
        loadItemsBtn.addEventListener('click', loadItems);
    }
    
    const checkHealthBtn = document.getElementById('check-health');
    if (checkHealthBtn) {
        checkHealthBtn.addEventListener('click', checkHealth);
    }
    
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
    
    // Inicializar efectos visuales
    initSmoothScroll();
    initIntersectionObserver();
    animateCounters();
    monitorConnectionStatus();
    
    // Opcional: efecto parallax (puede afectar performance en móviles)
    // initParallaxEffect();
    
    // Mostrar mensaje de bienvenida
    setTimeout(() => {
        showToast('¡Bienvenido!', 'Dashboard cargado correctamente', 'success');
    }, 1000);
    
    // Celebración inicial (opcional - comentar si es muy llamativo)
    setTimeout(() => {
        celebrateSuccess();
    }, 2000);
    
    console.log('✅ Aplicación inicializada correctamente');
    console.log('🔗 API Base URL:', API_BASE_URL);
    console.log('🎨 Framework: Bootstrap 5.3.2');
    console.log('📱 Dispositivo:', /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'Móvil' : 'Desktop');
});

// ============================================
// MANEJO DE ERRORES GLOBAL
// ============================================

window.addEventListener('error', (event) => {
    console.error('Error capturado:', event.error);
    showToast('Error', 'Ha ocurrido un error inesperado', 'danger');
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Promesa rechazada:', event.reason);
    showToast('Error', 'Error en petición asíncrona', 'danger');
});

// ============================================
// EXPORTAR FUNCIONES (opcional para testing)
// ============================================

window.appAPI = {
    loadAPIInfo,
    loadItems,
    checkHealth,
    toggleTheme,
    showToast
};
