import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface PropsCardLocation {
  link: string;
  title: string;
  img: string;
}

const CardLocation: React.FC<PropsCardLocation> = ({ link, title, img }) => {
  return (
    <Link
      href={`/search/${link}`}
      prefetch={false}
      className="flex flex-col items-center">
      <Image
        className="w-full hover:scale-110 duration-300"
        layout="responsive"
        src={img}
        alt="Location"
        width={155}
        height={164}
      />
      <p className="text-[#3A3A3A] tracking-[0.4px] mt-3 text-[21px]">
        {title}
      </p>
    </Link>
  );
};

export default CardLocation;
