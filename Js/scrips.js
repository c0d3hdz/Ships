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
const nombres = ["YANET",
    "ADRIEL",
    "ANGELA",
    "GUADALUPE",
    "LAURA",
    "ANDRES",
    "LESLIE",
    "CARLOS MARIO",
    "LUZ ARELI",
    "EMMANUEL",
    "ULISES",
    "ABIGAIL",
    "ROLANDO",
    "YESSICA MARLEN",
    "SEBASTIAN",
    "DAMIAN",
    "JESUS ANTONIO",
    "ELVIN",
    "YAHIR",
    "ALEJANDRA",
    "GEOVANY",
    "JUAN MARTIN",
    "KAREN",
    "JANET",
    "NADIE"] //agregar mas nombres despues

const Nombre1 = document.getElementById('Nombre1')
const Nombre2 = document.getElementById('Nombre2')
const resultContainer = document.getElementById('result')
const resulporcentaje = document.getElementById('porcentaje')
const boton = document.getElementById('botonCalcular')

function tasenfermo() {
    boton.disabled = true
    let n1 = ''
    let n2 = ''

    nombres.forEach((nom) => {
        if (Nombre1.value === nom) {
            n1 = nom

        } else if (Nombre2.value === nom) {
            n2 = nom
        }
    })

    switch (true) {
        case (n1 === 'GEOVANY' && n2 === 'LESLIE') || (n2 === 'GEOVANY' && n1 === 'LESLIE'): //aqui pon los nombres solo para molestar XD
            mostrarPantallaDeCarga(function () {
                resultContainer.textContent = '💗El Ship de ' + n1 + ' y ' + n2 + ' obtuvo un resultado de:'
                const numeroAleatorio = Math.floor(Math.random() * (100 - 60 + 1)) + 60
                const porcentaje = numeroAleatorio + '%'

                resulporcentaje.textContent = porcentaje
            })
            break

        case (n1 === 'ELVIN' && n2 === 'JANET') || (n2 === 'ELVIN' && n1 === 'JANET'): //El amigo que no debe regresar con su ex
            mostrarPantallaDeCarga(function () {
                resultContainer.textContent = '(•_•) NO BRO ESO NO'
            })
            break

        case (n1 === 'DAMIAN' && n2 !== '') || (n2 === 'DAMIAN' && n1 !== ''): //Aqui algun nombre que no quieras que se use XD
            mostrarPantallaDeCarga(function () {
                resultContainer.textContent = '(•_•), encerio Bro?, eso es muy enfermo'

                setTimeout(function () {
                    window.close();
                }, 5000);
            })
            break

        case n1 !== '' && n2 !== '':
            mostrarPantallaDeCarga(function () {
                resultContainer.textContent = '💗El Ship de ' + n1 + ' y ' + n2 + ' obtuvo un resultado de:'
                generarPorcentajeAleatorio()
            })
            break

        case n1 !== '':
            mostrarPantallaDeCarga(function () {
                resultContainer.textContent = 'Ta solit@ :('
                resulporcentaje.textContent = ''
            })
            break

        case n2 !== '':
            mostrarPantallaDeCarga(function () {
                resultContainer.textContent = 'Ta solit@ :('
                resulporcentaje.textContent = ''
            })
            break

        default:
            mostrarPantallaDeCarga(function () {
                resultContainer.textContent = 'No se encontraron los Nombres'
                resulporcentaje.textContent = ''
            })
    }
}

function generarPorcentajeAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1
    const porcentaje = numeroAleatorio + '%'

    resulporcentaje.textContent = porcentaje
}

const opcionesNombres1 = document.getElementById('opcionesNombres1')
nombres.forEach(function (nombre) {
    const opcion = document.createElement('option')
    opcion.value = nombre
    opcionesNombres1.appendChild(opcion)
})

const opcionesNombres2 = document.getElementById('opcionesNombres2')
nombres.forEach(function (nombre) {
    const opcion = document.createElement('option')
    opcion.value = nombre
    opcionesNombres2.appendChild(opcion)
})
// ---------------------------------------------------------------------------------------
function mostrarPantallaDeCarga(callback) {
    const pantallaCarga = document.createElement('div')
    pantallaCarga.className = 'pantalla-carga'

    const corazon = document.createElement('div')
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
    const pantallaCarga = document.querySelector('.pantalla-carga')

    pantallaCarga ? pantallaCarga.parentNode.removeChild(pantallaCarga) : null

    boton.disabled = false
}
