import React from 'react';

const AboutCity = () => {
  return (
    <section className="w-full my-[32px] max-w-7xl mx-auto">
      <div className="w-full px-24 py-12 rounded-[10px] bg-[#F2F2F2]">
        <div className="flex flex-col">
          <h1 className="text-accent font-extrabold text-[32px] trackinh-[-0.5px]">
            Discover Your Dream Home in Jakarta
          </h1>
          <p className="text-[#5c5c5c] mt-3 text-2xl font-medium tracking-[-0.5px]">
            Welcome to Rumahrealestate – Where Luxury Meets Convenience in the
            Heart of Jakarta!
          </p>
        </div>
        <div className="flex flex-col mt-[37px]">
          <p className="text-accent font-bold text-[22px]">Prime Location</p>
          <p className="text-[#5c5c5c] mt-3 text-[22px] font-light tracking-[-0.44px]">
            Nestled in the vibrant heart of Jakarta, Urban Oasis Residences
            offers unparalleled access to the city bustling business districts,
            premium shopping centers, top-rated schools, and gourmet dining.
            Embrace the convenience of living where everything is just a step
            away.
          </p>
        </div>
        <div className="flex flex-col mt-[37px]">
          <p className="text-accent font-bold text-[22px]">
            Luxurious Living Spaces
          </p>
          <p className="text-[#5c5c5c] mt-3 text-[22px] font-light tracking-[-0.44px]">
            Step into a world of elegance and comfort with our meticulously
            designed living spaces. From stylish studios to expansive
            penthouses, each unit is crafted to offer the perfect blend of
            modern sophistication and homely warmth. Enjoy breathtaking city
            views, high-end finishes, and thoughtfully integrated smart home
            technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCity;
