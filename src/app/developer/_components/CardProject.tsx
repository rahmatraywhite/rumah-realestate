import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';

interface CardProjectTypes {
  developer: {
    id: number;
    image: StaticImageData;
    logo: StaticImageData;
    price: string;
    title: string;
    location: string;
  };
}
const CardProject: React.FC<CardProjectTypes> = ({ developer }) => {
  return (
    <div className="bg-[#FAFAFA] px-[10px] py-3 rounded-b-sm">
      <Link
        href={`/developer/${developer.id}`}
        className="w-full flex duration-300 hover:scale-105 items-center justify-center relative">
        <Image
          src={developer.image}
          alt="image"
          className="w-full "
          height={180}
        />
        <div className="absolute top-0 bg-white px-3 py-4 rounded-b-xl">
          <Image src={developer.logo} alt="image" width={56} height={56} />
        </div>
      </Link>
      <div className="flex mt-6 justify-between items-center">
        <p className="text-[#3A3A3A] font-bold leading-[25px]">
          {developer.price}
        </p>
        <Button className="flex p-2 bg-transparent hover:bg-transparent items-center justify-center rounded-full border-2 border-[#D5D5D5]">
          <FaHeart size={20} className="text-[#BABABA] hover:text-[#EE4336]" />
        </Button>
      </div>
      <Link href={`/developer/${developer.id}`}>
        <p className="text-[#3A3A3A] mt-[7px] text-lg"> {developer.title}</p>
      </Link>
      <div className="flex mt-1 items-center mb-4 gap-[6px]">
        <MapPin size={20} className="text-[#8F8F8F]" />
        <p className="text-[#8F8F8F]  text-xs leading-[27px]">
          {developer.location}
        </p>
      </div>
      <div className="flex items-center">
        <p className="text-xs text-[#333333] text-opacity-50">
          Diperbaharui 2 hari lalu
        </p>
      </div>
    </div>
  );
};

export default CardProject;
