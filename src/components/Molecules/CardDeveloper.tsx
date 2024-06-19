import React from 'react';
import Developer from '@/assets/official-dev.png';
import Image from 'next/image';

const CardDeveloper: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={Developer} alt="image" className="w-full" height={180} />
      <p className="text-[#3A3A3A] text-[24px]">Lippo group</p>
    </div>
  );
};

export default CardDeveloper;
