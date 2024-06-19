import Link from 'next/link';
import React from 'react';
import Logo from '@/assets/icons/rre-hitam.svg';
import bgFooter from '@/assets/bg-footer.png';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa';
import MenuHome from '../Molecules/MenuHome';

const Footer: React.FC = () => {
  return (
    <footer className="relative px-4">
      <MenuHome />
      <div className="text-center text-sm text-[#8F8F8F] leading-[140%] z-10 relative">
        <p className="font-semibold">© 2024 Rumahrealestate. </p>
        <p>
          Bersama kami, perjalanan menuju properti impian Anda menjadi lebih
          menyenangkan.
          <br /> Kami berkomitmen untuk memberikan layanan terbaik bagi Anda.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-[42px] gap-4 z-10 relative">
        <div>
          <Image src={Logo} alt="Rumah Real Estate" height={41} />
        </div>
        <div className="text-[#8F8F8F] gap-3 flex items-center mt-1 text-xs font-light">
          <p>Follow us:</p>
          <Link href="/">
            <FaInstagram className="text-[#F5463A] w-5 h-5" />
          </Link>
          <Link href="/">
            <FaFacebook className="text-[#F5463A] w-5 h-5" />
          </Link>
          <Link href="/">
            <FaYoutube className="text-[#F5463A] w-5 h-5" />
          </Link>
          <Link href="/">
            <FaTiktok className="text-[#F5463A] w-5 h-5" />
          </Link>
        </div>
      </div>
      <div
        className="w-full bg-no-repeat bg-cover bg-center h-[564px] absolute top-32 left-0 z-0"
        style={{ backgroundImage: `url(${bgFooter.src})` }}></div>
    </footer>
  );
};

export default Footer;
