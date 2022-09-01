const txtBuscar = document.getElementById('txtBuscar')
const idPeliculas = document.getElementById('idPeliculas')
let _peliculas = new ClasePeliculas()
let _carruseles = new ClaseCarrusel();

function cargarInformacion() {
  _peliculas.generos().then((r) => {
    for (let genero of r) {
      _peliculas.porGenero(genero.id).then((dataPelicula) => {
        for (let index = 0; index < LIMITE_PELICULAS_POR_GENERO; index++) {
          let _registro = dataPelicula[index]
          let pelicula = {
            seccionId: genero.id,
            seccionDescripcion: genero.name,
            id: _registro.id,
            titulo: _registro.title,
            img_fondo: _registro.backdrop_path,
            descripcion: _registro.overview,
            puntacion: _registro.vote_average,
          }
          _peliculas.push(pelicula)

          const elementLI = document.createElement('li')
          elementLI.classList.add('opcion')
          elementLI.innerHTML = `<span onclick="peliculas('${_registro.id}')">${_registro.title}</span>`
          idPeliculas.appendChild(elementLI)
        }
      })
    }
  })
}

const buscar = (texto) => {
  let peliculasEncontradas = []
  peliculasEncontradas = _peliculas.data.filter((pelicula) => {
    pos = pelicula.titulo.toUpperCase().search(texto.toString().toUpperCase())
    if (pos != -1) {
      return pelicula
    }
  })

  let msj =
    peliculasEncontradas.length > 0
      ? 'Existe la pelicula'
      : 'No existe la pelicula'
  alert(msj)

  return peliculasEncontradas
}

txtBuscar.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    let texto = txtBuscar.value.toUpperCase()
    buscar(texto)
  }
})

window.addEventListener('DOMContentLoaded', () => {
  //document.getElementsByClassName('multimedia')[0].style.backgroundImage =
  //  "url('../../src/img/fondo-2.jpg')"
  //cargarInformacion()
  _carruseles.cargarCarruselesGeneros();
})
