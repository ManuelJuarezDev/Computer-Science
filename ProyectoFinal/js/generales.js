let LIMITE_PELICULAS_POR_GENERO = 15
let LIMITE_ACTORES_POR_PELICULA = 10
let LIMITE_PELICULAS_POR_ACTOR = 8
API_KEY = '3083c8858744c8f5ad199d7bfa37ea15&language=es'
URL_BASE = 'https://api.themoviedb.org/3'

function home() {
    window.location.href = '/opciones/inicio/'
}

function peliculas(id) {
    window.location.href = '/opciones/peliculas/index.html?id='+id
}

function actores(id) {
    window.location.href = '/opciones/actores/index.html?id='+id
}