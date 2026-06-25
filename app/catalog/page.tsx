"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import AccommodationCard from "@/components/AccommodationCard";
import { Room } from "@/types/room";

const rooms: Room[] = [
  {
    id: 1,
    title: "Apartamento frente al mar",
    location: "Cancún, México",
    price: 120,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
    host: "María",
    guests: 4,
  },
  {
    id: 2,
    title: "Cabaña en la montaña",
    location: "Bariloche, Argentina",
    price: 95,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=1200&auto=format&fit=crop",
    host: "Juan",
    guests: 2,
  },
  {
    id: 3,
    title: "Casa con piscina",
    location: "Punta del Este, Uruguay",
    price: 180,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
    host: "Ana",
    guests: 6,
  },
];

export default function CatalogPage() {
  const [ascending, setAscending] = useState(true);

  const sortedRooms = [...rooms].sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );

  return (
    <main>
      <Navbar />

      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <h1 className="text-3xl font-bold">
            Resultados encontrados: {rooms.length}
          </h1>

          <button
            onClick={() => setAscending(!ascending)}
            className="border rounded-lg px-4 py-2"
          >
            Ordenar por precio:
            {ascending ? " Ascendente ↑" : " Descendente ↓"}
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {sortedRooms.map((room) => (
                <AccommodationCard
                  key={room.id}
                  room={room}
                />
              ))}
            </div>
          </div>

          <div className="sticky top-28 hidden h-[calc(100vh-8rem)] items-center justify-center rounded-3xl bg-gray-200 text-lg font-semibold text-gray-600 md:flex">
            Mapa
          </div>
        </div>
      </div>
    </main>
  );
}