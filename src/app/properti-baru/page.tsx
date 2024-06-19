'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Verif from '@/assets/icons/verif1.svg';
import Image from 'next/image';
import CardDeveloper from '@/components/Molecules/CardDeveloper';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import CardPopuler from './CardPopuler';

const PropertiBaru: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<number | null>(null);
  const handleFilterClick = (index: number) => {
    setActiveFilter(index === activeFilter ? null : index);
  };
  return (
    <main className="flex flex-col w-full">
      <div className="w-full max-w-7xl py-[62px] px-4 md:px-0 mx-auto">
        <h1 className="text-[#3A3A3A] text-[32px] font-bold tracking-[0.64px]">
          Cari properti baru
        </h1>
        <div className="w-full bg-[#EE4336] rounded-[10px] mt-[22px] p-[30px]">
          <div className="flex max-w-7xl items-center space-x-4">
            <Input type="email" placeholder="Email" />
            <Button
              className="bg-[#BABABA] hover:bg-[#BABABA] text-[#3A3A3A] px-10 text-sm"
              type="submit">
              Cari
            </Button>
          </div>
        </div>
      </div>
      {/* Official Developer */}
      <div className="w-full max-w-7xl flex flex-col pb-[50px] px-4 md:px-0 mx-auto">
        <div className="flex bg-[#F2F2F2] w-[335px] items-center rounded-[17.163px] p-2 gap-1">
          <Image src={Verif} alt="verified developer" />
          <span className="text-[#3A3A3A] text-[27px] font-medium tracking-[0.549px]">
            Official Developer
          </span>
        </div>
        <Carousel className="w-full mt-[40px] max-w-7xl">
          <CarouselContent className="-ml-1 ">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/3 lg:basis-1/6">
                <div className="p-1">
                  <CardDeveloper />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      {/* End Official Developer */}
      {/* Perumahan Terpopuler */}
      <section className="w-full max-w-7xl pt-[65px] px-4 md:px-0 mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[#EE4336] text-[32px] font-bold tracing-[0.6px]">
              Perumahan Terpopuler
            </h1>
            <p className="text-lg text-[#3A3A3A] tracking-[-0.36px]">
              Temukan berbagai macam properti populer di sini
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
      {/* End Perumahan Terpopuler */}
      {/* Perumahan Terbaru */}
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
      {/* End Perumahan Terbaru */}
      {/* Perumahan Terbaru */}
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
                    className={`p-2 border cursor-pointer text-center rounded-[6px] border-opacity-50 ${
                      activeFilter === index
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
      {/* End Perumahan Terbaru */}
    </main>
  );
};

export default PropertiBaru;
