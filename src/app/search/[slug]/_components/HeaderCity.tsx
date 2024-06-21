'use client';

import React from 'react';
import Background from '@/assets/page-dev.png';
import { Button } from '@/components/ui/button';
import { GrFormPrevious } from 'react-icons/gr';

interface Props {
  params: {
    title: string;
  };
}

const handleBack = () => {
  window.history.back();
};

const HeaderCity: React.FC<Props> = ({ params: { title } }) => {
  return (
    <div
      className="w-full h-[696px] grayscale bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${Background.src})` }}>
      <main className="w-full mx-auto max-w-7xl flex flex-col justify-center items-start h-[696px]">
        <Button
          onClick={handleBack}
          className="absolute bg-transparent font-bold hover:bg-transparent top-4 flex items-center text-[#fff] text-sm gap-2">
          <GrFormPrevious className="text-[20px]" />
          <span>Kembali</span>
        </Button>
        <div className="flex justify-start flex-col mb-12 text-[#ffffff] text-left">
          <p className="text-[36px]">Gallery rumah di</p>
          <h1 className="text-[117px] font-bold capitalize -my-2">{title}</h1>
          <p className="text-[22px] leading-[32px]">
            Menampilkan 1-20 dari total 132.512 properti
          </p>
          <p className="text-[29.57px] mt-[21px] font-medium">
            Harga mulai dari
          </p>
          <p className="text-[34px] font-bold leading-[47px]">
            1 Miliar - 70 Miliar
          </p>
        </div>
      </main>
    </div>
  );
};

export default HeaderCity;
