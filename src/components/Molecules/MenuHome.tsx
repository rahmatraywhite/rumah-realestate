import Link from 'next/link';
import React from 'react';
import { Separator } from '@/components/ui/separator';

interface MenuItem {
  title: string;
  link: string;
}

const menu: MenuItem[] = [
  {
    title: 'Tentang Kami',
    link: 'tentang-kami',
  },
  {
    title: 'Layanan',
    link: 'layanan',
  },
  {
    title: 'Partner',
    link: 'partner',
  },
  {
    title: 'KPR',
    link: 'kpr',
  },
  {
    title: 'Term of use',
    link: 'term-of-use',
  },
  {
    title: 'Privacy Portal',
    link: 'privacy-portal',
  },
  {
    title: 'Blog',
    link: 'blog',
  },
];

const MenuHome: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto pb-8 items-center flex flex-col justify-center">
      <ul className="flex space-x-6">
        {menu.map((item, index) => (
          <li key={index}>
            <Link href={`/${item.link}`}>
              <p className="text-[#3A3A3A] leading-[20px] text-sm hover:underline">
                {item.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <Separator className="mt-6 w-full" />
    </div>
  );
};

export default MenuHome;
