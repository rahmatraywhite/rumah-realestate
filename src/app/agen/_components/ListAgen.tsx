import React from 'react';
import CardAgen from './CardAgen';

const ListAgen = () => {
  return (
    <div className="w-full max-w-7xl my-[52px] px-4 md:px-0 mx-auto">
      <div className="flex flex-col">
        <h2 className="leading-[0.64px] text-[32px] font-bold text-accent">
          Agen teraktif bulan lalu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <CardAgen />
          <CardAgen />
          <CardAgen />
        </div>
      </div>
      <div className="flex mt-16 flex-col">
        <h2 className="leading-[0.64px] text-[32px] font-bold text-accent">
          Agen terfavorit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <CardAgen />
          <CardAgen />
          <CardAgen />
          <CardAgen />
          <CardAgen />
          <CardAgen />
          <CardAgen />
          <CardAgen />
          <CardAgen />
        </div>
      </div>
    </div>
  );
};

export default ListAgen;
