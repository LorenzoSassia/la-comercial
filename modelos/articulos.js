const url = './api/datos.php?tabla=productos';

/*
Funcion asincrona para seleccionar articulos
*/
export async function seleccionarArticulos() {
    let res = await fetch(url+'&accion=seleccionar');
    let datos = await res.json();
    if(res.status !== 200){
        throw Error('Los datos no se encontraron');
    }
    console.log(datos);
    return datos;
}

/**
 * Insertar los datos en la base de datos
 * @param datos Los datos a insertar
 */
export function insertarArticulos(datos) {
    fetch(`${url}accion=insertar`, {
        method: 'POST',
        body: datos
    })
    .then(res=>res.json())
    .then(data=> {
        console.log(data);
        return data;
    })
}