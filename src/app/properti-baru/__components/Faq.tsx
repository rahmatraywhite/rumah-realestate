import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Faq: React.FC = () => {
  return (
    <div className="w-full bg-[#D5D5D533] bg-opacity-[20%] gap-4 py-16 max-w-7xl pt-[65px] px-4 md:px-12 mx-auto">
      <p className="text-[36px] font-bold tracking-[0.7px] text-accent mb-6">
        Pertanyaan yang sering ditanyakan
      </p>
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col px-2 gap-4">
        <AccordionItem className="bg-[#fff] px-6 py-[18px]" value="item-1">
          <AccordionTrigger className="text-accent text-xl tracing-[-0.4px] font-bold hover:no-underline">
            Apa keuntungan membeli rumah baru?
          </AccordionTrigger>
          <AccordionContent className="text-[#3c3c43] text-opacity-85 text-lg font-normal leading-6">
            Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="bg-[#fff] px-6 py-[18px]" value="item-2">
          <AccordionTrigger className="text-accent text-xl tracing-[-0.4px] font-bold hover:no-underline">
            Bagaimana cara membeli rumah KPR?
          </AccordionTrigger>
          <AccordionContent className="text-[#3c3c43] text-opacity-85 text-lg font-normal leading-6">
            Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="bg-[#fff] px-6 py-[18px]" value="item-3">
          <AccordionTrigger className="text-accent text-xl tracing-[-0.4px] font-bold hover:no-underline">
            Apa saja biaya membeli rumah?
          </AccordionTrigger>
          <AccordionContent className="text-[#3c3c43] text-opacity-85 text-lg font-normal leading-6">
            Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
