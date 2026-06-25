import Link from "next/link";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { Room } from "@/types/room";

interface AccommodationCardProps {
  room: Room;
}

const AccommodationCard = ({ room }: AccommodationCardProps) => {
  return (
    <Link href={`/rooms/${room.id}`} className="block">
      <article className="group cursor-pointer">
        <div className="relative h-64 overflow-hidden rounded-3xl bg-gray-200">
          <Image
            src={room.image}
            alt={room.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />

          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/80 p-2 shadow-sm hover:bg-white"
          >
            <Heart size={22} />
          </button>

          <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow">
            Favorito entre huéspedes
          </span>
        </div>

        <div className="mt-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-semibold text-gray-900">
              {room.title}
            </h3>

            <div className="flex items-center gap-1 text-sm">
              <Star size={15} fill="black" />
              <span>{room.rating}</span>
            </div>
          </div>

          <p className="text-sm text-gray-500">{room.location}</p>

          <p className="text-sm text-gray-500">
            12–17 jul
          </p>

          <p className="mt-1 text-sm">
            <span className="font-semibold">
              ${room.price}
            </span>{" "}
            por noche
          </p>
        </div>
      </article>
    </Link>
  );
};

export default AccommodationCard;