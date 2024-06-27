"use client";

import { menu } from '@/data/menu';
import React, { useState } from 'react';

const NavMenu = () => {
    const [selectedType, setSelectedType] = useState('Rumah');

    const handleTypeClick = (type: string) => {
        setSelectedType(type);
    };

    return (
        <div className='flex max-h-[376px] bg-[#fff] overflow-y-scroll w-full p-4'>
            <div className='w-1/4 p-4 sticky top-0'>
                <p className='text-xl font-bold tracking-[-0.4px]'>Tipe Properti</p>
                <ul className='flex flex-col gap-8 mt-9'>
                    {['Rumah', 'Apartemen', 'Ruko', 'Tanah'].map((type) => (
                        <li
                            key={type}
                            onClick={() => handleTypeClick(type)}
                            className={`cursor-pointer ${selectedType === type ? 'font-bold' : ''}`}
                        >
                            {type}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='h-screen sticky top-0 my-auto w-[1px] bg-accent mx-4'></div>
            <div className='w-3/4 p-4'>
                <p className='text-xl font-bold tracking-[-0.4px]'>{selectedType}</p>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
                    {menu.map((item) => (
                        <div key={item.id} className='py-2 space-y-7 rounded-md'>
                            <p className='text-sm font-semibold tracking-[-0.26px]'>{item.title}</p>
                            {item.subtitle.split(', ').map((location, index) => (
                                <p key={index} className='text-sm'>{`${selectedType} Dijual ${location}`}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NavMenu;
