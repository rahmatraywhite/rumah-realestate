import Offical_dev from './__components/OfficialDev';
import Housing_new from './__components/HousingNew';
import ByCity from './__components/ByCity';
import React from 'react';
import Faq from './__components/Faq';
import InfoProperty from './__components/InfoProperty';
import HeaderNewProperty from './__components/Header';
import Populer from './__components/Populer';

const PropertiBaru: React.FC = () => {

  return (
    <main className="flex flex-col w-full">
      <HeaderNewProperty />
      <Offical_dev />
      <Populer />
      <Housing_new />
      <ByCity />
      <Faq />
      <InfoProperty />
    </main>
  );
};

export default PropertiBaru;
