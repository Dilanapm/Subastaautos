document.addEventListener('DOMContentLoaded', function () {

    // Sistema avanzado de clasificación de autos (definido primero)
    const carClassification = {
        // Clasificación por marca y modelo
        brands: {
            lamborghini: {
                keywords: ['lamborghini', 'lambo', 'aventador', 'huracan', 'urus', 'gallardo'],
                images: [
                    'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/02/07/16757558364735.jpg',
                    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                ]
            },
            ferrari: {
                keywords: ['ferrari', '458', '488', 'f40', 'f50', 'laferrari', 'enzo'],
                images: [
                    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                ]
            },
            porsche: {
                keywords: ['porsche', '911', 'turbo', 'carrera', 'gt3', 'cayenne', 'panamera'],
                images: [
                    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                ]
            },
            toyota: {
                keywords: ['toyota', 'supra', 'camry', 'corolla', 'prius', 'land cruiser'],
                images: [
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                ]
            },
            bmw: {
                keywords: ['bmw', 'm3', 'm4', 'm5', 'serie', 'x5', 'x6'],
                images: [
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                ]
            },
            mercedes: {
                keywords: ['mercedes', 'benz', 'amg', 'clase', 'c63', 'e63', 's63'],
                images: [
                    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                ]
            },
            audi: {
                keywords: ['audi', 'quattro', 'rs3', 'rs4', 'rs6', 'r8'],
                images: [
                    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                ]
            }
        },

        // Clasificación por categoría
        categories: {
            sports: {
                keywords: ['deportivo', 'sport', 'racing', 'turbo', 'gt', 'performance'],
                images: [
                    'https://th.bing.com/th/id/R.4e71fcdd9257d32661a172d013c8ae6f?rik=DW2cKJyldCte0w&pid=ImgRaw&r=0',
                    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                ]
            },
            luxury: {
                keywords: ['lujo', 'luxury', 'premium', 'ejecutivo', 'limousine'],
                images: [
                    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                ]
            },
            classic: {
                keywords: ['clásico', 'vintage', 'retro', 'antiguo', 'colección'],
                images: [
                    'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                ]
            },
            suv: {
                keywords: ['suv', 'camioneta', '4x4', 'todoterreno', 'crossover'],
                images: [
                    'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                ]
            }
        },

        // Imágenes genéricas por defecto
        defaultImages: [
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            'https://th.bing.com/th/id/R.4e71fcdd9257d32661a172d013c8ae6f?rik=DW2cKJyldCte0w&pid=ImgRaw&r=0',
            'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        ]
    };



    // Reemplazar todas las imágenes con errores
    function fixBrokenImages() {
        const imagesToFix = document.querySelectorAll('img');

        imagesToFix.forEach(img => {
            // Verificar si la URL contiene placeholder.com
            if (img.src.includes('placeholder.com') || img.src.includes('via.placeholder')) {
                // Reemplazar con imágenes alternativas según el contexto
                if (img.alt && (img.alt.includes('Avatar') || img.classList.contains('author-image'))) {
                    // Para imágenes de avatar/usuarios
                    img.src = 'https://randomuser.me/api/portraits/men/' + Math.floor(Math.random() * 100) + '.jpg';
                    if (img.alt && (img.alt.includes('María') || img.alt.includes('mujer'))) {
                        img.src = 'https://randomuser.me/api/portraits/women/' + Math.floor(Math.random() * 100) + '.jpg';
                    }
                } else if (img.alt && (img.alt.includes('auto') || img.alt.includes('car') || img.closest('.auction-card'))) {
                    // Para imágenes de autos, usar clasificación inteligente
                    img.src = classifyCarImage(img);
                } else {
                    // Imagen genérica de respaldo
                    img.src = 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                }

                // Añadir manejo de errores para la nueva imagen
                img.onerror = function () {
                    // Si la nueva imagen también falla, usar una imagen fallback muy confiable
                    if (!this.dataset.fallbackUsed) {
                        this.dataset.fallbackUsed = "true";
                        this.src = carClassification.defaultImages[0];
                    }
                };
            }
        });
    }

    // Llamar a la función después de que el documento se carga
    window.addEventListener('load', fixBrokenImages);

    // Función para pre-cargar imágenes críticas
    function preloadCriticalImages() {
        const criticalImages = [
            ...carClassification.defaultImages,
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/1.jpg'
        ];

        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    // Pre-cargar imágenes críticas
    preloadCriticalImages();

    // Función para actualizar dinámicamente las imágenes de las cards de subasta
    function updateAuctionImages() {
        const auctionCards = document.querySelectorAll('.auction-card');
        let autoClassifiedCount = 0;

        auctionCards.forEach(card => {
            const img = card.querySelector('img');
            const title = card.querySelector('.card-title')?.textContent || '';

            if (img && !img.dataset.imageUpdated) {
                img.dataset.imageUpdated = "true";

                // Guardar imagen original para poder restaurar
                if (!img.dataset.originalSrc) {
                    img.dataset.originalSrc = img.src;
                }

                // Si la imagen actual es una de las placeholder o URLs problemáticas, reemplazarla
                if (img.src.includes('placeholder') || img.src.includes('via.placeholder') || img.src.includes('bing.com')) {
                    const newSrc = classifyCarImage(img);
                    img.src = newSrc;
                    autoClassifiedCount++;
                    console.log(`Auto-clasificación: ${title} -> ${newSrc}`);
                }

                // Agregar efecto de hover para mostrar detalles
                img.addEventListener('mouseenter', function () {
                    console.log(`Mostrando detalles de: ${title}`);
                });
            }
        });

        if (autoClassifiedCount > 0) {
            console.log(`Auto-clasificación completada: ${autoClassifiedCount} imágenes actualizadas automáticamente.`);
        }
    }

    // Actualizar imágenes de subastas cuando el DOM esté listo
    setTimeout(updateAuctionImages, 1000);

    // Función para clasificar automóviles inteligentemente (ahora que carClassification ya está definido)
    // 1) --- Reemplaza ambas definiciones existentes de classifyCarImage POR ESTA ÚNICA ---
    function classifyCarImage(element) {
        // Normaliza texto (quita acentos, pasa a minúsculas)
        const norm = (s) => (s || '')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, ''); // sin acentos

        const card = element.closest('.auction-card');
        const title = card?.querySelector('.card-title')?.textContent || '';
        const bodyText = card?.textContent || '';
        const textContent = [
            element.alt,
            element.title,
            title,
            bodyText
        ].map(norm).join(' ');

        // Buscar por marca
        for (const [brandName, brandData] of Object.entries(carClassification.brands)) {
            for (const keyword of brandData.keywords) {
                if (textContent.includes(norm(keyword))) {
                    console.log(`Clasificado como ${brandName} por palabra clave: ${keyword}`);
                    return brandData.images[Math.floor(Math.random() * brandData.images.length)];
                }
            }
        }

        // Buscar por categoría
        for (const [categoryName, categoryData] of Object.entries(carClassification.categories)) {
            for (const keyword of categoryData.keywords) {
                if (textContent.includes(norm(keyword))) {
                    console.log(`Clasificado como ${categoryName} por palabra clave: ${keyword}`);
                    return categoryData.images[Math.floor(Math.random() * categoryData.images.length)];
                }
            }
        }

        // Imagen por defecto
        console.log('Usando imagen por defecto para auto');
        return carClassification.defaultImages[Math.floor(Math.random() * carClassification.defaultImages.length)];
    }


    // Reemplazar el antiguo manejador de errores por uno mejorado
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function () {
            if (!this.dataset.errorHandled) {
                this.dataset.errorHandled = "true";

                if (this.closest('.auction-card')) {
                    // Si es una imagen de auto, usar clasificación inteligente
                    this.src = classifyCarImage(this);
                } else if (this.closest('.testimonial-author')) {
                    // Si es un avatar
                    const randomGender = Math.random() > 0.5 ? 'men' : 'women';
                    this.src = `https://randomuser.me/api/portraits/${randomGender}/${Math.floor(Math.random() * 100)}.jpg`;
                } else {
                    // Imagen genérica
                    this.src = 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                }
            }

            // Reportar error para análisis
            console.warn('Error al cargar imagen:', this.getAttribute('src'));
        });
    });

    // Función para mostrar notificaciones elegantes
    function showNotification(message, type = 'info', duration = 4000) {
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} position-fixed`;
        notification.style.cssText = `
            top: 20px;
            right: 20px;
            z-index: 9999;
            min-width: 350px;
            max-width: 500px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
            border-radius: 10px;
            border: none;
            animation: slideInRight 0.4s ease;
        `;

        let icon = 'info-circle';
        if (type === 'success') icon = 'check-circle';
        if (type === 'warning') icon = 'exclamation-triangle';
        if (type === 'danger') icon = 'exclamation-circle';

        notification.innerHTML = `
            <div class="d-flex align-items-center">
                <i class="fas fa-${icon} me-3 fa-lg"></i>
                <div class="flex-grow-1">
                    ${message}
                </div>
                <button type="button" class="btn-close ms-3" onclick="this.parentElement.parentElement.remove()"></button>
            </div>
        `;

        // Agregar animación CSS inline
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        if (!document.querySelector('style[data-notifications]')) {
            style.setAttribute('data-notifications', 'true');
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        // Auto-remove después del tiempo especificado
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideInRight 0.4s ease reverse';
                setTimeout(() => {
                    if (notification.parentElement) {
                        notification.remove();
                    }
                }, 400);
            }
        }, duration);
    }

    // 3) --- (Opcional) Permite reclasificar SIEMPRE al usar el botón ---
    //     Cambia classifyAllImages para que NO dependa de 'placeholder' o 'bing'.
    //     Solo forzamos nueva src en manual:
    function classifyAllImages() {
        const auctionImages = document.querySelectorAll('.auction-card img');
        let classifiedCount = 0;

        console.log('Iniciando clasificación de imágenes...');
        showNotification('Iniciando clasificación inteligente de imágenes...', 'info', 2000);

        auctionImages.forEach((img, index) => {
            if (!img.dataset.originalSrc) {
                img.dataset.originalSrc = img.src; // backup
            }
            setTimeout(() => {
                const newSrc = classifyCarImage(img);
                if (newSrc && newSrc !== img.src) {
                    img.src = newSrc;
                    classifiedCount++;
                    console.log(`Imagen ${index + 1} clasificada: ${newSrc}`);
                    img.classList.add('classified');
                    setTimeout(() => img.classList.remove('classified'), 600);
                }
            }, index * 200);
        });

        setTimeout(() => {
            const message = `✨ Clasificación completada: ${classifiedCount} imágenes actualizadas de ${auctionImages.length} total.`;
            showNotification(message, 'success', 5000);
        }, auctionImages.length * 200 + 500);
    }

// Función para restaurar imágenes originales
function resetImages() {
    const auctionImages = document.querySelectorAll('.auction-card img');
    let restoredCount = 0;

        showNotification('Restaurando imágenes originales...', 'info', 2000);

        auctionImages.forEach((img, index) => {
            if (img.dataset.originalSrc) {
                setTimeout(() => {
                    img.src = img.dataset.originalSrc;
                    restoredCount++;

                    // Efecto visual
                    img.style.transition = 'opacity 0.3s ease';
                    img.style.opacity = '0.7';
                    setTimeout(() => {
                        img.style.opacity = '1';
                    }, 150);
                }, index * 100);
            }
        });

        setTimeout(() => {
            const message = `🔄 Restauración completada: ${restoredCount} imágenes restauradas.`;
            showNotification(message, 'warning', 4000);
        }, auctionImages.length * 100 + 300);
    }
    // 2) --- Conectar los botones SIN usar un segundo DOMContentLoaded ---
(function wireButtons() {
    // Como ya estamos dentro del primer DOMContentLoaded, podemos correr esto directo
    const tryWire = () => {
        const classifyBtn = document.getElementById('classifyImagesBtn');
        const resetBtn = document.getElementById('resetImagesBtn');

        if (classifyBtn && !classifyBtn.dataset.wired) {
            classifyBtn.dataset.wired = "true";
            classifyBtn.addEventListener('click', function () {
                this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Clasificando...';
                this.disabled = true;

                setTimeout(() => {
                    classifyAllImages();
                    this.innerHTML = '<i class="fas fa-magic me-2"></i>Clasificar Imágenes Automáticamente';
                    this.disabled = false;
                }, 1000);
            });
        }

        if (resetBtn && !resetBtn.dataset.wired) {
            resetBtn.dataset.wired = "true";
            resetBtn.addEventListener('click', function () {
                this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Restaurando...';
                this.disabled = true;

                setTimeout(() => {
                    resetImages();
                    this.innerHTML = '<i class="fas fa-undo me-2"></i>Restaurar Imágenes Originales';
                    this.disabled = false;
                }, 500);
            });
        }
    };

    // Por si el HTML llega tarde, intentamos un par de veces
    tryWire();
    setTimeout(tryWire, 300);
    setTimeout(tryWire, 1000);
})();


    // Navbar scroll effect
    const navbar = document.getElementById('mainNav');

    window.addEventListener('scroll', function () {
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
                const navHeight = document.getElementById('mainNav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animación de fade-in para elementos
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                setTimeout(() => {
                    observer.unobserve(entry.target);
                }, 600);
            }
        });
    }, observerOptions);

    // Aplicar animaciones a elementos específicos
    document.querySelectorAll('.value-point, .auction-card, .testimonial-card, .security-feature, .stat-item').forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    // Contador animado para estadísticas
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const startTime = performance.now();

        function easeOutQuad(t) {
            return t * (2 - t);
        }

        function updateCounter(timestamp) {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuad(progress);

            const value = Math.floor(easedProgress * target);

            if (element.id === 'stat2') {
                element.textContent = value + '%';
            } else if (element.id === 'stat4') {
                element.textContent = value + ' Dptos.';
            } else {
                element.textContent = value + '+';
            }

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }

        requestAnimationFrame(updateCounter);
    }

    // Activar contadores cuando sean visibles
    const statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statItem = entry.target;
                const statValue = parseInt(statItem.dataset.stat);
                const statNumber = statItem.querySelector('.stat-number');

                if (statNumber && !statNumber.dataset.animated) {
                    animateCounter(statNumber, statValue);
                    statNumber.dataset.animated = true;
                }

                statsObserver.unobserve(statItem);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-item').forEach(stat => {
        statsObserver.observe(stat);
    });

    // Simulación de tiempo real para subastas
    function updateAuctionTimers() {
        document.querySelectorAll('.badge').forEach(badge => {
            if (badge.textContent.includes('Termina en')) {
                let timeText = badge.textContent.replace('Termina en ', '');
                let parts = timeText.split(' ');

                let hours = 0, minutes = 0, days = 0;
                parts.forEach(part => {
                    if (part.includes('h')) hours = parseInt(part);
                    if (part.includes('m')) minutes = parseInt(part);
                    if (part.includes('d')) days = parseInt(part);
                });

                minutes--;

                if (minutes < 0) {
                    minutes = 59;
                    hours--;

                    if (hours < 0 && days > 0) {
                        hours = 23;
                        days--;
                    }
                }

                let newText = 'Termina en ';
                if (days > 0) newText += days + 'd ';
                if (hours > 0 || days > 0) newText += hours + 'h ';
                newText += minutes + 'm';

                badge.textContent = newText;

                if (days === 0 && hours < 3) {
                    badge.classList.remove('bg-warning', 'bg-success');
                    badge.classList.add('bg-danger');
                } else if (days === 0 && hours < 12) {
                    badge.classList.remove('bg-success', 'bg-danger');
                    badge.classList.add('bg-warning');
                }
            }
        });
    }

    updateAuctionTimers();
    setInterval(updateAuctionTimers, 60000);  // Actualizar cada minuto

    // Manejar botones de puja
    document.querySelectorAll('.auction-card .btn-primary').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            const cardTitle = this.closest('.auction-card').querySelector('.card-title').textContent;
            const currentBid = this.closest('.auction-card').querySelector('.bid-amount').textContent;

            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Procesando...';
            this.disabled = true;

            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;

                alert(`Para pujar en "${cardTitle}" (${currentBid}), necesitas iniciar sesión. Serás redirigido al formulario de registro.`);

                const registroSection = document.querySelector('#registro');
                if (registroSection) {
                    const navHeight = document.getElementById('mainNav').offsetHeight;
                    const targetPosition = registroSection.getBoundingClientRect().top + window.pageYOffset - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 1500);
        });
    });

    // Manejar el preloader
    window.addEventListener('load', function () {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 300);
            }, 500);
        }
    });

    console.log('AutoSubastas con clasificación inteligente de autos cargado exitosamente!');
});