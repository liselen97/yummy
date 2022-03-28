$(document).ready(inicio);

let ruta = new URLSearchParams(window.location.search);

// se guardan las categorias de la ruta en un objeto para mas facil acceso
let categoriasSeleccionadas = {
    "Desayuno o Merienda": ruta.get("Desayuno o Merienda") === "true",
    "Postres": ruta.get("Postres") === "true",
    "Saludables": ruta.get("Saludables") === "true",
    "Festejos": ruta.get("Festejos") === "true"
};


function inicio(){

    categoriasCheckbox();

    elegirFavoritas();

    $('#Desayuno').change(e => cambiaCheckbox(e, "Desayuno o Merienda"));    
    $('#Postres').change(e => cambiaCheckbox(e, "Postres"));
    $('#Saludables').change(e => cambiaCheckbox(e, "Saludables"));
    $('#Festejos').change(e => cambiaCheckbox(e, "Festejos"));

    $('#botonBuscar').click(busqueda);

    mostrarRecetas();
}

function busqueda() {
    let nuevaURL = "recetas.html";

    let textoBusqueda = $("#buscador").val();

    let arrayCatSeleccionadas = [];
    if (categoriasSeleccionadas["Desayuno o Merienda"]) {
        arrayCatSeleccionadas.push("Desayuno o Merienda=true");
    }
    if (categoriasSeleccionadas["Postres"]) {
        arrayCatSeleccionadas.push("Postres=true");
    }
    if (categoriasSeleccionadas["Saludables"]) {
        arrayCatSeleccionadas.push("Saludables=true");
    }
    if (categoriasSeleccionadas["Festejos"]) {
        arrayCatSeleccionadas.push("Festejos=true");
    }

    let parametrosCategoria = arrayCatSeleccionadas.join("&");

    if (textoBusqueda) {
        nuevaURL += `?texto=${textoBusqueda}`;
        if (parametrosCategoria !== "") {
            nuevaURL += "&" + parametrosCategoria;
        }
    } else {
        if (parametrosCategoria !== "") {
            nuevaURL += "?" + parametrosCategoria;
        }
    }
    window.location.href = nuevaURL;
}


//funcion de orden para ordenar recetas segun su puntuacion,
//recibe 2 recetas y retorna 1 si la segunda va antes en la lista que la primera, -1 si va despues, y 0 si no importa el orden 
function ordernarRecetas(receta1, receta2) {
    if (receta1.puntuacion < receta2.puntuacion) {
        return 1;
    } else if (receta1.puntuacion > receta2.puntuacion) {
        return -1;
    } else {
        return 0;
    }
}

function elegirFavoritas(){
    let recetasOrdenadas = recetas.sort(ordernarRecetas);

    let fav1 = recetasOrdenadas[0];
    let fav2 = recetasOrdenadas[1]; 
    let fav3 = recetasOrdenadas[2];

    $('#fav1').html(`<img src='${fav1.folder}\\${fav1.imagenes[0]}'>`);
    $('#fav2').html(`<img src='${fav2.folder}\\${fav2.imagenes[0]}'>`);
    $('#fav3').html(`<img src='${fav3.folder}\\${fav3.imagenes[0]}'>`);

}

function categoriasCheckbox(){

    // el texto que se busco se guarda en el input
    $("#buscador").val(ruta.get("texto"));

    let listaCheckbox=["Desayuno o Merienda", "Postres", "Saludables", "Festejos"];

    // poner un id con espacios da problemas luego, por lo que tomo solo la primera palabra con split(' ')[0]
    // split(' ') separa el string cada vez que aparece un espacio y lo guarda en un array, luego selecciono el primer elemento con [0]
    for(let i=0; i<=listaCheckbox.length-1; i++){
        $("fieldset").append(`
            <input type="checkbox" value="${listaCheckbox[i]}" id="${listaCheckbox[i].split(' ')[0]}"> 
            <label for="${listaCheckbox[i]}">${listaCheckbox[i]}</label>
        `)

        // checkea las categorias que estan seleccionadas en la busqueda, que llegaron en los parametros
        $(`#${listaCheckbox[i].split(' ')[0]}`).prop('checked', categoriasSeleccionadas[listaCheckbox[i]]);
    }
}

function cambiaCheckbox(e, categoria) {
    let valorCheckbox = e.target.checked;
    categoriasSeleccionadas[categoria] = valorCheckbox;

    console.log(categoriasSeleccionadas)
}

function mostrarRecetas(){

    let filtrarCategoria = categoriasSeleccionadas["Desayuno o Merienda"] || categoriasSeleccionadas["Postres"] || categoriasSeleccionadas["Saludables"] || categoriasSeleccionadas["Festejos"];

    let recetasFiltradas = recetas;
    if (filtrarCategoria) {
        recetasFiltradas = recetas.filter(r => r.categoria.some(c => categoriasSeleccionadas[c]));
    }

    let textoBusqueda = ruta.get("texto");
    if (textoBusqueda) {
        let textoUpperCase = textoBusqueda.toUpperCase();
        recetasFiltradas = recetasFiltradas.filter(r => 
            r.nombre.toUpperCase().includes(textoUpperCase) 
             || r.ingredientes.some(i => i.ingrediente.toUpperCase().includes(textoUpperCase))
             || r.preparacion.some(p => p.toUpperCase().includes(textoUpperCase))
        );
    }

    console.log(recetasFiltradas)

    if (recetasFiltradas.length > 0) {
        for(let i=0; i<=recetasFiltradas.length-1; i++){
            $('.todas').append(`
                <article class="imagenesTodas"><a href="ampliacionReceta.html?id=${recetasFiltradas[i].id}"><img src="${recetasFiltradas[i].folder}//${recetasFiltradas[i].imagenes[0]}"></article>
            `)
        }
    } else {
        $(".todas").html (`<p>No se ha encontrado lo que busca</p>`)
    }
 }

