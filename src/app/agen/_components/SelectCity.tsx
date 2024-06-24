import React from 'react';
import CardCity from './CardCity';

const SelectCity = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <CardCity />
        <CardCity />
        <CardCity />
        <CardCity />
      </div>
    </div>
  );
};

export default SelectCity;
