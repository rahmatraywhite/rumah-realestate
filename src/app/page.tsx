import FeaturedListing from '@/components/Organism/FeaturedListing';
import Footer from '@/components/Organism/Footer';
import HeaderHome from '@/components/Organism/HeaderHome';
import HousePopuler from '@/components/Organism/HousePopuler';
import Navbar from '@/components/Organism/Navbar';
import SelectType from '@/components/Organism/SelectType';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <main className="flex flex-col w-full mx-auto">
        <HeaderHome />
        <SelectType />
        <FeaturedListing />
        <HousePopuler />
      </main>
      <Footer />
    </Fragment>
  );
}
