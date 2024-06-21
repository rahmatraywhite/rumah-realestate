import React from 'react';
import CardLocation from './CardLocation';
import Lok1 from '@/assets/lok1.png';
import Lok2 from '@/assets/lok2.png';
import Lok3 from '@/assets/lok3.png';
import Lok4 from '@/assets/lok4.png';
import Lok5 from '@/assets/lok5.png';
import Lok6 from '@/assets/lok6.png';
import Lok7 from '@/assets/lok7.png';

const AllLocation = () => {
  return (
    <main className="flex max-w-7xl mb-36 mx-auto w-full">
      <div className="w-full flex-col flex">
        <h1 className="text-accent text-[30px] font-bold tracking-[0.6px]">
          Cari rumah sesuai lokasi
        </h1>
        <div className="w-full gap-[21.21px] mt-[21px] flex justify-between">
          <CardLocation link="jakarta" title="Jakarta" img={Lok1.src} />
          <CardLocation link="bandung" title="Bandung" img={Lok2.src} />
          <CardLocation link="surabaya" title="Surabaya" img={Lok3.src} />
          <CardLocation link="semarang" title="Semarang" img={Lok4.src} />
          <CardLocation link="yogyakarta" title="Yogyakarta" img={Lok5.src} />
          <CardLocation link="medan" title="Medan" img={Lok6.src} />
          <CardLocation link="bogor" title="Bogor" img={Lok7.src} />
        </div>
      </div>
    </main>
  );
};

export default AllLocation;
