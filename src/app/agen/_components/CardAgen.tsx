import React from 'react';
import Agen from '@/assets/agen.png';
import Image from 'next/image';
import Rwi from '@/assets/icons/rwi.svg';
import { Button } from '@/components/ui/button';

const CardAgen = () => {
  return (
    <div className="px-[18px] rounded-[10px] shadow-lg bg-[#FFFFFF] py-[21px]">
      <div className="flex items-center gap-[15px]">
        <Image
          src={Agen}
          alt="image"
          className="rounded-sm"
          width={84}
          height={84}
        />
        <div>
          <p className="text-lg font-medium text-accent">Travis Backer</p>
          <span className="text-xs text-[#8F8F8F] font-medium">
            Property Agen
          </span>
        </div>
      </div>
      <hr className="my-6 gap-1" />
      <div className="flex item-center justify-between ">
        <div className="flex flex-col">
          <p className="text-accent text-[15px] font-medium">
            Ray White Jakarta Garden City
          </p>
          <span className="text-[#8F8F8F] text-[11.7px]">
            Anggota sejak 4 tahun lalu
          </span>
        </div>
        <Image
          src={Rwi}
          alt="image"
          className="rounded-sm"
          width={85}
          height={15}
        />
      </div>
      <div className="bg-[#D5D5D540] flex justify-around rounded-[18px] py-2 px-3 my-3">
        <div className="flex flex-col items-center justify-center">
          <p className="text-accent text-sm font-medium">30 jam</p>
          <span className="text-[#8F8F8F] text-[11px]">Online/Bulan</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-accent text-sm font-medium">16</p>
          <span className="text-[#8F8F8F] text-[11px]">Listing baru/Bulan</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-accent text-sm font-medium">Rp. 2,9 Miliar</p>
          <span className="text-[#8F8F8F] text-[11px]">Harga Tengah</span>
        </div>
      </div>
      <Button className="w-full font-bold bg-[#17A759] hover:bg-green-700">
        Hubungi agen
      </Button>
      <Button className="w-full border-2 mb-3 font-bold text-[#8F8F8F] border-[#Bababa] bg-transparent hover:bg-transparent mt-3">
        Lihat profil
      </Button>
    </div>
  );
};

export default CardAgen;
