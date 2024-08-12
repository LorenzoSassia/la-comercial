import { seleccionarArticulos, insertarArticulos } from "../modelos/articulos.js";


/* Objetos del DOM*/
// Listado de Articulos
const listado = document.querySelector('#listado');

// Alerta
const alerta = document.querySelector('#alerta');

// Formulario
const formulario = document.querySelector('#formulario');
const formularioModal = new boostrap.modal(document.querySelector('#formularioModal'));
const btnNuevo = document.querySelector('#btnNuevo');

// Inputs
const inputCodigo = document.querySelector('#codigo');
const inputNombre = document.querySelector('#Nombre');
const inputDescripcion = document.querySelector('#Descripcion');
const inputPrecio = document.querySelector('#Precio');

// Imagen del formulario
const frmImagen = document.querySelector('#frmImagen');

// Variables
let opcion = '';
let id;
let mensajeAlerta;



/**
 *  Esta funcion se ejecuta cuando todo el contenido esta guardado
 */

document.addEventListener('DOMContentLoaded', () => {
    mostrarArticulos();
})

/*
* Obtiene los articulos y los muestra
*/
async function mostrarArticulos() {
    const articulos = await seleccionarArticulos();


articulos.map(articulo =>
    listado.innerHTML += `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="imagenes/productos/${articulo.imagen}" class="card-img-top" alt="...">
                 <div class="card-body">
                  <h5 class="card-title"><span name="spancodigo">${articulo.codigo}</span> -<span name="spannombre">  ${articulo.nombre}</span></h5>
                  <p class="card-text">
                   <img src='./iconos/memoria.svg'> 
                   <img src='./iconos/almacenamiento.svg'> 
                   <img src='./iconos/camara.svg'>
                   <img src='./iconos/celular.svg'>
                   ${articulo.descripcion}
                  </p>
                  <h5>$<span name="spanprecio">${articulo.precio}</span></h5>
                  <input class="form-control" value="0" min="0" max="11" type="number"  name="inputcantidad" onchange="calcularPedido()">
                </div>
            </div>
        </div>
               
    `
)
}