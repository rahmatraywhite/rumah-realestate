import React from 'react';
import HeaderSearch from './_components/HeaderSearch';
import ResultProperty from './_components/ResultProperty';
import AllLocation from './_components/AllLocation';

const SearchPage = () => {
  return (
    <main className="flex justify-center mx-auto flex-col w-full">
      <HeaderSearch />
      <ResultProperty />
      <AllLocation />
    </main>
  );
};

export default SearchPage;
