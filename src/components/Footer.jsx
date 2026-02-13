import { Github } from 'lucide-react';

export default function Footer() {
    return (
        <>
            <footer className='text-center py-6 bg-[#141212] text-gray-400'>
                <p>Cine de Verano 2026 - Disfruta el mejor entretenimiento</p>
                <p className='flex gap-2 justify-center'>Realizado por Guissella Pérez <a href='https://github.com/guiss26' target='_blank'><Github /> </a></p>
            </footer>
        </>
    )
}