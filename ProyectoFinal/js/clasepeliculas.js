class ClasePeliculas {
  constructor() {
    this.data = []
  }

  async generos() {
    let url = `${URL_BASE}/genre/movie/list?api_key=${API_KEY}`

    try {
      let response = await axios.get(url)
      return response.data.genres
    } catch (e) {
      return []
    }
  }

  async porGenero(idGenero) {
    let url = `${URL_BASE}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idGenero}&with_watch_monetization_types=flatrate`

    try {
      let response = await axios.get(url)
      return response.data.results
    } catch (e) {
      return []
    }
  }

  async porActor(idActor) {
    let url = `${URL_BASE}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=${idActor}&with_watch_monetization_types=flatrate`

    try {
      let response = await axios.get(url)
      return response.data.results
    } catch (e) {
      return []
    }
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
    //let url = '/movie/13/credits?api_key=3083c8858744c8f5ad199d7bfa37ea15&language=en-US'
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
    // https://image.tmdb.org/t/p/w300_and_h450_bestv2/xndWFsBlClOJFRdhSt4NBwiPq2o.jpg
    return 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/' + nombreImg
  }

  rutaFotoPerfil(nombreImg) {
    // https://image.tmdb.org/t/p/w300_and_h450_bestv2/xndWFsBlClOJFRdhSt4NBwiPq2o.jpg
    return 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + nombreImg
  }

  // Agregar
  push(element) {
    this.data.push(element)
    return this.data
  }

  pop() {
    return this.data.pop()
  }

  peek() {
    return this.data[this.data.length - 1]
  }

  size() {
    return this.data.length
  }

  print() {
    console.log(this.data)
  }

  isEmpty() {
    return this.data.length === 0
  }

  clear() {
    this.data = []
  }
}

/*
  let stack = new Stack();
  
  console.log(stack.isEmpty());
  console.log(stack.push('Azul'));
  console.log(stack.push('Esmeralda'));
  console.log(stack.push('Verde'));
  console.log(stack.push('Amarillo'));
  console.log(stack.push('Rojo'));
  stack.print();
  console.log(stack.size());
  console.log(stack.pop());
  console.log(stack.pop());
  stack.print();
  console.log(stack.peek());
  console.log(stack.size());
  console.log(stack.isEmpty());
  stack.clear();
  console.log(stack.isEmpty());
  */
