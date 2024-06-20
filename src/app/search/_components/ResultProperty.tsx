import CardFeatured from '@/components/Molecules/CardFeatured';
import React from 'react';

const ResultProperty = () => {
  return (
    <section className="flex flex-col my-[56px] max-w-7xl w-full mx-auto">
      <h1 className="text-accent text-[32px] font-bold tracking-[0.64px]">
        33 rumah dijual di Menteng Kota Jakarta
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[28px] my-12">
        <CardFeatured />
        <CardFeatured />
        <CardFeatured />
        <CardFeatured />
        <CardFeatured />
        <CardFeatured />
        <CardFeatured />
        <CardFeatured />
      </div>
    </section>
  );
};

export default ResultProperty;
