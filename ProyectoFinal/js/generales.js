let LIMITE_PELICULAS_POR_GENERO = 15
let LIMITE_ACTORES_POR_PELICULA = 10
let LIMITE_PELICULAS_POR_ACTOR = 8
API_KEY = '3083c8858744c8f5ad199d7bfa37ea15&language=es'
URL_BASE = 'https://api.themoviedb.org/3'
URL_BASE_IMG = 'https://image.tmdb.org/t/p'

function home() {
    window.location.href = './../inicio'
}

function peliculas(id) {
    window.location.href = '.././peliculas/index.html?id='+id
    ''
}

function actores(id) {
    window.location.href = '.././actores/index.html?id='+id
}

function mensaje(mensaje) {
    document.getElementById(
      'mensajeGeneral',
    ).innerHTML = `<div class="modal fade" id="modalMensaje" tabindex="-1" aria-labelledby="modalMensaje" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Mensaje</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <b id="mensaje">${mensaje}</b>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" id="confirmarModal" data-dismiss="modal">Aceptar</button>
                </div>
            </div>
        </div>
    </div>`
    $('#modalMensaje').modal('show')
  }