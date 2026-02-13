import { useState } from 'react'
import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { Star } from 'lucide-react';

function App() {
  const [count, setCount] = useState(0)

  // btn 'Todas las películas' - texto: Catálogo completo
  // btn 'Recomendadas' - texto: 'Todas las recomendadas

  // categoría: 

  return (
    <>
      <main className='min-h-screen'>

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

          <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 py-10'>
            {/* esta será el componente de MovieCards.jsx */}
            <div className='bg-neutral-50 rounded-2xl'>
              <figure className='h-60 object-cover'> {/* Probar ponerlo como fondo y encima el recomendado */}
                {/* <span><Star /> Recomendada</span> */}
                <img src="public\cine-portada.jpg" alt="" className='h-full w-full rounded-t-2xl' />
              </figure>

              <figcaption className='p-5 bg-black/90'>
                <h3 className='text-xl font-medium mb-2 text-white'>Mary and Max</h3>
                <span className='bg-red-200 text-red-700 py-1 px-3 rounded-3xl text-sm'>Drama</span>
                <p className='text-white/50 text-sm mt-3'>Una niña de 8 años de Melbourne empieza a cartearse con un señor de cuarenta años judío y obeso que vive en Nueva York. La relación entre ambos derivará en una larga amistad más allá las fronteras de la edad y la distancia.</p>

                <div className='flex gap-3 justify-center mt-6'>
                  <button className='text-white w-50 py-2 rounded-xl px-5 flex justify-center gap-1 items-center bg-blue-500 hover:bg-blue-950'><Pencil size={20} /> Editar</button>
                  <button className='text-white w-50 py-2 rounded-xl px-5 flex justify-center gap-1 items-center bg-red-700 hover:bg-red-900'><Trash2 size={20} /> Eliminar</button>
                </div>
              </figcaption>
            </div>

            <div className='bg-neutral-50 rounded-2xl'>
              <figure className='h-60 object-cover'>
                {/* <span>Remcomendada</span> */}
                <img src="public\cine-portada.jpg" alt="" className='h-full w-full rounded-t-2xl' />
              </figure>

              <figcaption className='p-5 bg-black/90'>
                <h3 className='text-xl font-medium mb-2 text-white'>Shrek 2</h3>
                <span className='bg-red-200 text-red-700 py-1 px-3 rounded-3xl text-sm'>Comedia</span>
                <p className='text-white/50 text-sm mt-3'>Shrek, nuestro ogro favorito, debe enfrentarse al mayor de los problemas que se podía imaginar: conocer a sus suegros.</p>

                <div className='flex gap-3 justify-center mt-6'>
                  <button className='text-white w-50 py-2 rounded-xl px-5 flex justify-center gap-1 items-center bg-blue-500 hover:bg-blue-950'><Pencil size={20} /> Editar</button>
                  <button className='text-white w-50 py-2 rounded-xl px-5 flex justify-center gap-1 items-center bg-red-700 hover:bg-red-900'><Trash2 size={20} /> Eliminar</button>
                </div>
              </figcaption>
            </div>

            <div className='bg-neutral-50 rounded-2xl'>
              <figure className='h-60 object-cover'>
                {/* <span>Remcomendada</span> */}
                <img src="public\cine-portada.jpg" alt="" className='h-full w-full rounded-t-2xl' />
              </figure>

              <figcaption className='p-5 bg-black/90'>
                <h3 className='text-xl font-medium mb-2 text-white'>Mary and Max</h3>
                <span className='bg-red-200 text-red-700 py-1 px-3 rounded-3xl text-sm'>Drama</span>
                <p className='text-white/50 text-sm mt-3'>Una niña de 8 años de Melbourne empieza a cartearse con un señor de cuarenta años judío y obeso que vive en Nueva York. La relación entre ambos derivará en una larga amistad más allá las fronteras de la edad y la distancia.</p>

                <div className='flex gap-3 justify-center mt-6'>
                  <button className='text-white w-50 py-2 rounded-xl px-5 flex justify-center gap-1 items-center bg-blue-500 hover:bg-blue-950'><Pencil size={20} /> Editar</button>
                  <button className='text-white w-50 py-2 rounded-xl px-5 flex justify-center gap-1 items-center bg-red-700 hover:bg-red-900'><Trash2 size={20} /> Eliminar</button>
                </div>
              </figcaption>
            </div>

            <div className='bg-neutral-50 rounded-2xl'>
              <figure className='h-60 object-cover'>
                {/* <span>Remcomendada</span> */}
                <img src="public\cine-portada.jpg" alt="" className='h-full w-full rounded-t-2xl' />
              </figure>

              <figcaption className='p-5 bg-black/90'>
                <h3 className='text-xl font-medium mb-2 text-white'>Mary and Max</h3>
                <span className='bg-red-200 text-red-700 py-1 px-3 rounded-3xl text-sm'>Drama</span>
                <p className='text-white/50 text-sm mt-3'>Una niña de 8 años de Melbourne empieza a cartearse con un señor de cuarenta años judío y obeso que vive en Nueva York. La relación entre ambos derivará en una larga amistad más allá las fronteras de la edad y la distancia.</p>

                <div className='flex gap-3 justify-center mt-6'>
                  <button className='text-white w-50 py-2 rounded-xl px-5 flex justify-center gap-1 items-center bg-blue-500 hover:bg-blue-950'><Pencil size={20} /> Editar</button>
                  <button className='text-white w-50 py-2 rounded-xl px-5 flex justify-center gap-1 items-center bg-red-700 hover:bg-red-900'><Trash2 size={20} /> Eliminar</button>
                </div>
              </figcaption>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default App
