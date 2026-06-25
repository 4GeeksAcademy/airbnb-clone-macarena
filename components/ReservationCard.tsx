import { Minus, Plus, Star } from "lucide-react";

interface ReservationCardProps {
  price: number;
  rating: number;
  guests: number;
  onDecreaseGuests: () => void;
  onIncreaseGuests: () => void;
}

const ReservationCard = ({
  price,
  rating,
  guests,
  onDecreaseGuests,
  onIncreaseGuests,
}: ReservationCardProps) => {
  return (
    <aside className="h-fit rounded-3xl border p-6 shadow-xl lg:sticky lg:top-28">
      <div className="mb-5 flex items-start justify-between">
        <p>
          <span className="text-2xl font-bold">USD {price}</span> noche
        </p>

        <div className="flex items-center gap-1 text-sm">
          <Star size={14} fill="black" />
          <span>{rating}</span>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border">
        <div className="grid grid-cols-2">
          <div className="border-r p-3">
            <p className="text-xs font-bold">LLEGADA</p>
            <p>12/7/2026</p>
          </div>

          <div className="p-3">
            <p className="text-xs font-bold">SALIDA</p>
            <p>17/7/2026</p>
          </div>
        </div>

        <div className="border-t p-3">
          <p className="text-xs font-bold">HUÉSPEDES</p>

          <div className="mt-3 flex items-center justify-between">
            <button
              onClick={onDecreaseGuests}
              className="rounded-full border p-2"
            >
              <Minus size={16} />
            </button>

            <span>{guests} huésped(es)</span>

            <button
              onClick={onIncreaseGuests}
              className="rounded-full border p-2"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>

      <button className="mt-5 w-full rounded-xl bg-rose-500 py-4 font-bold text-white hover:bg-rose-600">
        Reservar
      </button>

      <p className="mt-4 text-center text-sm text-gray-600">
        No se hará ningún cargo por el momento
      </p>
    </aside>
  );
};

export default ReservationCard;