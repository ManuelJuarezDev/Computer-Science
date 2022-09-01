let _peliculas = new ClasePeliculas()
let _carrusel = new ClaseCarrusel()

window.addEventListener('DOMContentLoaded', () => {
  // PARAMETROS DE URL
  const params = new URLSearchParams(window.location.search)
  const idActor = params.get('id')
  // INFORMACION DE ACTOR
  _peliculas.informacionPersona(idActor).then((actor) => {
    // MOSTRAR DATOS DE ACTOR
    document.getElementById('fotoPerfil').src = _peliculas.rutaFotoPerfil(actor.profile_path)
    document.getElementById('nombre').innerHTML = actor.name
    _carrusel.cargarCarruselActor(idActor);
  })
})
