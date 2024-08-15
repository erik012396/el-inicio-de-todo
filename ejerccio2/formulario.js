var formulario = document.querySelector(".formulario")//Modificar a palabra completa formulario

formulario.onsubmit = function (e) {
  e.preventDefault(); //Lo cambie a preventDefault 

  var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");//Modificacion de estructura if else, no estaba bien realizada
  } else {
    n.classList.remove("error");
  }

  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  } else {
    e.classList.remove("error");
  }

  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

// var botonBorrar = document.createElement("button");
// botonBorrar.textContent = "Eliminar invitado";
// botonBorrar.id = "boton-borrar";
// var corteLinea = document.createElement("br");
// document.body.appendChild(corteLinea);
// document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  switch (nacionalidad) {//Modificacion por un switch en vez de if else
    case "ar":
      nacionalidad = "Argentina";
      break;
    case "mx":
      nacionalidad = "Mexicana";
      break;
    case "vnzl":
      nacionalidad = "Venezolana";
      break;
    case "per":
      nacionalidad = "Peruana";
      break;
    default:
      nacionalidad = "Desconocida";
  }

  var lista = document.getElementById("lista-de-invitados"); //Agregamos el id al html

  if (!lista) {//jj
    console.error('Elemento con ID "lista-de-invitados" no encontrado.');
    return;
  }


  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");// Modificamos el added por
  lista.appendChild(elementoLista);

  //Eliminamos esta seccion repetida, nos sirve la parte de "function"

  // var spanNombre = document.createElement("span");
  // var inputNombre = document.createElement("input");
  // var espacio = document.createElement("br");
  // spanNombre.textContent = "Nombre: ";
  // inputNombre.value = nombre;
  // elementoLista.appendChild(spanNombre);
  // elementoLista.appendChild(inputNombre);
  // elementoLista.appendChild(espacio);

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);


  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  // botonBorrar.id = ("boton-borrar");
  botonBorrar.classList.add("botonBorrar");
  elementoLista.appendChild(document.createElement("br"));
  //elementoLista.appendChild(corteLinea); Eliminacion
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';

    elementoLista.remove();
  }
}