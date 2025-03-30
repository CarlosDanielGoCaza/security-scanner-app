// index.js para la interfaz de login en Electron

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Para mostrar el tamaño de la ventana en tiempo real
    function updateWindowSize() {
        const windowSize = document.querySelector('.window-size');
        if (windowSize) {
            windowSize.textContent = `${window.innerWidth} x ${window.innerHeight}`;
        }
    }
    
    // Actualizar el tamaño de la ventana cuando cambie
    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();
    
    // Event listeners para las tarjetas
    const loginCard = document.getElementById('login-card');
    const visitorsCard = document.getElementById('visitors-card');
    const registerCard = document.getElementById('register-card');
    const adminCard = document.getElementById('admin-card');
    
    // Para el botón de ayuda
    const helpButton = document.querySelector('.help');
    
    // Para el botón de notificaciones
    const notificationButton = document.querySelector('.notifications');
    
    // Funcionalidad para cada tarjeta
    if (loginCard) {
        loginCard.addEventListener('click', () => {
            console.log('Acceder clicked');
            // Aquí puedes agregar la navegación a la página de login
            // Por ejemplo: window.location.href = 'login.html';
        });
    }
    
    if (visitorsCard) {
        visitorsCard.addEventListener('click', () => {
            console.log('Visitantes clicked');
            // Aquí puedes agregar la navegación a la página de visitantes
            // Por ejemplo: window.location.href = 'visitors.html';
        });
    }
    
    if (registerCard) {
        registerCard.addEventListener('click', () => {
            console.log('Registrarse clicked');
            // Aquí puedes agregar la navegación a la página de registro
            // Por ejemplo: window.location.href = 'register.html';
        });
    }
    
    if (adminCard) {
        adminCard.addEventListener('click', () => {
            console.log('Modo admin clicked');
            // Aquí puedes agregar la navegación a la página de administrador
            // Por ejemplo: window.location.href = 'admin.html';
        });
    }
    
    // Funcionalidad para el botón de ayuda
    if (helpButton) {
        helpButton.addEventListener('click', () => {
            console.log('Help button clicked');
            // Aquí puedes mostrar un modal o página de ayuda
            // Por ejemplo: showHelpModal();
        });
    }
    
    // Funcionalidad para el botón de notificaciones
    if (notificationButton) {
        notificationButton.addEventListener('click', () => {
            console.log('Notification button clicked');
            // Aquí puedes mostrar un panel de notificaciones
            // Por ejemplo: toggleNotificationsPanel();
        });
    }

    // Función para simular el cambio entre páginas (puedes implementarla según tus necesidades)
    function navigateTo(page) {
        console.log(`Navigating to: ${page}`);
        // Aquí podrías implementar la lógica de navegación
        // Por ejemplo usando Electron IPC para comunicarte con el proceso principal
    }

    // Opcional: Detectar si estamos en un entorno Electron
    function isElectron() {
        return window && window.process && window.process.type;
    }

    if (isElectron()) {
        console.log('Running in Electron');
        // Puedes agregar funcionalidades específicas para Electron aquí
    } else {
        console.log('Not running in Electron');
        // Código específico para navegadores web si es necesario
    }
});