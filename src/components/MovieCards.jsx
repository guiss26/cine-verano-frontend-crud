import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { Star } from 'lucide-react';

export default function MovieCards({ movies }) {
    return (
        <>
            <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 py-10'>
                {movies.map(movie => (
                    <div key={movie.id} className='bg-neutral-50 rounded-2xl flex flex-col'>
                        <figure className='h-60 object-cover movie-img rounded-t-2xl'>
                            <span><Star /> {movie.recommended}</span>
                        </figure>

                        <figcaption className='p-5 bg-black/90 flex flex-col flex-1 rounded-b-2xl'>
                            <h3 className='text-xl font-medium mb-2 text-white'>{movie.title}</h3>
                            <span className='bg-red-200 text-red-700 py-1 px-3 rounded-3xl text-sm w-fit'>{movie.category}</span>
                            <p className='text-white/50 text-sm mt-3 flex-1'>{movie.description}</p>

                            <div className='flex gap-3 justify-center mt-6'>
                                <button className='text-white w-50 py-2 rounded-xl px-5 flex justify-center gap-1 items-center bg-blue-500 hover:bg-blue-950'><Pencil size={20} /> Editar</button>
                                <button className='text-white w-50 py-2 rounded-xl px-5 flex justify-center gap-1 items-center bg-red-700 hover:bg-red-900'><Trash2 size={20} /> Eliminar</button>
                            </div>
                        </figcaption>
                    </div>
                ))}
            </article>
        </>
    )
}