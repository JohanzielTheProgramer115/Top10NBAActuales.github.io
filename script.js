const jugadores = document.querySelectorAll(".jugador");


function mostrarJugadores() {

    jugadores.forEach(function(jugador) {

        const posicion = jugador.getBoundingClientRect().top;

        if (posicion < window.innerHeight - 100) {

            jugador.classList.add("visible");

        }

    });

}


window.addEventListener("scroll", mostrarJugadores);

mostrarJugadores();


function volverArriba() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}