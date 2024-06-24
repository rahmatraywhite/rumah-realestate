import React from 'react';
import Bandung from '@/assets/bandung.png';
import Image from 'next/image';
import Logo from '@/assets/icons/rre-putih.svg';

const CardCity = () => {
  return (
    <div className="relative cursor-pointer w-full h-[363px] rounded-3xl overflow-hidden group">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat transform transition-transform duration-500 group-hover:scale-125"
        style={{ backgroundImage: `url(${Bandung.src})` }}>
        <div className="absolute inset-0 bg-gray-950 bg-opacity-75"></div>
      </div>
      <div className="relative z-10 p-[26px] flex flex-col justify-between h-full">
        <Image
          src={Logo}
          alt="Rumahrealestate"
          className="w-[141px]"
          height={20}
        />
        <div className="flex flex-col gap-2">
          <p className="text-[20px] leading-[24px] text-[#fff]">Bandung</p>
          <p className="text-[13px] leading-[16px] text-[#fff]">1500 Agen</p>
        </div>
      </div>
    </div>
  );
};

export default CardCity;
