"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import RoomGallery from "@/components/RoomGallery";
import ReservationCard from "@/components/ReservationCard";
import AmenitiesList from "@/components/AmenitiesList";
import HostInfo from "@/components/HostInfo";
import { Room } from "@/types/room";
import {
  Heart,
  Share,
  Star,
} from "lucide-react";

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

const galleryImages = [
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=1200&auto=format&fit=crop",
];

export default function RoomDetailPage() {
  const params = useParams();
  const roomId = Number(params.id);
  const room = rooms.find((item) => item.id === roomId);

  const [loading, setLoading] = useState(true);
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main>
        <Navbar />
        <section className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-lg font-semibold">Cargando alojamiento...</p>
        </section>
      </main>
    );
  }

  if (!room) {
    return (
      <main>
        <Navbar />
        <section className="mx-auto max-w-6xl px-6 py-10">
          <h1 className="text-2xl font-bold">Alojamiento no encontrado</h1>
          <Link href="/" className="mt-4 inline-block underline">
            Volver al inicio
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main>
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <Link
          href="/catalog"
          className="mb-6 inline-block text-sm font-semibold underline"
        >
          ← Volver al catálogo
        </Link>

        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{room.title}</h1>

            <div className="mt-2 flex items-center gap-2 text-sm">
              <Star size={16} fill="black" />
              <span className="font-semibold">{room.rating}</span>
              <span>·</span>
              <span className="underline">204 reseñas</span>
              <span>·</span>
              <span className="underline">{room.location}</span>
            </div>
          </div>

          <div className="hidden gap-4 text-sm font-semibold md:flex">
            <button className="flex items-center gap-2 underline">
              <Share size={16} />
              Compartir
            </button>

            <button className="flex items-center gap-2 underline">
              <Heart size={16} />
              Guardar
            </button>
          </div>
        </div>

        <div className="mb-10">
          <RoomGallery title={room.title} images={galleryImages} />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_370px]">
          <div>
            <section className="border-b pb-8">
              <h2 className="text-2xl font-bold">
                Alojamiento en {room.location}
              </h2>

              <p className="mt-2 text-gray-700">
                {room.guests} huéspedes · 2 habitaciones · 2 camas · 1 baño
              </p>
            </section>

            <HostInfo host={room.host} />

            <AmenitiesList />

            <section className="border-b py-8">
              <h2 className="mb-4 text-2xl font-bold">
                Descripción del alojamiento
              </h2>

              <p className="leading-7 text-gray-700">
                Disfruta de una estadía cómoda en un alojamiento luminoso,
                moderno y bien ubicado. Este espacio está pensado para viajeros
                que buscan comodidad, buena ubicación y una experiencia similar
                a la de Airbnb.
              </p>
            </section>

            <section className="py-8">
              <h2 className="mb-4 text-2xl font-bold">A dónde irás</h2>

              <div className="flex h-80 items-center justify-center rounded-3xl bg-gray-200 text-lg font-semibold text-gray-600">
                Mapa
              </div>
            </section>
          </div>

          <ReservationCard
            price={room.price}
            rating={room.rating}
            guests={guests}
            onDecreaseGuests={() => setGuests(Math.max(1, guests - 1))}
            onIncreaseGuests={() => setGuests(Math.min(10, guests + 1))}
          />
        </div>
      </section>
    </main>
  );
}