import CardType from '../Molecules/CardType';
import Beli from '@/assets/icons/beli.svg';
import Jual from '@/assets/icons/jual.svg';
import Sewa from '@/assets/icons/sewa.svg';

const SelectType: React.FC = () => {
  return (
    <div className="bg-[#F2F2F2] w-full flex justify-center mx-auto">
      <div className="grid grid-cols-1 max-w-7xl md:grid-cols-2 lg:grid-cols-3 gap-6 py-16">
        <CardType
          img={Beli}
          title="Beli Rumah"
          desc="Temukan tempat Anda dengan pengalaman foto imersif dan daftar terbanyak, termasuk hal-hal yang tidak akan Anda temukan di tempat lain."
          link="Cari Rumah"
        />
        <CardType
          img={Jual}
          title="Jual Rumah"
          desc="Temukan tempat Anda dengan pengalaman foto imersif dan daftar terbanyak, termasuk hal-hal yang tidak akan Anda temukan di tempat lain."
          link="lihat opsi Anda"
        />
        <CardType
          img={Sewa}
          title="Sewa Rumah"
          desc="Temukan tempat Anda dengan pengalaman foto imersif dan daftar terbanyak, termasuk hal-hal yang tidak akan Anda temukan di tempat lain."
          link="Cari Penyewaan"
        />
      </div>
    </div>
  );
};

export default SelectType;
