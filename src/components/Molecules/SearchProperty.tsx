import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchProperty = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      const formattedQuery = query.trim().replace(/\s+/g, '-');
      router.push(`/search?property=${encodeURIComponent(formattedQuery)}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex bg-[#FAFAFA] mt-[31px] rounded-[9px] gap-[16px] w-full items-center p-3">
      <input
        className="text-[#8F8F8F] rounded-lg text-sm p-2 w-full md:w-[270px] placeholder:text-[#8F8F8F] focus:outline-none focus:ring-2 focus:ring-[#EE4336]"
        type="search"
        placeholder="Cari alamat, nama jalan, kota"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button className="bg-[#EE4336] hover:bg-[#972424]" type="submit">
        Cari Rumah
      </Button>
    </form>
  );
};

export default SearchProperty;
