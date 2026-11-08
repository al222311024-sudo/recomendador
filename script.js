const catalogo = [
    {
        titulo: "Paddington 2",
        categoria: "comedia",
        edad: 0,
        animo: ["feliz", "triste", "estresado"],
        intensidad: 1,
        sustos: false,
        descripcion: "Una historia divertida y familiar."
    },
    {
        titulo: "Intensamente",
        categoria: "animacion",
        edad: 0,
        animo: ["triste", "feliz", "estresado"],
        intensidad: 1,
        sustos: false,
        descripcion: "Una aventura sobre las emociones."
    },
    {
        titulo: "Coco",
        categoria: "animacion",
        edad: 0,
        animo: ["triste", "feliz", "tranquilo"],
        intensidad: 2,
        sustos: false,
        descripcion: "Una historia sobre la familia."
    },
    {
        titulo: "En busca de la felicidad",
        categoria: "drama",
        edad: 12,
        animo: ["triste", "estresado"],
        intensidad: 2,
        sustos: false,
        descripcion: "Una historia de superación."
    },
    {
        titulo: "Diario de una pasión",
        categoria: "romance",
        edad: 15,
        animo: ["triste", "tranquilo"],
        intensidad: 2,
        sustos: false,
        descripcion: "Una historia romántica."
    },
    {
        titulo: "La propuesta",
        categoria: "comedia",
        edad: 12,
        animo: ["feliz", "aburrido", "estresado"],
        intensidad: 1,
        sustos: false,
        descripcion: "Una comedia romántica."
    },
    {
        titulo: "Mi vecino Totoro",
        categoria: "animacion",
        edad: 0,
        animo: ["estresado", "ansioso", "tranquilo"],
        intensidad: 1,
        sustos: false,
        descripcion: "Una aventura tranquila."
    },
    {
        titulo: "Jurassic World",
        categoria: "aventura",
        edad: 15,
        animo: ["emocionado", "aburrido"],
        intensidad: 5,
        sustos: true,
        descripcion: "Aventura con dinosaurios."
    },
    {
        titulo: "Misión imposible",
        categoria: "accion",
        edad: 15,
        animo: ["emocionado", "aburrido"],
        intensidad: 5,
        sustos: false,
        descripcion: "Acción y persecuciones."
    },
    {
        titulo: "Interestelar",
        categoria: "ciencia",
        edad: 12,
        animo: ["tranquilo", "aburrido", "emocionado"],
        intensidad: 3,
        sustos: false,
        descripcion: "Un viaje espacial."
    },
    {
        titulo: "El conjuro",
        categoria: "terror",
        edad: 18,
        animo: ["emocionado"],
        intensidad: 5,
        sustos: true,
        descripcion: "Terror y suspenso."
    },
    {
        titulo: "Up: Una aventura de altura",
        categoria: "animacion",
        edad: 0,
        animo: ["triste", "feliz", "tranquilo"],
        intensidad: 2,
        sustos: false,
        descripcion: "Una aventura conmovedora."
    },
    {
        titulo: "Jumanji",
        categoria: "aventura",
        edad: 12,
        animo: ["aburrido", "emocionado", "feliz"],
        intensidad: 3,
        sustos: false,
        descripcion: "Aventura y fantasía."
    },
    {
        titulo: "El diablo viste a la moda",
        categoria: "comedia",
        edad: 12,
        animo: ["aburrido", "estresado", "feliz"],
        intensidad: 1,
        sustos: false,
        descripcion: "Moda, trabajo y comedia."
    },
    {
        titulo: "La vida es bella",
        categoria: "drama",
        edad: 12,
        animo: ["triste", "tranquilo"],
        intensidad: 2,
        sustos: false,
        descripcion: "Una historia de esperanza."
    }
];
function recomendar() {
    const edad = Number(
        document.getElementById("edad").value
    );
    const corazon =
        document.getElementById("corazon").value;
    const animo =
        document.getElementById("animo").value;
    const categoria =
        document.getElementById("categoria").value;
    if (!Number.isInteger(edad) || edad < 1 || edad > 120) {
        alert("Ingresa una edad válida.");
        return;
    }
    if (!corazon || !animo) {
        alert("Completa todos los campos.");
        return;
    }
    let resultados = catalogo.filter(pelicula => {
        if (edad < pelicula.edad) {
            return false;
        }
        if (
            categoria !== "todas" &&
            pelicula.categoria !== categoria
        ) {
            return false;
        }
        if (!pelicula.animo.includes(animo)) {
            return false;
        }
        if (corazon !== "no") {
            if (pelicula.intensidad >= 3 || pelicula.sustos) {
                return false;
            }
        }
        return true;
    });
    mostrarResultados(resultados, corazon);
}
function mostrarResultados(resultados, corazon) {
    const contenedor =
        document.getElementById("peliculas");
    const mensaje =
        document.getElementById("mensaje");
    const seccion =
        document.getElementById("results");
    contenedor.innerHTML = "";
    seccion.classList.remove("oculto");
    if (resultados.length === 0) {
        mensaje.textContent =
            "No encontramos películas. Prueba otra categoría o estado de ánimo.";
        return;
    }
    mensaje.textContent =
        "Encontramos " + resultados.length +
        " películas para ti.";
    resultados.forEach(pelicula => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "movie";
        const titulo = document.createElement("h3");
        titulo.textContent = "🎬 " + pelicula.titulo;
        const descripcion = document.createElement("p");
        descripcion.textContent = pelicula.descripcion;
        const categoria = document.createElement("span");
        categoria.className = "tag";
        categoria.textContent = pelicula.categoria;
        const edad = document.createElement("span");
        edad.className = "tag";
        edad.textContent = "Edad mínima: " + pelicula.edad + "+";
        const intensidad = document.createElement("p");
        intensidad.textContent =
            "Intensidad: " + pelicula.intensidad + "/5";
        tarjeta.append(
            titulo,
            categoria,
            edad,
            descripcion,
            intensidad
        );
        contenedor.appendChild(tarjeta);
    });
    seccion.scrollIntoView({ behavior: "smooth" });
}
function limpiar() {
    document.getElementById("edad").value = "";
    document.getElementById("corazon").value = "";
    document.getElementById("animo").value = "";
    document.getElementById("categoria").value = "todas";
    document.getElementById("results").classList.add("oculto");
    document.getElementById("peliculas").innerHTML = "";
    document.getElementById("mensaje").textContent = "";
}
