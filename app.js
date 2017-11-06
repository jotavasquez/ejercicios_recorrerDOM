

// crear y reemplazar nodos
var elemento = document.createElement("li");
    contenido = document.createTextNode("Nuevo Texto");
elemento.appendChild(contenido);

var padre = document.getElementsByTagName("li")[0].parentNode;
    referencia = document.getElementsByTagName("li")[0];
padre.replaceChild(elemento,referencia);

// eliminar nodos del DOM
var padre_borrar = document.getElementsByTagName("li")[1].parentNode;
    referencia = document.getElementsByTagName("li")[1];
padre_borrar.removeChild(referencia);


/*
var primerElemento = document.getElementById("primero");
primerElemento.innerHTML = "Nuevo Texto <i class=\"foo\">FalconMAster</i>"; // si aplica otras etiquetas y las ejecuta en el navegador
primerElemento.textContent = "Nuevo Texto <i class=\"foo\">FalconMAster</i>"; //solo ejecuta etiquetas de texto. No trabaja con otras
*/


/*
var elemento = document.createElement("li");
contenido = document.createTextNode("Nuevo Texto");

elemento.appendChild(contenido);
*/