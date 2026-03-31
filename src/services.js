const URL_API_FAKE = 'http://localhost:3000/movies'

//GET
export async function getAllMovies() {
    const response = await fetch(URL_API_FAKE)
    if(!response.ok) throw Error("Error al cargar películas")
        return response.json()
}

// POST 
export async function createMovie(newMovie) {
    const response = await fetch(URL_API_FAKE, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMovie)
    })

    if (!response.ok) throw new Error('Error al crear película')
}

// UPDATE/:id

// DELETE/:id
export async function deleteMovie(id) {
    const response = await fetch(`${URL_API_FAKE}/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    })

    if(!response.ok) throw Error("Error al eliminar película")
        return response.json()
}
