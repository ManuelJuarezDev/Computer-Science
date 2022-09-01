class ClasePeliculas {
  constructor() {
    this.data = []
  }

  async informacion(idPelicula) {
    let url = `${URL_BASE}/movie/${idPelicula}?api_key=${API_KEY}`

    try {
      let response = await axios.get(url)
      return response.data
    } catch (e) {
      return []
    }
  }

  async creditos(idPelicula) {
    let url = `${URL_BASE}/movie/${idPelicula}/credits?api_key=${API_KEY}`

    try {
      let response = await axios.get(url)
      return response.data
    } catch (e) {
      return []
    }
  }

  async informacionPersona(idPersona) {
    let url = `${URL_BASE}/person/${idPersona}?api_key=${API_KEY}`

    try {
      let response = await axios.get(url)
      return response.data
    } catch (e) {
      return []
    }
  }

  rutaFondo(nombreImg) {
    return `${URL_BASE_IMG}/w1920_and_h800_multi_faces/${nombreImg}`
  }

  rutaFotoPerfil(nombreImg) {
    return `${URL_BASE_IMG}/w300_and_h450_bestv2/${nombreImg}`
  }

  push(element) {
    this.data.push(element)
    return this.data
  }

}
