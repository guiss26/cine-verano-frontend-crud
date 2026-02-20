import { Film } from 'lucide-react';

export default function Navbar() {
    return (
        <>
            <header>
                <nav className='text-white text-center'>
                    <div className='flex text-white gap-3 items-center justify-center '>
                        <Film size={50}/>
                        <h1 className='text-5xl'>Cine de Verano</h1>
                    </div>
                    <p className='mt-3'>Disfruta de las mejores películas este verano</p>
                </nav>
            </header>
        </>
    )
}