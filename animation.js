window.onload = function() {
    var container = document.querySelector('#container-animation');
    var logos = Array.from(container.getElementsByClassName('logo'));

    // Inicializamos la posición y la velocidad de cada logo.
    var logoData = logos.map(function(logo, i) {
        // Dividimos el contenedor en regiones en función del número de logos.
        var regionWidth = container.offsetWidth / 2;
        var regionHeight = container.offsetHeight / 2;
    
        // Decidimos en qué cuadrante colocar cada logo.
        var quadrant = i % 4;
        var xBase = (quadrant % 2) * regionWidth;
        var yBase = Math.floor(quadrant / 2) * regionHeight;
    
        // Aseguramos que el logo comienza en su propio cuadrante.
        var x = Math.random() * (regionWidth - logo.offsetWidth) + xBase;
        var y = Math.random() * (regionHeight - logo.offsetHeight) + yBase;
    
        // Establecemos la velocidad en x e y con un valor fijo más un número aleatorio.
        var vx = 0.5 + Math.random();
        var vy = 0.5 + Math.random();
    
        return {
            x: x,
            y: y,
            vx: vx,
            vy: vy,
        };
    });
    

    function moveLogos() {
        logos.forEach(function(logo, i) {
            var data = logoData[i];

            data.x += data.vx;
            data.y += data.vy;

            if (data.x < 0 || data.x > container.offsetWidth - logo.offsetWidth) {
                // El logo ha golpeado un borde vertical, invertir velocidad x.
                data.vx *= -1;
            }
            if (data.y < 0 || data.y > container.offsetHeight - logo.offsetHeight) {
                // El logo ha golpeado un borde horizontal, invertir velocidad y.
                data.vy *= -1;
            }

            logo.style.left = data.x + 'px';
            logo.style.top = data.y + 'px';
        });
    }

    // Mover los logos cada 20 milisegundos.
    setInterval(moveLogos, 20);

    // Evento de redimensionamiento de la ventana
    window.onresize = function() {
        logoData.forEach(function(data, i) {
            // Revisar si el logo está fuera del contenedor después de la redimensión
            if (data.x > container.offsetWidth - logos[i].offsetWidth) {
                // Ajustar la posición x del logo para que esté dentro del contenedor
                data.x = container.offsetWidth - logos[i].offsetWidth;
            }
            if (data.y > container.offsetHeight - logos[i].offsetHeight) {
                // Ajustar la posición y del logo para que esté dentro del contenedor
                data.y = container.offsetHeight - logos[i].offsetHeight;
            }
        });
    };
}
