import React from 'react';
import HeaderDeveloper from './_components/HeaderDeveloper';
import FaqDeveloper from './_components/FaqDeveloper';

const Developer = () => {
  return (
    <main className="flex flex-col w-full mx-auto max-w-7xl">
      <HeaderDeveloper />
      <FaqDeveloper />
    </main>
  );
};

export default Developer;
