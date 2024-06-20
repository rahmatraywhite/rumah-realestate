import React from 'react';
import HeaderSearch from './_components/HeaderSearch';
import ResultProperty from './_components/ResultProperty';

const SearchPage = () => {
  return (
    <main className="flex justify-center mx-auto flex-col w-full">
      <HeaderSearch />
      <ResultProperty />
    </main>
  );
};

export default SearchPage;
