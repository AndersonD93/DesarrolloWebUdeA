/*
const getImagenPromesa=()=>{
    const promesa= new Promise((resolve, reject) => {
        resolve('https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg');
    })
    return promesa;
}


getImagenPromesa().then(console.log);

const getImagen = async()=>{
    return('https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg');
}
getImagen().then(console.log);
*/
//Await

const getImagen = async()=>{
    const apikey='80wsdU3duJEI4HyUibuQDjeoddc5lBJz';

    const resp= await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
    const data = await resp.json();

    console.log(data);
}

getImagen();
