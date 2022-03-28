$(document).ready(inicio);
let ruta = new URLSearchParams(window.location.search);

let id=parseInt(ruta.get("id")) ;

let recetaAmpliada=recetas.find(r => r.id === id)

function inicio(){

    cargarDatos();  
    $("#calcularCantidad").click(calculasRaciones);
    $("#comentar").click(comentar);
    $("#votar").click(votar);
}


function cargarDatos() {
    
    //muestra imagenes de cada receta
    $("#imagenesReceta").append(`
    <img id="grande" src="${recetaAmpliada.folder}\\${recetaAmpliada.imagenes[0]}">
    <img id="chica" src="${recetaAmpliada.folder}\\${recetaAmpliada.imagenes[1]}">
    <img id="chica" src="${recetaAmpliada.folder}\\${recetaAmpliada.imagenes[2]}">
    <img id="chica" src="${recetaAmpliada.folder}\\${recetaAmpliada.imagenes[3]}">
    `);

    // muestra el titulo de cada receta
    $("#titulo").text(recetaAmpliada.nombre);

    // muestra la puntuacion de la receta
    $("#puntuacion").text(+recetaAmpliada.puntuacion.toFixed(2) + " ");
    for(let i=0; i<Math.round(recetaAmpliada.puntuacion); i++) {
        $("#puntuacion").append("<img src='imagenes/estrella.png' class='estrella'>");
    }
    // muestra el tiempo de la receta
    $("#tiempo").text(recetaAmpliada.tiempo_total);

    $("#raciones").text(recetaAmpliada.raciones);

    for(let i=0; i<=recetaAmpliada.ingredientes.length-1; i++){
        
        let ingredienteActual= recetaAmpliada.ingredientes[i];
        let strIngrediente=`${ingredienteActual.cantidad} ${ingredienteActual.unidad} ${ingredienteActual.ingrediente}`;
        $("#ingredientes").append(`
            <li>${strIngrediente}</li>
        `)

    }

    for(let i=0; i<=recetaAmpliada.preparacion.length-1; i++){
        $("#preparacion").append(`
            <li>${recetaAmpliada.preparacion[i]}</li>
        `)
    }

    // la funcion filter recorre un array (recetas) y se queda con las que cumplen una condicion
    // en este caso la condicion es que alguna de las categorias este incluida en las categorias de recetaAmpliada.
    let recetasRelacionadas= recetas.filter(r => r.categoria.some(c => recetaAmpliada.categoria.includes(c)) && r.id !== recetaAmpliada.id);

    $(".imagenesRelacionadas").append(`
        <img src="${recetasRelacionadas[0].folder}/${recetasRelacionadas[0].imagenes[0]}">
        <img src="${recetasRelacionadas[1].folder}/${recetasRelacionadas[1].imagenes[0]}">
        <img src="${recetasRelacionadas[2].folder}/${recetasRelacionadas[2].imagenes[0]}">
    `)
    
    if (recetaAmpliada.comentarios) {
        for(let i=0; i<recetaAmpliada.comentarios.length; i++) {
            $("#comentarios").append(`<p class="comentario">${recetaAmpliada.comentarios[i]}</p>`)
        }
    }
}
    
function calculasRaciones(){
    let racionIngresada= parseInt($("#numeroRacion").val());

    let multiplicador = racionIngresada / recetaAmpliada.raciones;

    // solo se sustituyen los ingredientes si la racionIngresada es un numero distinto de 0 (porque NaN y 0 son evaluados como false)
    if (racionIngresada) {
        $("#ingredientes").html("");
        for(let i=0; i<=recetaAmpliada.ingredientes.length-1; i++){
            
            let ingredienteActual= recetaAmpliada.ingredientes[i];
            let strIngrediente=`${+(ingredienteActual.cantidad * multiplicador).toFixed(2)} ${ingredienteActual.unidad} ${ingredienteActual.ingrediente}`;
            $("#ingredientes").append(`
                <li>${strIngrediente}</li>
            `)

        }
    }
}

function comentar() {
    let comentario = $("#comentarioNuevo").val();
    $("#comentarios").append(`<p class="comentario">${comentario}</p>`);
}

function votar() {
    let voto = parseInt($("#voto").val());
    if (voto && voto >= 1 && voto <= 5) {
        let nuevoTotal = recetaAmpliada.total_puntos + voto;
        let cantidadVotos = recetaAmpliada.cant_votos + 1;
        let nuevaPuntuacion = nuevoTotal / cantidadVotos;

        $("#puntuacion").text(+nuevaPuntuacion.toFixed(2) + " ");
        for(let i=0; i<Math.round(nuevaPuntuacion); i++) {
            $("#puntuacion").append("<img src='imagenes/estrella.png' class='estrella'>");
        }   
    }
}