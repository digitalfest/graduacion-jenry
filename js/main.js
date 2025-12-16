const boton = document.getElementById('btnIniciarMusica');
    const musica = document.getElementById('musicaFondo');

    boton.addEventListener('click', function () {
      // Intenta reproducir la música
      musica.volume = 0.3; // puedes ajustar el volumen aquí
      musica.play().catch((error) => {
        console.warn("Reproducción bloqueada por el navegador:", error);
      });
    });


// Contador regresivo hasta el 24 de mayo de 2025 a las 16:00
    const fechaObjetivo = new Date("Dec 19, 2025 14:00:00").getTime();

    const contador = document.getElementById("contador");

    const intervalo = setInterval(() => {
      const ahora = new Date().getTime();
      const distancia = fechaObjetivo - ahora;

      if (distancia <= 0) {
        clearInterval(intervalo);
        contador.innerHTML = "¡Hoy es el gran día!";
        return;
      }

      const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

      contador.innerHTML = `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
    }, 1000);



    const music = document.getElementById("musicaFondo");
    const btnIniciar = document.getElementById("btnIniciarMusica");
    const muteBtn = document.getElementById("mute-btn");
    const muteIcon = document.getElementById("mute-icon");

    // Establece volumen máximo permitido
    music.volume = 0.3;

    // Reproduce música solo cuando el usuario hace clic
    btnIniciar.addEventListener("click", () => {
      if (music.paused) {
        music.play().then(() => {
          muteIcon.src = music.muted ? "image/silencio.png" : "image/volumen.png";
        }).catch((error) => {
          console.error("Error al reproducir música:", error);
        });
      }
    });

    // Alterna mute al hacer clic en el botón flotante
    muteBtn.addEventListener("click", () => {
      music.muted = !music.muted;
      muteIcon.src = music.muted ? "image/silencio.png" : "image/volumen.png";
    });