'use client';

import React, { useState, useEffect } from 'react';
import Background1 from '../../assets/img1.png';
import Background2 from '../../assets/img2.png';
import Background3 from '../../assets/img1.png';
import { Plus_Jakarta_Sans } from 'next/font/google';
import SearchHouser from '../Molecules/SearchHouse';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

const backgroundImages = [
  Background1,
  Background2,
  Background3,
  Background1,
  Background2,
  Background3,
];

const HeaderHome: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex >= backgroundImages.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <header className="relative w-full h-screen md:h-[500px] flex justify-center items-center overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-1000"
        style={{
          transform: `translateX(-${
            (currentIndex % backgroundImages.length) * 100
          }%)`,
        }}>
        {backgroundImages.map((bg, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0"
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>
      <main className="w-full h-full px-4 md:px-0 z-10 flex justify-start max-w-7xl items-center">
        <div className={`text-white ${plusJakarta.className}`}>
          <h1 className="text-[32px] font-semibold ledaing-[59px]">
            Find your future
          </h1>
          <p className="text-[52px] font-extrabold leading-[59px]">
            dream home
          </p>
          <SearchHouser />
        </div>
      </main>
      <div className="absolute bottom-5 flex space-x-3">
        {[0, 1, 2].map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full z-10 ${
              currentIndex % 3 === index ? 'bg-[#EE4336]' : 'bg-white'
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </header>
  );
};

export default HeaderHome;
