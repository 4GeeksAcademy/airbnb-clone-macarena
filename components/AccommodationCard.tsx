import { Room } from "@/types/room";

interface AccommodationCardProps {
  room: Room;
}

const AccommodationCard = ({ room }: AccommodationCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <div className="bg-gray-300 h-48 flex items-center justify-center">
        Imagen
      </div>

      <div className="p-4">
        <h3 className="font-semibold">{room.title}</h3>
        <p className="text-gray-600">{room.location}</p>

        <div className="flex justify-between mt-2">
          <span>${room.price} / noche</span>
          <span>⭐ {room.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard;