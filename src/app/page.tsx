import MenuHome from '@/components/Molecules/MenuHome';
import FeaturedListing from '@/components/Organism/FeaturedListing';
import HeaderHome from '@/components/Organism/HeaderHome';
import HousePopuler from '@/components/Organism/HousePopuler';
import SelectType from '@/components/Organism/SelectType';

export default function Home() {
  return (
    <main className="flex flex-col w-full mx-auto">
      <HeaderHome />
      <SelectType />
      <FeaturedListing />
      <HousePopuler />
      <MenuHome />
    </main>
  );
}
