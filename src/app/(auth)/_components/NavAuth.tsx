"use client";

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { GrFormPrevious } from 'react-icons/gr'

const NavAuth: React.FC = (): JSX.Element => {
    const handleBack = () => {
        window.history.back()
    }
    return (
        <div>
            <nav className='bg-[#F5463A] py-6'>
                <div className='flex items-center justify-between max-w-7xl mx-auto'>
                    <Button
                        onClick={handleBack}
                        className="bg-transparent font-bold hover:bg-transparent flex items-center text-white text-sm gap-2">
                        <GrFormPrevious className="text-[20px]" />
                        <span>Kembali</span>
                    </Button>
                    <ul className='flex items-center gap-[26px] text-white font-bold text-sm tracking-[-0.26px]'>
                        <Link href="/tentang">Tentang Rumah realestate</Link>
                        <Link href="/berita">Berita</Link>
                    </ul>
                </div>
            </nav>
            <nav className='bg-[#EE4336] py-12'>

            </nav>
        </div>
    )
}

export default NavAuth
