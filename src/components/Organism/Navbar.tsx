'use client';

import Image from 'next/image';
import { useState } from 'react';
import Logo from '../../assets/logo.png';
import { Button } from '../ui/button';
import Link from 'next/link';
import { IoMenu, IoClose } from 'react-icons/io5';
import NavMenu from './NavMenu';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [selectedType, setSelectedType] = useState('Rumah');

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
    setShowNavMenu(true);
  };

  return (
    <>
      <nav className="w-full bg-[#EE4336] shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 xl:px-0">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <Image src={Logo} alt="logo" height={42} />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <IoClose className="w-6 h-6 text-white" />
                  ) : (
                    <IoMenu className="w-6 h-6 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                }`}>
              <ul className="items-start flex-col flex justify-center space-y-4 md:flex-row md:space-x-12 md:space-y-0">
                <li
                  onClick={() => handleTypeClick('Dijual')}
                  className="cursor-pointer text-white text-sm font-medium"
                >
                  Dijual
                </li>
                <li
                  onClick={() => handleTypeClick('Disewa')}
                  className="cursor-pointer text-white text-sm font-medium"
                >
                  Disewa
                </li>
                <Link
                  href="/properti-baru"
                  className="text-white text-sm font-medium">
                  Properti Baru
                </Link>
                <Link href="/agen" className="text-white text-sm font-medium">
                  Cari Agen
                </Link>
              </ul>
              <div className="mt-3 space-y-2 flex flex-col lg:hidden md:inline-block">
                <Button
                  variant="ghost"
                  className="text-white w-full border border-[#FFE512] hover:bg-transparent hover:text-[#FFE512]">
                  Jadi Agen
                </Button>
                <Link href="/login">
                  <Button className="bg-[#FFE512] w-full text-[#3A3A3A] px-7 text-sm hover:bg-[#FFE512]">
                    Jual Rumah
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden space-x-4 md:inline-block">
            <Button
              variant="ghost"
              className="text-white hover:bg-transparent hover:text-[#FFE512]">
              Jadi Agen
            </Button>
            <Link href="/login">
              <Button className="bg-[#FFE512] text-[#3A3A3A] px-7 text-sm hover:bg-[#FFE512]">
                Jual Rumah
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      {showNavMenu && <NavMenu />}
    </>
  );
}
