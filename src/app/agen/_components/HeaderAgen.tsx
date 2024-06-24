'use client';

import React from 'react';
import Background from '@/assets/bg-agent.png';
import { Button } from '@/components/ui/button';
import { GrFormPrevious } from 'react-icons/gr';
import { IoIosSearch } from 'react-icons/io';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const HeaderAgen = () => {
  const handleBack: () => void = () => {
    window.history.back();
  };
  return (
    <header>
      <main
        className="flex flex-col w-full mx-auto bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${Background.src})` }}>
        <div className="w-full relative px-4 h-[392px] max-w-7xl mx-auto justify-center flex flex-col">
          <Button
            onClick={handleBack}
            className="absolute bg-transparent font-bold hover:bg-transparent top-4 -left-1 flex items-center text-accent text-sm gap-2">
            <GrFormPrevious className="text-[20px]" />
            <span>Kembali</span>
          </Button>
          <div className="flex flex-col">
            <p className="text-accent text-[22px] leading-[30.8px]">
              Jual rumah dengan berbagai agen di
            </p>
            <h1 className="text-accent text-[65px] leading-[91px] font-bold">
              Rumah<span className="font-normal">realestate</span>
            </h1>
            <p className="text-primary italic leading-[37px] font-black text-[22px]">
              #PASTIUNTUNG
            </p>
          </div>
        </div>
      </main>
      <section className=" px-4 max-w-4xl -my-[50px] mb-[52px] mx-auto">
        <div className=" bg-[#F2F2F2] rounded-[10px] mt-[22px] p-[30px]">
          <div className="flex items-end space-x-4">
            <div className="grid w-full max-w-xl items-center gap-1.5">
              <Label
                htmlFor="name"
                className="text-accent font-semibold text-sm">
                Nama agen
              </Label>
              <div className="relative w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <IoIosSearch className="text-primary text-2xl" />
                </span>
                <Input
                  type="text"
                  placeholder="Cari nama agen"
                  className="pl-10 text-sm text-accent placeholder:text-[#5c5c5c]"
                />
              </div>
            </div>
            <div className="grid items-center gap-1.5">
              <Label
                htmlFor="city"
                className="text-accent font-semibold text-sm">
                Nama Kota
              </Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Jakarta" />
                </SelectTrigger>
                <SelectContent className="text-[#3A3A3A]">
                  <SelectGroup>
                    <SelectItem value="apple">Jakarta</SelectItem>
                    <SelectItem value="banana">Bandung</SelectItem>
                    <SelectItem value="blueberry">Surabaya</SelectItem>
                    <SelectItem value="grapes">Yogyakarta</SelectItem>
                    <SelectItem value="pineapple">Bali</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button
              className="bg-primary text-[#fff] font-bold px-10 text-sm"
              type="submit">
              Cari
            </Button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default HeaderAgen;
