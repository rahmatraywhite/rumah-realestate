import React from 'react';
import Developer from '@/assets/official-dev.png';
import Image from 'next/image';
import Link from 'next/link';

const CardDeveloper: React.FC = () => {
  return (
    <Link href="/developer" className="flex flex-col items-center justify-center">
      <Image src={Developer} alt="image" className="w-full" height={180} />
      <p className="text-[#3A3A3A] text-[24px]">Lippo group</p>
    </Link>
  );
};

export default CardDeveloper;
