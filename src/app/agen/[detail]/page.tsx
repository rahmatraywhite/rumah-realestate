import React from 'react';
import ImgAgen from '@/assets/agen-detail.png';
import Image from 'next/image';
import Verif from '@/assets/icons/verif1.svg';
import {
  FaFacebook,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import Raywhite from '@/assets/icons/rwi.svg';
import { Button } from '@/components/ui/button';
import ListCardSale from './_components/ListCardSale';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import ImgSale from '@/assets/sale.png';

const listSale = [
  {
    alamat: '231 E Utah St, Fairfield, CA, 94533',
    tglSold: '12/21/2022',
    closing: '$476,000',
    represented: 'Buyer',
    img: ImgSale,
  },
];

const duplicated = Array.from({ length: 10 }, (_, index) => listSale[0]);

const AgenDetail = ({ params }: { params: { detail: string } }) => (
  <main className="w-full max-w-7xl mx-auto flex flex-col">
    <div className="flex my-[72px] w-full">
      <section className="flex-1 p-4" style={{ flexBasis: '60%' }}>
        <div className="flex gap-[39px]">
          <Image
            src={ImgAgen}
            alt="image"
            className="w-[289px] rounded-full"
            height={283}
          />
          <div className="flex gap-[22px] flex-col">
            <div className="flex px-3 py-1 justify-center w-[110px] rounded-md items-center gap-1 bg-[#F2F2F2]">
              <Image src={Verif} alt="image" width={16} height={16} />
              <p className="text-accent font-medium text-sm">Verifed</p>
            </div>
            <div>
              <h1 className="text-accent text-[32px] font-bold">
                Maya Prestige
              </h1>
              <p className="text-[22px] mt-3 font-medium text-[#5C5C5C] ledaing-[-0.44px]">
                Ray White Prestige Agent
              </p>
              <div className="flex gap-7 items-center">
                <div className="flex items-center text-accent flex-col justify-center">
                  <p className="text-[25px] font-bold">9</p>
                  <span className="text-[15px]">Iklan Tayang</span>
                </div>
                <div className="border-l border-[#BABABA] h-8"></div>
                <div className="flex items-center text-accent flex-col justify-center">
                  <p className="text-[25px] font-bold">9</p>
                  <span className="text-[15px]">Terjual</span>
                </div>
                <div className="border-r border-[#BABABA] h-8"></div>
                <div className="flex items-center text-accent flex-col justify-center">
                  <p className="text-[25px] font-bold">9</p>
                  <span className="text-[15px]">Tersewa</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[22px]">
              <div className="bg-[#D9D9D9] cursor-pointer rounded-full p-2 w-[51px] justify-center flex">
                <FaFacebook className="text-[#8F8F8F] w-8 h-8" />
              </div>
              <div className="bg-[#D9D9D9] cursor-pointer rounded-full p-2 w-[51px] justify-center flex">
                <AiFillInstagram className="text-[#8F8F8F] w-8 h-8" />
              </div>
              <div className="bg-[#D9D9D9] cursor-pointer rounded-full p-2 w-[51px] justify-center flex">
                <FaTiktok className="text-[#8F8F8F] w-6 h-7" />
              </div>
              <div className="bg-[#D9D9D9] cursor-pointer rounded-full p-2 w-[51px] justify-center flex">
                <FaYoutube className="text-[#8F8F8F] w-8 h-8" />
              </div>
              <div className="bg-[#D9D9D9] cursor-pointer rounded-full p-2 w-[51px] justify-center flex">
                <FaLinkedin className="text-[#8F8F8F] w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[60px]">
          <h1 className="text-accent text-[26px] font-bold">
            Real Estate Pro (20 years experience)
          </h1>
          <p className="text-accent mt-3 text-lg font-medium">
            Specialties: Buyers agent, Listing agent, Foreclosure, Short-Sale
          </p>
          <p className="text-[#5C5C5C] mt-5 text-justify tracking-[-0.324px]">
            I am a Real Estate Agent with a fresh outlook on the housing market.
            I am a full service agent and in 2013 I received international
            Diamond Society Award and recognition for my production. In 2014 I
            received the Sterling society Award again for my production. Then in
            2015 I made the International Presidents Circle. I have the
            experience and awards people look for - But what really sets me
            apart is the service i Provide. I go beyond expectations to help my
            clients make the best decisions for there wants and needs in todays
            market. Give me a call today, you will not regret it.
          </p>
        </div>
        {/* content */}
        <div className="flex flex-col mt-[32px]">
          <p className="text-[26px] font-bold text-accent">
            Listing & Penjualan
          </p>
          <div className="mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.399612563469!2d106.81602410909977!3d-6.210909360808041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4028aa872a3%3A0xa3b116da290c03ef!2sRay%20White%20Indonesia!5e0!3m2!1sen!2sid!4v1719391981791!5m2!1sen!2sid"
              width="100%"
              height="379"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <p className="text-[26px] mt-[42px] font-bold text-accent">
          Properti dijual oleh Maya Ray White
        </p>
        <div className="flex flex-col mt-[22px] gap-[22px]">
          <ListCardSale />
          <ListCardSale />
          <ListCardSale />
        </div>
        <Button className="w-full bg-transparent border py-6 hover:text-white border-primary text-primary mt-[22px]">
          Lihat lebih banyak
        </Button>
        {/* Properti terjual oleh Maya Ray White */}
        <div className="flex flex-col mt-[42px]">
          <p className="text-[26px] font-bold text-accent">
            Properti terjual oleh Maya Ray White
          </p>
          <Table className="mt-8">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[290px] text-[17px] text-accent">
                  Alamat
                </TableHead>
                <TableHead className="text-center text-[17px] text-accent">
                  Tanggal terjual
                </TableHead>
                <TableHead className="text-center text-[17px] text-accent">
                  Harga closing
                </TableHead>
                <TableHead className="text-center text-[17px] text-accent">
                  Represented
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {duplicated.map((sales) => (
                <TableRow key={sales.alamat}>
                  <TableCell className="text-[#5C5C5C] flex items-center gap-2 text-[17px]">
                    <Image
                      src={sales.img}
                      className="rounded-sm"
                      width={86}
                      height={68}
                      alt={sales.alamat}
                    />
                    {sales.alamat}
                  </TableCell>
                  <TableCell className="text-center text-[#5C5C5C] text-[17px]">
                    {sales.tglSold}
                  </TableCell>
                  <TableCell className="text-center text-[#5C5C5C] text-[17px]">
                    {sales.closing}
                  </TableCell>
                  <TableCell className="text-center text-[#5C5C5C] text-[17px]">
                    {sales.represented}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button className="w-full bg-transparent border py-6 hover:text-white border-primary text-primary mt-[22px]">
            Lihat lebih banyak
          </Button>
        </div>
      </section>
      <div
        className="flex-1 p-4 sticky top-4 self-start"
        style={{ flexBasis: '29%' }}>
        <div className="h-full flex flex-col gap-[22px]">
          <div className="flex p-5 items-center gap-[23px] rounded-[10px] border-[3px] border-[#F2F2F2]">
            <div className="w-[108px] bg-[#F2F2F2] p-2 rounded-full h-[108px]">
              <Image src={Raywhite} className="w-full h-full" alt="image" />
            </div>
            <div className="text-accent">
              <p className="text-base">Agen Korporat</p>
              <p className="text-xl font-bold">Ray White Indonesia</p>
            </div>
          </div>
          {/* information */}
          <div className="p-[23px] rounded-[10px] border-[3px] border-[#F2F2F2]">
            <h2 className="text-[22px] text-accent font-bold mb-4">
              Professional Information
            </h2>
            <div className="space-y-4 text-[#5C5C5C] tracking-[-0.32px]">
              <div className="flex">
                <p className="font-semibold w-1/3">Alamat agent:</p>
                <p className="w-2/3">
                  Sahid Sudirman Center level 43. Jl. Jend. Sudirman No.86,
                  Jakarta Pusat, DKI Jakarta Indonesia 10220
                </p>
              </div>
              <div className="flex">
                <p className="font-semibold w-1/3">Nomor telepon:</p>
                <p className="w-2/3">(707) 247-4267</p>
              </div>
              <div className="flex">
                <p className="font-semibold w-1/3">Screenname:</p>
                <p className="w-2/3">Maya prestige</p>
              </div>
              <div className="flex">
                <p className="font-semibold w-1/3">Member since:</p>
                <p className="w-2/3">08/01/2014</p>
              </div>
            </div>
          </div>
          <Button className="w-full flex items-center gap-2 text-lg bg-[#17A759] py-6 hover:bg-green-700">
            <FaWhatsapp className="w-5 h-5 text-white" />
            Hubungi agen
          </Button>
        </div>
      </div>
    </div>
  </main>
);

export default AgenDetail;
