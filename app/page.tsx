"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import CategoryFilter from "@/components/CategoryFilter";
import AccommodationCard from "@/components/AccommodationCard";
import { Room } from "@/types/room";

const rooms: Room[] = [
  {
    id: 1,
    title: "Apartamento frente al mar",
    location: "Cancún, México",
    price: 120,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",    
    host: "María",
    guests: 4,
  },
  {
    id: 2,
    title: "Cabaña en la montaña",
    location: "Bariloche, Argentina",
    price: 95,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=1200&auto=format&fit=crop",
    host: "Juan",
    guests: 2,
  },
  {
    id: 3,
    title: "Casa con piscina",
    location: "Punta del Este, Uruguay",
    price: 180,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
    host: "Ana",
    guests: 6,
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Playa");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      <main className="p-6">
        <CategoryFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <h1 className="text-3xl font-bold mb-6">
          Alojamientos que te pueden gustar
        </h1>

        <p className="mb-6 text-gray-600">
          Categoría seleccionada: {activeCategory}
        </p>

        {loading ? (
          <p className="text-lg">Cargando alojamientos...</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {rooms.map((room) => (
              <AccommodationCard key={room.id} room={room} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}