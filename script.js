document.addEventListener('DOMContentLoaded', function() {
    
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
                } else if (img.alt && (img.alt.includes('auto') || img.alt.includes('car'))) {
                    // Para imágenes de autos
                    const carImages = [
                        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', // Coche deportivo 1
                        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', // Porsche
                        'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', // Colección
                        'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', // Coche retro
                        'https://images.unsplash.com/photo-1621135802920-433219591ebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'  // Lamborghini
                    ];
                    img.src = carImages[Math.floor(Math.random() * carImages.length)];
                } else {
                    // Imagen genérica de respaldo
                    img.src = 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                }
                
                // Añadir manejo de errores para la nueva imagen
                img.onerror = function() {
                    // Si la nueva imagen también falla, usar una imagen fallback local o CDN muy confiable
                    this.src = 'https://cdn.jsdelivr.net/gh/omniti-labs/jsend@master/images/jsend.png';
                };
            }
        });
    }
    
    // Llamar a la función después de que el documento se carga
    window.addEventListener('load', fixBrokenImages);
    
    // Reemplazar el antiguo manejador de errores por uno mejorado
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            if (!this.dataset.errorHandled) {
                this.dataset.errorHandled = "true";
                
                if (this.closest('.auction-card')) {
                    // Si es una imagen de auto
                    const carImages = [
                        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                        'https://images.unsplash.com/photo-1621135802920-433219591ebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                    ];
                    this.src = carImages[Math.floor(Math.random() * carImages.length)];
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
    
    // Navbar scroll effect
    const navbar = document.getElementById('mainNav');
    
    // ... resto del código existente ...
});