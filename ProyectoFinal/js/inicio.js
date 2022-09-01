const txtBuscar = document.getElementById('txtBuscar')
const idPeliculas = document.getElementById('idPeliculas')
let _peliculas = new ClasePeliculas()
let _carruseles = new ClaseCarrusel();

txtBuscar.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    if (_carruseles.buscar(txtBuscar.value)) {
      mensaje(`La película se encuentrá en catálogo.`)
    } else {
      mensaje(`La película no está en catálogo.`)
    }
  }
})

window.addEventListener('DOMContentLoaded', () => {
  _carruseles.cargarCarruselPopulares();
  _carruseles.cargarCarruselesGeneros();
})
