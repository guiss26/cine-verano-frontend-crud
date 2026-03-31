import { Save } from 'lucide-react';
import { useState } from 'react';
import { createMovie } from '../services';

export default function FormMovies({ onMovieCreated }) {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: '',
        recommended: false,
        url: ''
    })

    const [imageFile, setImageFile] = useState(null)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            const created = await createMovie({...formData})
            onMovieCreated(created)
            console.log('Película creada: ', created)
        } catch (error) {
            console.error(error)
        }
    }

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0])
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="bg-white/10 text-white/55 mt-5 p-7 rounded-2xl">
                <h2 className="text-xl">Agregar nueva película</h2> {/* Texto se puede cambiar según el METHOD */}

                <div className="my-5 w-full">
                    {/* Title */}
                    <fieldset className="mb-7">
                        <label htmlFor="title">Título *</label>
                        <input type="text" name='title' value={formData.title} onChange={handleChange} className="bg-black/20 p-2 rounded-md border border-white/20 w-full mt-3" placeholder="Ej: Aventura en el Horizonte" />
                    </fieldset>

                    <div className="flex w-full gap-4 mb-7">
                        {/* Category */}
                        <fieldset className="w-full">
                            <label htmlFor="category">Categoría *</label>
                            <select name="category" value={formData.category} onChange={handleChange} className="bg-black/20 p-2 rounded-md border border-white/20 w-full mt-3 " id="category">
                                <option className="bg-black/90" value="Seleccionar genero">Seleccionar género</option>
                                <option className="bg-black/90" value="Drama">Drama</option>
                                <option className="bg-black/90" value="Comedia">Comedia</option>
                                <option className="bg-black/90" value="Terror">Terror</option>
                                <option className="bg-black/90" value="Acción">Acción</option>
                                <option className="bg-black/90" value="Aventura">Aventura</option>
                                <option className="bg-black/90" value="Romance">Romance</option>
                                <option className="bg-black/90" value="Ciencia Ficción">Ciencia Ficción</option>
                                <option className="bg-black/90" value="Infantil">Infantil</option>
                                <option className="bg-black/90" value="Documental">Documental</option>
                            </select>
                        </fieldset>

                        {/* Imagen LUEGO PROBAMOS CON LAS IMÁGENES*/}
                        {/* <fieldset className="w-full">
                            <label htmlFor="image">Imagen *</label>
                            <input className="bg-black/20 p-2 rounded-md border border-white/20 w-full mt-3" type="file" name='image' id="image" onChange={handleImageChange}/>
                        </fieldset> */}
                    </div>

                    {/* Description */}
                    <fieldset >
                        <label htmlFor="description">Descripción *</label>
                        <textarea name="description" value={formData.description} onChange={handleChange} className="bg-black/20 p-2 rounded-md border border-white/20 w-full mt-3" id="description" placeholder="Escribe la sinopsis de la película..."></textarea>
                    </fieldset>

                    <div className='mt-3'>
                        <fieldset className='flex items-center gap-2'>
                            <input className="size-5" type="checkbox" name="recommended" checked={formData.recommended} onChange={handleChange} id="recommended"/> Marcar como recomendada
                        </fieldset>
                    </div>
                </div>

                {/*  FUNCIONES DE GUARDAR (POST) METHOD  */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-green-900 hover:bg-green-700 py-2 px-6 rounded-xl flex justify-center gap-2" type='submit'><Save /> Guardar</button> {/* Texto se puede cambiar según el METHOD */}
                    <button className="flex-1 bg-red-900 hover:bg-red-700 py-2 px-6 rounded-xl">Cancelar</button>
                </div>
            </form>
        </>
    )
}