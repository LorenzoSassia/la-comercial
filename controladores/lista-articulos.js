import { articulos } from "../modelos/articulos.js";
const listado = document.querySelector('#listado');

articulos.map(articulo =>
    listado.innerHTML += `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="imagenes/productos/${articulo.imagen}" class="card-img-top" alt="...">
                 <div class="card-body">
                  <h5 class="card-title"><span name="spancodigo">${articulo.codigo}</span> -<span name="spannombre">  ${articulo.nombre}</span></h5>
                  <p class="card-text">
                   <img src='./iconos/memoria.svg'>Procesador: ${articulo.descripcion.procesador} <br>
                   <img src='./iconos/almacenamiento.svg'>Almacenamiento: ${articulo.descripcion.almacenamiento} <br>
                   <img src='./iconos/camara.svg'>Camaras: ${articulo.descripcion.camaras} <br>
                   <img src='./iconos/celular.svg'>Pantalla: ${articulo.descripcion.pantalla} <br>
                  </p>
                  <h5>$<span name="spanprecio">${articulo.precio}</span></h5>
                  <input class="form-control" value="0" min="0" max="11" type="number"  name="inputcantidad" onchange="calcularPedido()">
                </div>
            </div>
        </div>
               
    `
)