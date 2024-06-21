import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import CardFeatured from '@/components/Molecules/CardFeatured';

const ResultLocation: React.FC = () => {
  return (
    <main className="w-full flex flex-col max-w-7xl mx-auto">
      <div className="flex items-center bg-[#F2F2F2] mx-auto gap-4 mb-[32px] rounded-[10px] p-5">
        <Select>
          <SelectTrigger className="w-auto text-nowrap gap-2">
            <SelectValue placeholder="Dijual" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dijual">Dijual</SelectItem>
            <SelectItem value="dark">Disewa</SelectItem>
            <SelectItem value="system">Dirental</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-auto text-nowrap gap-2">
            <SelectValue placeholder="Type Rumah" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dijual">Type Rumah</SelectItem>
            <SelectItem value="dark">Disewa</SelectItem>
            <SelectItem value="system">Dirental</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-auto text-nowrap gap-2">
            <SelectValue placeholder="Harga" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dijual">Harga</SelectItem>
            <SelectItem value="dark">Disewa</SelectItem>
            <SelectItem value="system">Dirental</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-auto text-nowrap gap-2">
            <SelectValue placeholder="Ruang tidur" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dijual">Ruang tidur</SelectItem>
            <SelectItem value="dark">Disewa</SelectItem>
            <SelectItem value="system">Dirental</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-auto text-nowrap gap-2">
            <SelectValue placeholder="Kamar Mandi" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dijual">Kamar Mandi</SelectItem>
            <SelectItem value="dark">Disewa</SelectItem>
            <SelectItem value="system">Dirental</SelectItem>
          </SelectContent>
        </Select>
        <Button className="w-auto px-10 text-sm font-bold">Cari</Button>
      </div>
      <section className="w-full max-w-7xl mb-[32px] mx-auto">
        <h1 className="text-accent text-[32px] mb-5 font-bold tracking-[0.64px]">
          Rumah di Jakarta Selatan
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardFeatured />
          <CardFeatured />
          <CardFeatured />
          <CardFeatured />
        </div>
      </section>
      <section className="w-full max-w-7xl mb-[32px] mx-auto">
        <h1 className="text-accent text-[32px] mb-5 font-bold tracking-[0.64px]">
          Rumah di Jakarta Barat
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardFeatured />
          <CardFeatured />
          <CardFeatured />
          <CardFeatured />
        </div>
      </section>
      <section className="w-full max-w-7xl mb-[32px] mx-auto">
        <h1 className="text-accent text-[32px] mb-5 font-bold tracking-[0.64px]">
          Rumah di Jakarta Timur
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardFeatured />
          <CardFeatured />
          <CardFeatured />
          <CardFeatured />
        </div>
      </section>
      <section className="w-full max-w-7xl mb-[120px] mx-auto">
        <h1 className="text-accent text-[32px] mb-5 font-bold tracking-[0.64px]">
          Rumah di Jakarta Utara
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardFeatured />
          <CardFeatured />
          <CardFeatured />
          <CardFeatured />
        </div>
      </section>
    </main>
  );
};

export default ResultLocation;
