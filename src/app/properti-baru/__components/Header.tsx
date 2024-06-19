import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IoIosSearch } from "react-icons/io";
import React from 'react';

export default function HeaderNewProperty() {
    return (
        <header className="w-full max-w-7xl py-[62px] px-4 md:px-0 mx-auto">
            <h1 className="text-[#3A3A3A] text-[32px] font-bold tracking-[0.64px]">
                Cari properti baru
            </h1>
            <div className="w-full bg-primary rounded-[10px] mt-[22px] p-[30px]">
                <div className="flex max-w-7xl items-center space-x-4">
                    <div className="relative w-full">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <IoIosSearch className="text-[#8F8F8F] text-2xl" />
                        </span>
                        <Input
                            type="text"
                            placeholder="Lokasi, area, developer"
                            className="pl-10 text-lg placeholder:text-[#8F8F8F]"
                        />
                    </div>
                    <Button
                        className="bg-[#BABABA] hover:bg-[#BABABA] text-[#3A3A3A] px-10 text-sm"
                        type="submit">
                        Cari
                    </Button>
                </div>
            </div>
        </header>
    );
}
