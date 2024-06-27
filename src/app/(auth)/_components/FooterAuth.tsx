import Link from 'next/link';
import React from 'react';
import Logo from '@/assets/icons/rre-hitam.svg';
import bgFooter from '@/assets/bg-footer.png';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa';

const FooterAuth: React.FC = (): JSX.Element => {
    return (
        <footer className="relative px-4">
            <div className="flex flex-col mt-11 md:flex-row justify-center items-center gap-4 z-10 relative">
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
                className="w-full bg-no-repeat bg-cover bg-center h-[264px] md:h-[564px] absolute top-2 left-0 z-0"
                style={{ backgroundImage: `url(${bgFooter.src})` }}></div>
        </footer>
    );
};

export default FooterAuth;
