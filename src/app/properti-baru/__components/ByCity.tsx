"use client"

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import CardPopuler from './card/CardPopuler';

const ByCity: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<number | null>(null);
    const handleFilterClick = (index: number) => {
        setActiveFilter(index === activeFilter ? null : index);
    };
    return (
        <section className="w-full max-w-7xl py-[65px] px-4 md:px-0 mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-[#EE4336] text-[32px] font-bold tracing-[0.6px]">
                        Cari berdasarkan kota
                    </h1>
                    <p className="text-lg text-[#3A3A3A] tracking-[-0.36px]">
                        Cek rumah yang paling banyak dicari di berbagai kota!
                    </p>
                </div>
                <Button className="bg-transparent font-semibold text-sm hover:bg-transparent text-[#F5463A] border border-[#F5463A] px-10">
                    Lihat Semua
                </Button>
            </div>
            <Carousel className="w-full flex items-center mt-[40px] max-w-7xl">
                <div className="flex w-full items-center">
                    <CarouselContent className="flex-1 gap-5">
                        {Array.from({ length: 15 }).map((_, index) => (
                            <CarouselItem
                                key={index}
                                className="gap-5 md:basis-1/3 lg:basis-[10%]"
                                onClick={() => handleFilterClick(index)}>
                                <div
                                    className={`p-2 border cursor-pointer text-center rounded-[6px] border-opacity-50 ${activeFilter === index
                                        ? 'border-[#EE4336] bg-[#EE4336] text-white'
                                        : 'border-[#8F8F8F]'
                                        }`}>
                                    <p>Tangerang</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex flex-col gap-2 ml-4">
                        <CarouselPrevious className="mb-2" />
                        <CarouselNext />
                    </div>
                </div>
            </Carousel>
            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px] mt-7">
                <CardPopuler />
                <CardPopuler />
                <CardPopuler />
                <CardPopuler />
            </main>
        </section>
    )
}

export default ByCity
