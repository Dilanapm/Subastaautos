// JavaScript para AutoSubastas Landing Page

document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar scroll effect
    const navbar = document.getElementById('mainNav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Ajuste para navbar fijo
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animación de fade-in para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Aplicar animaciones a elementos específicos
    document.querySelectorAll('.value-point, .auction-card, .testimonial-card, .security-feature').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Contador animado para estadísticas
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        }
        updateCounter();
    }

    // Activar contadores cuando sean visibles
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                const targetValue = parseInt(statNumber.textContent.replace(/[^\d]/g, ''));
                animateCounter(statNumber, targetValue);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-item').forEach(stat => {
        statsObserver.observe(stat);
    });

    // Simulación de tiempo real para subastas
    function updateAuctionTimers() {
        document.querySelectorAll('.auction-badge .badge').forEach(badge => {
            const text = badge.textContent;
            if (text.includes('Termina en')) {
                // Simulación simple de countdown
                const randomDecrease = Math.floor(Math.random() * 3) + 1;
                // En una implementación real, aquí se conectaría con el backend
            }
        });
    }

    // Actualizar timers cada minuto
    setInterval(updateAuctionTimers, 60000);

    // Filtros de productos (simulación)
    const filterSelects = document.querySelectorAll('.filter-bar select');
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            // En una implementación real, aquí se filtrarían los productos
            console.log('Filtro aplicado:', this.value);
            
            // Efecto visual de carga
            const auctionCards = document.querySelectorAll('.auction-card');
            auctionCards.forEach(card => {
                card.classList.add('loading');
                setTimeout(() => {
                    card.classList.remove('loading');
                }, 500);
            });
        });
    });

    // Validación del formulario de newsletter
    const newsletterForm = document.querySelector('.newsletter-signup form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (validateEmail(email)) {
                // Simulación de envío exitoso
                showNotification('¡Gracias por suscribirte! Te mantendremos informado.', 'success');
                this.reset();
            } else {
                showNotification('Por favor, ingresa un email válido.', 'error');
            }
        });
    }

    // Función para validar email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Sistema de notificaciones
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `alert alert-${type === 'success' ? 'success' : 'danger'} position-fixed`;
        notification.style.cssText = `
            top: 100px;
            right: 20px;
            z-index: 9999;
            min-width: 300px;
            animation: slideIn 0.3s ease;
        `;
        notification.innerHTML = `
            ${message}
            <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove después de 5 segundos
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    // Botones de puja (simulación)
    document.querySelectorAll('.auction-card .btn-primary').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Simulación de proceso de puja
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Procesando...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
                showNotification('¡Debes registrarte para participar en las subastas!', 'info');
            }, 1500);
        });
    });

    // Efecto parallax para hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Lazy loading para imágenes
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    // Manejo de errores de imágenes
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/400x250/1a365d/ffffff?text=Imagen+No+Disponible';
        });
    });

    // Búsqueda en FAQ
    function createFAQSearch() {
        const faqSection = document.querySelector('#faq .container');
        if (faqSection) {
            const searchContainer = document.createElement('div');
            searchContainer.className = 'mb-4';
            searchContainer.innerHTML = `
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Buscar en preguntas frecuentes..." id="faqSearch">
                            <button class="btn btn-outline-primary" type="button">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            const titleElement = faqSection.querySelector('.text-center');
            titleElement.parentNode.insertBefore(searchContainer, titleElement.nextSibling);
            
            // Funcionalidad de búsqueda
            const searchInput = document.getElementById('faqSearch');
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const accordionItems = document.querySelectorAll('.accordion-item');
                
                accordionItems.forEach(item => {
                    const question = item.querySelector('.accordion-button').textContent.toLowerCase();
                    const answer = item.querySelector('.accordion-body').textContent.toLowerCase();
                    
                    if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = searchTerm === '' ? 'block' : 'none';
                    }
                });
            });
        }
    }

    createFAQSearch();

    // Preloader (opcional)
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        }
    });

    // Manejo de resize para optimización móvil
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Reajustar elementos si es necesario
            console.log('Window resized');
        }, 250);
    });

    // Analytics tracking (simulación)
    function trackEvent(category, action, label) {
        console.log('Analytics Event:', { category, action, label });
        // Aquí se integraría con Google Analytics o similar
    }

    // Tracking de clics importantes
    document.querySelectorAll('.btn-primary, .btn-outline-primary').forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('Button', 'Click', this.textContent.trim());
        });
    });

    // Tracking de scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            if (maxScroll % 25 === 0) { // Track every 25%
                trackEvent('Scroll', 'Depth', `${maxScroll}%`);
            }
        }
    });

    console.log('AutoSubastas Landing Page loaded successfully!');
});

// Funciones globales
window.AutoSubastas = {
    showNotification: function(message, type = 'info') {
        // Reutilizar la función de notificaciones
        const notification = document.createElement('div');
        notification.className = `alert alert-${type === 'success' ? 'success' : 'danger'} position-fixed`;
        notification.style.cssText = `
            top: 100px;
            right: 20px;
            z-index: 9999;
            min-width: 300px;
        `;
        notification.innerHTML = `
            ${message}
            <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    },
    
    scrollToSection: function(sectionId) {
        const target = document.querySelector(sectionId);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
};

