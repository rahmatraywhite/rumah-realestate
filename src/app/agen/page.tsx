import React from 'react';
import HeaderAgen from './_components/HeaderAgen';
import SelectCity from './_components/SelectCity';
import ListAgen from './_components/ListAgen';
import FaqAgen from './_components/FaqAgen';

const AgenPage = () => {
  return (
    <main className="flex flex-col w-full mx-auto">
      <HeaderAgen />
      <SelectCity />
      <ListAgen />
      <FaqAgen />
    </main>
  );
};

export default AgenPage;
