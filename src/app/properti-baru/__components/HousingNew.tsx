import { Button } from '@/components/ui/button'
import React from 'react'
import CardPopuler from './card/CardPopuler'

const HousingNew = () => {
    return (
        <section className="w-full max-w-7xl pt-[65px] px-4 md:px-0 mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-[#EE4336] text-[32px] font-bold tracing-[0.6px]">
                        Perumahan Terbaru
                    </h1>
                    <p className="text-lg text-[#3A3A3A] tracking-[-0.36px]">
                        Temukan berbagai properti terbaru di sini
                    </p>
                </div>
                <Button className="bg-transparent font-semibold text-sm hover:bg-transparent text-[#F5463A] border border-[#F5463A] px-10">
                    Lihat Semua
                </Button>
            </div>
            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px] mt-7">
                <CardPopuler />
                <CardPopuler />
                <CardPopuler />
                <CardPopuler />
            </main>
        </section>
    )
}

export default HousingNew
