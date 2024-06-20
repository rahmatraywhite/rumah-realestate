import React from 'react';
import populer from '@/assets/populer.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Heart, MapPin } from 'lucide-react';
import { FaHeart } from 'react-icons/fa';
import TagDev from '@/assets/icons/tag-dev.svg';

const CardPopuler: React.FC = () => {
  return (
    <div className="bg-[#FAFAFA] px-[10px] py-3 rounded-b-sm">
      <Image src={populer} alt="image" className="w-full" height={180} />
      <div className="flex mt-6 justify-between items-center">
        <p className="text-[#3A3A3A] font-bold leading-[25px]">
          Rp. 800 Juta - 5 Miliar
        </p>
        <Button className="flex p-2 bg-transparent hover:bg-transparent items-center justify-center rounded-full border-2 border-[#D5D5D5]">
          <FaHeart size={20} className="text-[#BABABA] hover:text-[#EE4336]" />
        </Button>
      </div>
      <p className="text-[#3A3A3A] mt-[7px] text-lg">
        Bandung Grand City Paradise
      </p>
      <div className="flex mt-1 items-center mb-4 gap-[6px]">
        <MapPin size={20} className="text-[#8F8F8F]" />
        <p className="text-[#8F8F8F]  text-xs leading-[27px]">
          Bali seminyak, Indonesia
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

export default CardPopuler;
