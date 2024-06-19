import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SearchHouser() {
  return (
    <div className="flex bg-[#FAFAFA] mt-[31px] rounded-[9px] gap-[33px] w-full items-center p-3">
      <Input
        className="text-black w-full md:w-[270px] placeholder:text-[#8F8F8F]"
        type="search"
        placeholder="Cari alamat, nama jalan, kota"
      />
      <Button className="bg-[#EE4336] hover:bg-[#972424]" type="submit">
        Cari Rumah
      </Button>
    </div>
  );
}
