import Image from 'next/image';
import { Button } from '../ui/button';
import { CardTypes } from '@/types/type';

const CardType: React.FC<CardTypes> = ({ img, title, desc, link }) => {
  return (
    <div className="flex hover:scale-110 duration-300 bg-[#FFFFFF] rounded-[6px] p-[15px] gap-3 max-w-[305px] flex-col justify-center items-center text-center">
      <Image src={img} alt="image" width={175} height={150} />
      <p className="text-[#3A3A3A] text-xl font-medium">{title}</p>
      <p className="text-sm font-light text-[#8F8F8F]">{desc}</p>
      <Button className="bg-[#FFE512] px-6 font-bold text-xs leading-[17px] text-[#3A3A3A] hover:bg-yellow-500">
        {link}
      </Button>
    </div>
  );
};

export default CardType;
