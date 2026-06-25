import {
  Bath,
  BedDouble,
  Car,
  CookingPot,
  Tv,
  Wifi,
} from "lucide-react";

const AmenitiesList = () => {
  return (
    <section className="border-b py-8">
      <h2 className="mb-5 text-2xl font-bold">
        Lo que este lugar ofrece
      </h2>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex items-center gap-4">
          <Wifi size={24} />
          <span>Wifi</span>
        </div>

        <div className="flex items-center gap-4">
          <CookingPot size={24} />
          <span>Cocina</span>
        </div>

        <div className="flex items-center gap-4">
          <Car size={24} />
          <span>Estacionamiento gratuito</span>
        </div>

        <div className="flex items-center gap-4">
          <Tv size={24} />
          <span>Televisor</span>
        </div>

        <div className="flex items-center gap-4">
          <BedDouble size={24} />
          <span>Zona de trabajo privada</span>
        </div>

        <div className="flex items-center gap-4">
          <Bath size={24} />
          <span>Baño privado</span>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesList;