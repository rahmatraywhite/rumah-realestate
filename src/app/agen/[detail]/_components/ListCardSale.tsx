import React from 'react';
import ImgSale from '@/assets/list-sale.png';
import Image from 'next/image';
import { FaBed } from 'react-icons/fa';
import { BiSolidBath } from 'react-icons/bi';
import { MdOutlineDirectionsCar } from 'react-icons/md';

const ListCardSale = () => {
  return (
    <div className="border-[0.741px] border-[#D5D5D5] rounded-[14.825px] px-5 py-[38px]">
      <div className="flex gap-6 items-center">
        <Image
          src={ImgSale}
          className="w-[254px] h-[133px] rounded-[7.4px]"
          alt="image"
        />
        <div>
          <p className="text-accent text-lg font-medium">Rp 700 Juta</p>
          <p className="text-accent font-bold text-[22px]">
            Rumah Baru Minimalis Bandung Siap Huni
          </p>
          <p className="text-[#8F8F8F] tracing-[-0.32px]">
            Setra Duta, Bandung Jawa Barat
          </p>
          <div className="flex gap-2 mt-3">
            <div className="flex text-sm items-center gap-[7.4px]">
              <FaBed className="text-[#8F8F8F]" size={18} />
              <span className="text-[#8F8F8F] font-bold text-sm">4</span>
            </div>
            <div className="flex text-sm items-center gap-[7.4px]">
              <BiSolidBath className="text-[#8F8F8F]" size={18} />
              <span className="text-[#8F8F8F] font-bold text-sm">2</span>
            </div>
            <div className="flex text-sm items-center gap-[7.4px]">
              <MdOutlineDirectionsCar className="text-[#8F8F8F]" size={18} />
              <span className="text-[#8F8F8F] font-bold text-sm">2</span>
            </div>
            <div className="flex text-sm items-center gap-[7.4px]">
              <span className="text-[#8F8F8F] font-bold text-sm">
                LT: 110 m&sup2;
              </span>
            </div>
            <div className="flex text-sm items-center gap-[7.4px]">
              <span className="text-[#8F8F8F] font-bold text-sm">
                LB: 163 m&sup2;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCardSale;
