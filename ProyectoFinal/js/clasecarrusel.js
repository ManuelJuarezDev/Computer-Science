class ClaseCarrusel {

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

    async porActor(idActor) {
        let url = `${URL_BASE}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=${idActor}&with_watch_monetization_types=flatrate`

        try {
            let response = await axios.get(url)
            return response.data.results
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

    async masPopulares(){
        let url = `${URL_BASE}/movie/top_rated?api_key=${API_KEY}&page=1`

        try {
            let response = await axios.get(url)
            return response.data.results
        } catch (e) {
            return []
        }
    }
    cargarCarruselPopulares(){
        var getParentElement = document.getElementById('sectioncarrusel')
                const createDiv = document.createElement('main')
                createDiv.classList.add('contenedor-generos', 'contenedor')
                createDiv.innerHTML = `
                    <div class="contenedor-titulo-controles">
                        <h3 class="mt-5">Más populares</h3>
                    </div>
                
                    <div class="contenedor-principal">
                        <ul id="populares" class="scroll-container" data-layoutmethod="flexbox">
                        
                        </ul>
                    </div>
                `
                getParentElement.appendChild(createDiv)

                this.masPopulares().then((dataPelicula) => {
                    var getParentElement = document.getElementById('populares')
                    for (let index = 0; index < LIMITE_PELICULAS_POR_GENERO; index++) {

                        let _registro = dataPelicula[index]

                        const divPelicula = document.createElement('div')
                        divPelicula.classList.add('pelicula')
                        let urlimg = "https://image.tmdb.org/t/p/w220_and_h330_face" + _registro.backdrop_path;
                        divPelicula.innerHTML = `
                            <li class="scroll-item">
                                <a href="/opciones/peliculas/index.html?id=${_registro.id}"><img src="${urlimg}" alt=""></a>
                            </li>
                        `
                        getParentElement.appendChild(divPelicula)
                    }
                })
    }

    cargarCarruselesGeneros() {
        this.generos().then((r) => {
            for (let genero of r) {
                var getParentElement = document.getElementById('sectioncarrusel')

                const createDiv = document.createElement('main')
                createDiv.classList.add('contenedor-generos', 'contenedor')
                createDiv.innerHTML = `
                    <div class="contenedor-titulo-controles">
                        <h3 class="mt-5">${genero.name}</h3>
                    </div>
                
                    <div class="contenedor-principal">
                        <ul id="${genero.id}" class="scroll-container" data-layoutmethod="flexbox">
                        
                        </ul>
                    </div>
                `
                getParentElement.appendChild(createDiv)

                this.porGenero(genero.id).then((dataPelicula) => {
                    var getParentElement = document.getElementById(genero.id)
                    for (let index = 0; index < LIMITE_PELICULAS_POR_GENERO; index++) {

                        let _registro = dataPelicula[index]

                        const divPelicula = document.createElement('div')
                        divPelicula.classList.add('pelicula')
                        let urlimg = "https://image.tmdb.org/t/p/w220_and_h330_face" + _registro.backdrop_path;
                        divPelicula.innerHTML = `
                            <li class="scroll-item">
                                <a onclick="peliculas(${_registro.id})"><img src="${urlimg}" alt=""></a>
                            </li>
                        `
                        getParentElement.appendChild(divPelicula)
                    }
                })
            }
        })
    }

    cargarCarruselActor(idActor) {
        var getParentElement = document.getElementById('sectioncarrusel')

        const createDiv = document.createElement('main')
        createDiv.classList.add('contenedor-generos', 'contenedor')
        createDiv.innerHTML = `
                <div class="contenedor-principal">
                    <ul id="carruselUl" class="scroll-container" data-layoutmethod="flexbox">
                    
                    </ul>
                </div>
            `
        getParentElement.appendChild(createDiv)

        this.porActor(idActor).then((dataPelicula) => {
            var getParentElement = document.getElementById('carruselUl')
            for (let index = 0; index < LIMITE_PELICULAS_POR_GENERO; index++) {

                let _registro = dataPelicula[index]

                const divPelicula = document.createElement('div')
                divPelicula.classList.add('pelicula')
                let urlimg = "https://image.tmdb.org/t/p/w220_and_h330_face" + _registro.backdrop_path;
                divPelicula.innerHTML = `
                            <li class="scroll-item">
                                <a href="/opciones/peliculas/index.html?id=${_registro.id}"><img src="${urlimg}" alt=""></a>
                            </li>
                        `
                getParentElement.appendChild(divPelicula)
            }
        })
    }
}