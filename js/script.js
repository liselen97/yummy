
$(document).ready(inicio);

function inicio(){
    //mostrarRecetas(recetas);
    
    //filtrarPorCategoria();

    
    elegirRecetasCategoria();
	
    $(".the_slider").slicarousel({
        nbr_slides: 5,
        autoplay: {
            "enabled": true, // Enable autoplay slider
            "direction": "rtl" // direction right to left rtl or left to right ltr

        },
        speed:'slow',
        delay: 3500
    });

    informacion();

    date();

}

//retorna un elemento al azar del array
function seleccionarRandom(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function elegirRecetasCategoria() {
    let recetasDesayuno = recetas.filter(x => x.categoria.includes("Desayuno o Merienda"));
    let recetaDesayuno = seleccionarRandom(recetasDesayuno);

    let recetasPostre = recetas.filter(x => x.categoria.includes("Postres") && x.id !== recetaDesayuno.id);
    let recetaPostre = seleccionarRandom(recetasPostre);

    let recetasSaludables= recetas.filter(x => x.categoria.includes("Saludables") && x.id !== recetaDesayuno.id && x.id !== recetaPostre.id);
    let recetaSaludables= seleccionarRandom(recetasSaludables);

    let recetasFestejos= recetas.filter(x => x.categoria.includes("Festejos") && x.id !==recetaDesayuno.id && x.id !== recetaPostre.id && x.id !== recetaSaludables.id);
    let recetaFestejos= seleccionarRandom(recetasFestejos);

    $('#cat1').html(`<img src='${recetaDesayuno.folder}\\${recetaDesayuno.imagenes[0]}'>`)
    $('#cat2').html(`<img src='${recetaPostre.folder}\\${recetaPostre.imagenes[0]}'>`)
    $('#cat3').html(`<img src='${recetaSaludables.folder}\\${recetaSaludables.imagenes[0]}'>`)
    $('#cat4').html(`<img src='${recetaFestejos.folder}\\${recetaFestejos.imagenes[0]}'>`)


}

function mostrarRecetas(_array){
    $("#recetas").html("");
    for(let i=0; i<=_array.length-1; i++){
        let lista="";
        
        for(let j=0; j<=_array[i]['ingredientes'].length-1; j++){
            lista= lista + `<li>${_array[i]['ingredientes'][j]}</li>`
        }
    }

    for(let i=0; i<=_array.length-1;i++){
        let listaPrep="";

        for(let k=0; j<=_array[i]['preparacion'].length-1;k++){
            listaPrep= listaPrep + `<li>${_array[i]['preparacion'][k]}</li>`
        }
    }

    $("#recetas").append(`
    <article>
    <img>
    <p>${_array[i]['categoria']}</p>
    <p>${_array[i]['tiempo_total']}</p>
    <p>${_array[i]['raciones']}</p>
    <ul>${lista}</ul>
    <ol>${listaPrep}</ol>
    </article>
    `)
}

function informacion(){
    let cantidadRecetas= recetas.length;
    let cantidadRecetasPostre= recetas.filter(r => r.categoria.includes('Postres'));
    let postres= cantidadRecetasPostre.length;

    let cantidadRecetasDesayuno= recetas.filter(r => r.categoria.includes('Desayuno o Merienda'));
    let desayuno=cantidadRecetasDesayuno.length;

    let cantidadRecetasSaludables= recetas.filter(r => r.categoria.includes('Saludables'));
    let saludables= cantidadRecetasSaludables.length;

    let cantidadRecetasFestejos= recetas.filter(r => r.categoria.includes('Festejos'));
    let festejos= cantidadRecetasFestejos.length;

    $("#informacion").append(`
        <p><strong>Cantidad de recetas totales: </strong> ${cantidadRecetas}<p>
        <p><strong>Total de recetas de postres: </strong> ${postres}</p>
        <p><strong>Total  de recetas para desayuno/merienda: </strong> ${desayuno}</p>
        <p><strong>Total de recetas saludables: </strong> ${saludables}</p>
        <p><strong>Total de recetas para festejos: </strong> ${festejos}</p>
    `)
}

function date(){
    let fecha= new Date();
    let mes= fecha.getMonth();

    if(fecha.getMonth() === 11){
        $("#noticias").append(`
            <div class="imagenNavidad">
            <p>Probá nuestras deliciosas recetas navideñas</p>
            </div>
        `)
    }

    if(fecha.getMonth() === 9){
        $("#noticias").append(`
        <div class="halloween">
            <p>Probá nuestras recetas de Halloween</p>
        <div>
        `)
    }
}

