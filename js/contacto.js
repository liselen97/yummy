$(document).ready(inicio);
//variables globales 
let contrasenia;
let mail;
let nombre;
let apellido;

//cree un objeto
let validacion = {};

function inicio(){
    $("#enviar").click(enviarFormulario)
}

function validacionFormulario() {
    contrasenia = $("#contraseña").val();
    mail = $("#mail").val();
    nombre = $("#nombre").val();
    apellido = $("#apellido").val();
    
    validacion.contrasenia = contrasenia.length >= 5 && contrasenia.length <= 20;
    validacion.nombre = nombre.length > 0;
    validacion.apellido = apellido.length > 0;
    validacion.mail = mail.indexOf("@") > 0 && mail.indexOf(".") > mail.indexOf("@");
}

function enviarFormulario() {
    validacionFormulario();

    //si se cumple la validacion de cada propiedad, aparece un texto despues de "enviar" el formulario
    if(validacion.contrasenia && validacion.nombre && validacion.apellido && validacion.mail){
        $("#mensajeExito").text("Este formulario ha sido enviado con exito")
    } else{
        $("#mensajeExito").text("")
    }
    //si no se cumple la condicion de la validacion de cada propiedad, aparece un texto despues de esta
    if(!validacion.contrasenia){
        $("#contraseñaError").text("La contraseña tiene que tener entre 5 y 20 caracteres")
    }else{
        $("#contraseñaError").text("")
    };

    if(!validacion.nombre){
        $("#nombreError").text("El nombre no puede ser vacio")
    }else{
        $("#nombreError").text("")
    };

    if(!validacion.apellido){
        $("#apellidoError").text("El apellido no puede ser vacio")
    }else{
        $("#nombreError").text("")
    };

    if(!validacion.mail){
        $("#mailError").text("El mail debe tener '@' y '.'")
    }else{
        $("#mailError").text("")
    };

    return false; // puse false para que cada vez que tocara el boton "enviar" no  me actualizara la pagina
}