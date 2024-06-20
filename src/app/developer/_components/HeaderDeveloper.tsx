'use client';

import Image from 'next/image';
import React from 'react';
import BgHeader from '@/assets/header-dev.png';
import { GrFormPrevious } from 'react-icons/gr';
import { Button } from '@/components/ui/button';
import OfficalDev from '@/assets/lippo.png';
import { Source_Sans_3 } from 'next/font/google';
import ProjectDeveloper from './ProjectDeveloper';

const sourceSans = Source_Sans_3({ subsets: ['latin'] });

const handleBack = () => {
  window.history.back();
};

const HeaderDeveloper = () => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <Image
          src={BgHeader}
          alt="image"
          className="w-full grayscale h-[315px] rounded-b-[11px] object-cover"
        />
        <Button
          onClick={handleBack}
          className="absolute bg-transparent font-bold hover:bg-transparent top-4 flex items-center text-[#fff] text-sm gap-2">
          <GrFormPrevious className="text-[20px]" />
          <span>Kembali</span>
        </Button>
      </div>
      {/* profile developer */}
      <section className="w-full px-4 md:px-16 flex-col">
        <div
          className={`flex flex-col md:flex-row text-center md:text-left items-center ${sourceSans.className} justify-between gap-2 md:gap-[45px] py-[18px]`}>
          <div className="flex items-center justify-center rounded-full w-[132px] h-[132px]">
            <Image src={OfficalDev} alt="Developer" />
          </div>
          <div className="flex flex-col max-w-[626px]">
            <h1 className="text-[30px] leading-[42px] text-accent">
              PT Anantagraha Jaya Propertindo
            </h1>
            <p className="text-[#5C5C5C] mt-[15px] text-xl leading-[28px] text-opacity-80">
              The Prominence Blok 38-F No. 45 Alam Sutera, RT.003/RW.006,
              Panunggangan Tim., Kec. Pinang, Kota Tangerang Selatan, Banten
              15143.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-sm text-[#5C5C5C] text-opacity-80 gont-light">
              Tanya tentang developer ini
            </p>
            <Button className="px-28 mt-3 rounded-[20px]">CHAT</Button>
          </div>
        </div>
        <div className="flex mt-5 md:mt-0 flex-col">
          <h2
            className={`${sourceSans.className} text-[23px] mb-3 md:mb-[25px] ledaing-[32px] text-accent`}>
            Tentang Developer
          </h2>
          <p
            className={`${sourceSans.className} text-[17.414px] mb-[29px] text-[#5C5C5C] leading-[24px] font-light`}>
            PT Anantagraha Jaya Propertindo merupakan perusahaan pelaksanaan
            konstruksi yang beralamat di The Prominence Blok 38-F No. 45 Alam
            Sutera, RT.003/RW.006, Panunggangan Tim., Kec. Pinang, Kota
            Tangerang Selatan, Banten 15143. Berfokus pada pengerjaan proyek
            perumahan komersial dan subsidi, sejak tahun 2018 perusahaan ini
            telah mengembangkan proyek terbarunya yaitu perumahan Daru Raya yang
            menawarkan hunian tipe subsidi dan komersial bagi masyarakat kelas
            menengah hingga ke bawah yang menginginkan hunian nyaman dan
            terjangkau di Kota Tangerang.
          </p>
          <Button className="bg-transparent max-w-[182px] rounded-[6px] font-inter border border-[#D5D5D5] text-primary hover:text-white">
            Lihat Semua
          </Button>
        </div>
      </section>
      <ProjectDeveloper />
    </div>
  );
};

export default HeaderDeveloper;
