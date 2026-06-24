"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Room } from "@/types/room";

const rooms: Room[] = [
  {
    id: 1,
    title: "Apartamento frente al mar",
    location: "Cancún, México",
    price: 120,
    rating: 4.8,
    image: "",
    host: "María",
    guests: 4,
  },
  {
    id: 2,
    title: "Cabaña en la montaña",
    location: "Bariloche, Argentina",
    price: 95,
    rating: 4.9,
    image: "",
    host: "Juan",
    guests: 2,
  },
  {
    id: 3,
    title: "Casa con piscina",
    location: "Punta del Este, Uruguay",
    price: 180,
    rating: 4.7,
    image: "",
    host: "Ana",
    guests: 6,
  },
];

export default function RoomDetailPage() {
  const params = useParams();
  const roomId = Number(params.id);

  const room = rooms.find((item) => item.id === roomId);

  const [loading, setLoading] = useState(true);
  const [guests, setGuests] = useState(1);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = ["Foto 1", "Foto 2", "Foto 3", "Foto 4"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main className="p-10">
        <h1 className="text-2xl font-bold">Cargando alojamiento...</h1>
      </main>
    );
  }

  if (!room) {
    return (
      <main>
        <Navbar />
        <div className="p-6">
          <h1 className="text-2xl font-bold">Alojamiento no encontrado</h1>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{room.title}</h1>

        <div className="bg-gray-300 h-80 rounded-lg flex items-center justify-center mb-4">
          {photos[currentPhoto]}
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() =>
              setCurrentPhoto(
                currentPhoto === 0 ? photos.length - 1 : currentPhoto - 1
              )
            }
            className="border px-4 py-2 rounded"
          >
            Anterior
          </button>

          <button
            onClick={() =>
              setCurrentPhoto(
                currentPhoto === photos.length - 1 ? 0 : currentPhoto + 1
              )
            }
            className="border px-4 py-2 rounded"
          >
            Siguiente
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold">
            ⭐ {room.rating} · 204 reseñas
          </h2>

          <p className="text-gray-600">{room.location}</p>
        </div>

        <div className="mb-8 border-t pt-6">
          <h2 className="text-xl font-semibold mb-2">Anfitrión</h2>
          <p>{room.host} · 5 años como anfitrión/a</p>
        </div>

        <div className="mb-8 border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Servicios</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>📶 WiFi</div>
            <div>🏊 Piscina</div>
            <div>🚗 Estacionamiento</div>
            <div>🍳 Cocina</div>
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Reserva</h2>

          <p className="mb-4">USD {room.price} por noche</p>

          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => setGuests(Math.max(1, guests - 1))}
              className="border px-3 py-1 rounded"
            >
              -
            </button>

            <span>{guests} huésped(es)</span>

            <button
              onClick={() => setGuests(Math.min(10, guests + 1))}
              className="border px-3 py-1 rounded"
            >
              +
            </button>
          </div>

          <button className="bg-rose-500 text-white px-6 py-3 rounded-lg">
            Reservar
          </button>
        </div>
      </div>
    </main>
  );
}