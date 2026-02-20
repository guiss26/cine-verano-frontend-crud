
const URL_API_FAKE = 'http://localhost:3000/movies'

//GET
export  async function getAllMovies() {
    const response = await fetch(URL_API_FAKE)
    if(!response.ok) throw Error("Error al cargar películas")
        return response.json()
}

// POST 

// UPDATE/:id

// DELETE/:id