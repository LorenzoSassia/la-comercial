const url = './api/datos.php?tabla=productos';

/*
Funcion asincrona para seleccionar articulos
*/
export async function seleccionarArticulos() {
    let res = await fetch(url);
    let datos = await res.json();
    if(res.status !== 200){
        throw Error('Los datos no se encontraron');
    }
    console.log(datos);
    return datos;
}