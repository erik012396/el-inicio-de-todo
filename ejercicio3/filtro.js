// Array de productos
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

//se modifico los nombres de las constantes
const listaDeProductos = document.getElementById("lista-de-productos");  //  se modifico el getElementsByName por el getElementById
const filtroInput = document.getElementById("filtro-input"); // se modifico el querySelector por el getElementById
const filtroBoton = document.getElementById("filtro-boton"); //se agrego la constante del boton


const mostrarProductos = (productos) => {
  listaDeProductos.innerHTML = ''; 

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    
    const div = document.createElement("div");
    div.classList.add("producto");

    const p = document.createElement("p");
    p.classList.add("titulo");
    p.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);
    imagen.setAttribute('alt', producto.nombre); 

    div.appendChild(p);
    div.appendChild(imagen);
    listaDeProductos.appendChild(div);
  }
};

// Función de filtrado
const filtrado = (productos, texto) => {    
  const textoLower = texto.toLowerCase(); // Se añadió la conversión a minúsculas para hacer que todos los tipos de escrituras sean igual.
  const productosFiltrados = [];

  for (let i = 0; i < productos.length; i++) {  // Se usó un bucle for para filtrar los productos que coinciden con el texto ingresado y se almacenan en el array productosFiltrados.
    const item = productos[i];
    if (
      item.tipo.toLowerCase().includes(textoLower) ||
      item.color.toLowerCase().includes(textoLower)
    ) {
      productosFiltrados.push(item);
    }
  }

  return productosFiltrados;
};


mostrarProductos(productos);


filtroBoton.addEventListener('click', () => { // Se cambió onclick a addEventListener para el click del boton.
  const texto = filtroInput.value.trim();
  const productosFiltrados = filtrado(productos, texto);
  mostrarProductos(productosFiltrados);
});
