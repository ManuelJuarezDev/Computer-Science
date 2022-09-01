// let API_KEY = '3083c8858744c8f5ad199d7bfa37ea15&language=es'

let _peliculas = new ClasePeliculas()

window.addEventListener('DOMContentLoaded', () => {
  // PARAMETROS DE URL
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')
  // INFORMACION DE PELICULA
  _peliculas.informacion(id).then((r) => {
    let imgBackground = _peliculas.rutaFondo(r.backdrop_path)
    // MOSTRAR DATOS DE PELICULA
    document.getElementsByClassName('multimedia')[0].style.backgroundImage =
      "url('" + imgBackground + "')"
    document.getElementById('titulo').innerHTML = r.title
    document.getElementById('duracion').innerHTML = `${r.runtime} min`
    document.getElementById('descripcion').innerHTML = r.overview
    // MOSTRAR ACTORES
    let actores = []
    _peliculas.creditos(id).then((creditos) => {
      actores = creditos.cast
        .filter((item) => (item.known_for_department = 'Acting'))
        .slice(0, LIMITE_ACTORES_POR_PELICULA)
      actores.map((actor) => {
        const elementLI = document.createElement('li')
        elementLI.classList.add('opcion')
        elementLI.innerHTML = `<span onclick="actores('${actor.id}')">${actor.name}</span>`
        document.getElementById('actores').appendChild(elementLI)
      })
    })
  })
})
