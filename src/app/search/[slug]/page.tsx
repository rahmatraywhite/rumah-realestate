import React from 'react';
import HeaderCity from './_components/HeaderCity';
import AboutCity from './_components/AboutCity';
import ResultLocation from './_components/ResultLocation';

interface DeveloperPageProps {
  params: {
    slug: string;
  };
}

const DeveloperPage: React.FC<DeveloperPageProps> = ({ params: { slug } }) => {
  return (
    <main className="w-full flex flex-col">
      <HeaderCity params={{ title: slug }} />
      <AboutCity />
      <ResultLocation />
    </main>
  );
};

export default DeveloperPage;
