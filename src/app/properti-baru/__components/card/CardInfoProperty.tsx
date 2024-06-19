import React from 'react'
import ImageProperty from '@/assets/info-properti.png'
import Image from 'next/image'
import { MdLocationOn } from "react-icons/md";
import { Button } from '@/components/ui/button';
import TagRwi from '@/assets/icons/tag-rwi-putih.svg';

const CardInfoProperty: React.FC = () => {
    return (
        <div className='bg-[#FFFFFF]'>
            <div className='w-full relative'>
                <Image src={ImageProperty} alt="image" className="w-full" />
                <Image src={TagRwi} alt="image" className="absolute top-[23px] left-[23px]" />
            </div>
            <div className='flex flex-col p-4 gap-4'>
                <h1 className='text-accent text-[21.6px] font-bold leading-[28.8px]'>Tips Membeli Properti</h1>
                <div className='flex text-[#333333] text-opacity-50 items-center gap-2'>
                    <MdLocationOn size={20} />
                    <p className='text-[14.4px] leading-[28.8px]'>Bandung, 19 Juli 2022</p>
                </div>
                <p className='text-accent text-[14.4px] leading-[28.8px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus senectus purus vitae dui sagittis. Auctor ornare nam neque eu ac felis, cursus pellentesque senectus. At fringilla tincidunt ac nisi elementum nulla. Vivamus massa et accumsan ac est, imperdiet quisque nunc pharetra.</p>
                <Button className='text-[14px] max-w-[165px] font-bold leading-[19px] rounded-[6px] text-[#fafafa]'>Baca Selengkapnya</Button>
            </div>
        </div>
    )
}

export default CardInfoProperty
