import Image from 'next/image'
import Verif from '@/assets/icons/verif1.svg';
import React, { FunctionComponent } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import CardDeveloper from '@/components/Molecules/CardDeveloper';

const OfficialDev: React.FC = () => {
    return (
        <div className="w-full max-w-7xl flex flex-col pb-[50px] px-4 md:px-0 mx-auto">
            <div className="flex bg-[#F2F2F2] w-[335px] items-center justify-center rounded-[17.163px] p-2 gap-1">
                <Image src={Verif} alt="verified developer" />
                <span className="text-[#3A3A3A] text-[27px] font-medium tracking-[0.549px]">
                    Official Developer
                </span>
            </div>
            <Carousel className="w-full mt-[40px] max-w-7xl">
                <CarouselContent className="-ml-1 ">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-1 md:basis-1/3 lg:basis-1/6">
                            <div className="p-1">
                                <CardDeveloper />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default OfficialDev
