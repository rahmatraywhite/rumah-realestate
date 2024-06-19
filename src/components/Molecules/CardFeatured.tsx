import Image from 'next/image';
import Featured from '@/assets/featured.png';
import Tag from '@/assets/icons/tag-rwi.svg';
import Verif from '@/assets/icons/verif.svg';
import { Heart, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '@/components/ui/badge';

const CardFeatured: React.FC = () => {
  return (
    <div className="flex flex-col relative px-2 py-3 rounded-sm bg-[#eaeaea]">
      <Image src={Featured} alt="image" className="w-full" height={180} />
      <Badge className="mt-2 left-5 top-5 absolute text-[9px] flex gap-1 bg-[#EE4336] hover:bg-[#EE4336] px-2">
        <Image src={Verif} alt="image" width={16} height={16} />
        Featured
      </Badge>
      <div className="flex px-2 mt-6 justify-between items-center">
        <h2 className="text-[#3A3A3A] text-2xl font-bold leading-[27px]">
          Rp. 75 Miliyar
        </h2>
        <Button className="flex p-2 bg-transparent hover:bg-transparent items-center justify-center rounded-full border-2 border-[#D5D5D5]">
          <Heart size={20} className="text-[#BABABA] hover:text-[#EE4336]" />
        </Button>
      </div>
      <p className="text-[#8F8F8F] px-2 my-2 font-bold leading-[27px]">
        Georgeus Villa Bay
      </p>
      <div className="flex px-2 items-center mb-4 gap-[6px]">
        <MapPin size={20} className="text-[#8F8F8F]" />
        <p className="text-[#8F8F8F]  text-xs leading-[27px]">
          Bali seminyak, Indonesia
        </p>
      </div>
      <div className="flex px-2 justify-between items-center">
        <p className="text-xs text-[#333333] text-opacity-50">
          Diperbaharui 2 hari lalu
        </p>
        <Image src={Tag} alt="image" width={66} height={11} />
      </div>
    </div>
  );
};

export default CardFeatured;
