document.addEventListener('DOMContentLoaded', function() {
    // 1. Función de clic en un elemento
    document.getElementById('miElemento').addEventListener('click', function() {
        // Código a ejecutar cuando se haga clic en el elemento con id 'miElemento'
    });

    // 2. Función de doble clic en un elemento
    document.getElementById('miElemento').addEventListener('dblclick', function() {
        // Código a ejecutar cuando se haga doble clic en el elemento con id 'miElemento'
    });

    // 3. Función de cambio en un campo de entrada
    document.getElementById('miInput').addEventListener('change', function() {
        // Código a ejecutar cuando cambie el valor del campo de entrada con id 'miInput'
    });

    // 4. Función de desplazamiento en una ventana
    window.addEventListener('scroll', function() {
        // Código a ejecutar cuando se desplace la ventana
    });

    // 5. Función de tecla presionada en un documento
    document.addEventListener('keydown', function(event) {
        // Código a ejecutar cuando se presione una tecla en el documento
        console.log('Tecla presionada:', event.key);
    });

    // 6. Función de enfoque en un elemento
    document.getElementById('miElemento').addEventListener('focus', function() {
        // Código a ejecutar cuando se enfoque en el elemento con id 'miElemento'
    });

    // 7. Función de cambio de tamaño de ventana
    window.addEventListener('resize', function() {
        // Código a ejecutar cuando se cambie el tamaño de la ventana
    });

    // 8. Función de carga completa de la página
    window.addEventListener('load', function() {
        // Código a ejecutar cuando se cargue completamente la página
    });
});
