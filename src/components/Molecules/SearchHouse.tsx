import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

export default function SearchHouser() {
  return (
    <div className="flex bg-[#FAFAFA] mt-[31px] rounded-[9px] gap-[16px] w-full items-center p-3">
      <input
        className="text-[#8F8F8F] rounded-lg text-sm p-2 w-full md:w-[270px] placeholder:text-[#8F8F8F] focus:outline-none focus:ring-2 focus:ring-[#EE4336]"
        type="search"
        placeholder="Cari alamat, nama jalan, kota"
      />
      <Button className="bg-[#EE4336] hover:bg-[#972424]" type="submit">
        Cari Rumah
      </Button>
    </div>
  );
}
