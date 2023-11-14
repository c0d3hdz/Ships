particlesJS('particles-js', {
    particles: {
        number: { value: 160, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 },
            image: { src: 'img/github.svg', width: 100, height: 100 },
        },
        opacity: {
            value: 1,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 600 },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'bubble' },
            onclick: { enable: true, mode: 'repulse' },
            resize: true,
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
            repulse: { distance: 400, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
        },
    },
    retina_detect: true,
})

// ---------------------------------------------------------------------------
var nombres = ['Juan', 
'María', 
'Carlos', 
'Ana', 
'Luis',
'Laura', 
'Pedro', 
'Isabel', 
'José', 
'Sofía', 
'Karen',
'Geovany',
'Leslie'] //agregar mas nombres despues
var Nombre1 = document.getElementById('Nombre1')
var Nombre2 = document.getElementById('Nombre2')
var resultContainer = document.getElementById('result')
var resulporcentaje = document.getElementById('porcentaje')

function tasenfermo() {
    alert('Estás muy muy enfermo, we')

    var n1 = ''
    var n2 = ''

    for (var i = 0; i < nombres.length; i++) {
        var nom = nombres[i]

        if (Nombre1.value === nom) {
            n1 = nom
        } else if (Nombre2.value === nom) {
            n2 = nom
        }
    }

    if (n1 !== '' && n2 !== '') {
        mostrarPantallaDeCarga(function () {
        resultContainer.textContent = '💗El Ship de ' + n1 + ' y ' + n2 + ' obtuvo un resultado de:';
        generarPorcentajeAleatorio();
    });
    } else if (n1 !== '') {
        mostrarPantallaDeCarga(function (){
            resultContainer.textContent = 'Ta solito :('
            resulporcentaje.textContent = ''
        })
    } else if (n2 !== '') {
        mostrarPantallaDeCarga(function () {
            resultContainer.textContent = 'Ta solito :('
            resulporcentaje.textContent = ''
        })
    } else {
        mostrarPantallaDeCarga(function () {
            resultContainer.textContent = 'No se encontraron los Nombre'
            resulporcentaje.textContent = ''
        })
    }
}

function generarPorcentajeAleatorio() {
    var numeroAleatorio = Math.floor(Math.random() * 100) + 1
    var porcentaje = numeroAleatorio + '%'

    resulporcentaje.textContent = porcentaje
}

var opcionesNombres1 = document.getElementById('opcionesNombres1')
nombres.forEach(function (nombre) {
    var opcion = document.createElement('option')
    opcion.value = nombre
    opcionesNombres1.appendChild(opcion)
})

var opcionesNombres2 = document.getElementById('opcionesNombres2')
nombres.forEach(function (nombre) {
    var opcion = document.createElement('option')
    opcion.value = nombre
    opcionesNombres2.appendChild(opcion)
})
// ---------------------------------------------------------------------------------------
function mostrarPantallaDeCarga(callback) {
    var pantallaCarga = document.createElement('div')
    pantallaCarga.className = 'pantalla-carga'

    var corazon = document.createElement('div')
    corazon.className = 'corazon'
    corazon.innerHTML = '❤️'
    pantallaCarga.appendChild(corazon)

    document.body.appendChild(pantallaCarga)

    setTimeout(function () {
        ocultarPantallaDeCarga()
        if (callback && typeof callback === 'function') {
            callback()
        }
    }, 3000) // Cambia el tiempo según sea necesario
}

function ocultarPantallaDeCarga() {
    var pantallaCarga = document.querySelector('.pantalla-carga')
    if (pantallaCarga) {
        pantallaCarga.parentNode.removeChild(pantallaCarga)
    }
}
