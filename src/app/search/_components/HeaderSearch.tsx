'use client';

import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { LuMapPin } from 'react-icons/lu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const HeaderSearch = () => {
  const [property, setProperty] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const property = urlParams.get('property');
    const formated = property?.replace(/-/g, ' ');
    if (formated) {
      setProperty(formated);
    }
  }, []);
  return (
    <main className="w-full flex-col flex">
      <div className="flex items-center max-w-7xl mx-auto gap-4 w-full mt-3 p-5">
        <div className="relative flex w-full">
          <LuMapPin className="absolute text-[#3A3A3A] left-3 top-1/2 -translate-y-1/2" />
          <Input
            className="pl-10"
            type="email"
            placeholder="Cari properti"
            defaultValue={property}
          />
        </div>
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
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63462.40135085884!2d106.75482042683262!3d-6.210846727121906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4028aa872a3%3A0xa3b116da290c03ef!2sRay%20White%20Indonesia!5e0!3m2!1sen!2sid!4v1718876148908!5m2!1sen!2sid"
          width="100%"
          height="580"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </main>
  );
};

export default HeaderSearch;
