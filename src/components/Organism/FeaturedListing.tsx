import CardFeatured from '../Molecules/CardFeatured';
import { Button } from '../ui/button';

const FeaturedListing: React.FC = () => {
  return (
    <div className="w-full max-w-7xl py-[50px] px-4 md:px-0 mx-auto">
      <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between mb-7 md:items-end">
        <div className="text-[#3A3A3A]">
          <h1 className="text-lg md:text-[32px] font-bold md:tracking-[0.64px]">
            Featured listing di Rumahrealestate
          </h1>
          <p className="mt-[10px] text-lg">
            Temukan berbagai macam properti berkelas di sini
          </p>
        </div>
        <Button className="bg-transparent w-full md:w-auto mt-2 md:mt-0 px-6 text-sm border border-[#D5D5D5] leading-[17px] text-[#F5463A] hover:bg-yellow-500 hover:text-[#3A3A3A] font-medium">
          Lihat Semua Listing
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <CardFeatured />
        <CardFeatured />
        <CardFeatured />
        <CardFeatured />
      </div>
    </div>
  );
};

export default FeaturedListing;
