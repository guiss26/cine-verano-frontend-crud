import { useEffect, useState } from 'react'
import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { Star } from 'lucide-react';
import MovieCards from './components/MovieCards';
import { getAllMovies } from './services';

function App() {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllMovies()
        setMovies(data)
      } catch (error) {
        setError("Error al cargar las películas")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p className='text-center my-10 font-medium text-2xl text-white'>Cargando ...</p>

  if (error) return <p className='text-2xl text-red-900'>Error al cargar películas</p>
  return (
    <>
      {/* Catálogo completo */}
      <section className='p-10 bg-black'>
        <div className='flex justify-between'>
          <div className='inline-flex gap-4 bg-cinema-whine'>
            <button className='bg-cinema-wine text-gray-200 transition-all duration-300 hover:bg-cinema-wine-light hover:text-white py-2 px-4 rounded-xl'>Todas las películas</button>
            <button className='bg-cinema-wine text-gray-200 transition-all duration-300 hover:bg-cinema-wine-light hover:text-white py-2 px-4 rounded-xl'>Recomendadas</button>
          </div>

          <button className='bg-cinema-accent hover:bg-cinema-wine-light text-white py-2 px-4 rounded-xl transition duration-300'>+ Agregar película</button>
        </div>

        <h2 className='text-3xl mt-5'>Catálogo completo</h2>

        <MovieCards movies={movies} setMovies={setMovies} />
      </section>
    </>
  )
}

export default App
