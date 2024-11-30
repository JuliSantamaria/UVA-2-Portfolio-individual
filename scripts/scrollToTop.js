window.onscroll = function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Mostrar botón si hay scroll
    } else {
        scrollToTopBtn.style.display = "none"; // Ocultar botón si no hay scroll
    }
};

// Desplazar hacia arriba al hacer clic en el botón
document.getElementById("scrollToTopBtn").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};