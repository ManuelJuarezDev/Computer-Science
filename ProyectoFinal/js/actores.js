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
    //document.getElementById('conocidoPor').innerHTML = actor.also_known_as[0]
    // MOSTRAR PELICULAS POR ACTOR
    // _peliculas.porActor(idActor).then((dataPelicula) => {
    //   //   console.log(dataPelicula)
    //   for (let index = 0; index < LIMITE_PELICULAS_POR_ACTOR; index++) {
    //     let _registro = dataPelicula[index]
    //     // let pelicula = {
    //     //   // seccionId: genero.id,
    //     //   // seccionDescripcion: genero.name,
    //     //   id: _registro.id,
    //     //   titulo: _registro.original_title,
    //     //   img_fondo: _registro.backdrop_path,
    //     //   descripcion: _registro.overview,
    //     //   puntacion: _registro.vote_average,
    //     // }
    //     // _peliculas.push(pelicula)
    //     // AGREGAR PELICULA AL LISTADO
    //     const elementLI = document.createElement('li')
    //     elementLI.classList.add('opcion')
    //     elementLI.innerHTML = `<span onclick="peliculas('${_registro.id}')">${_registro.title}</span>`
    //     document.getElementById('peliculas').appendChild(elementLI)
    //   }
    // })
    _carrusel.cargarCarruselActor(idActor);
  })
})
