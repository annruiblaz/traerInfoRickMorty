const fs = require('fs');
const axios = require('axios');

async function obtenerPersonajes(url) {
    while(url) {
        try {
            const {data} = await axios.get(url); //Realizamos la petición http
            data.results.forEach( personaje => {
                console.log(`Nombre: ${personaje.name}`);
                url = data.info.next; //Obtenemos la siguiente pág
            });
        } catch(e) {
            console.error('Error a obtener los personajes: ', e);
            break;
        }
    }
}

//LLamamos al método con la llamada inicial a la API
obtenerPersonajes('https://rickandmortyapi.com/api/character');


async function obtenerEspecieEstado(url) {
    while(url) {
        try {
            const {data} = await axios.get(url); //Realizamos la petición http
            data.results.forEach( personaje => {
                console.log(`Especie: ${personaje.species}`);
                console.log(`Estado: ${personaje.status}`);
                console.log('------------------------------');

                url = data.info.next; //Obtenemos la siguiente pág
            });
        } catch(e) {
            console.error('Error a obtener los personajes: ', e);
            break;
        }
    }
}

obtenerEspecieEstado('https://rickandmortyapi.com/api/character');