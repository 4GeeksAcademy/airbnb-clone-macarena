"use client";

import Image from "next/image";
import { useState } from "react";

interface RoomGalleryProps {
  title: string;
  images: string[];
}

const RoomGallery = ({ title, images }: RoomGalleryProps) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  return (
    <>
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          src={images[currentPhoto]}
          alt={`${title} ${currentPhoto + 1}`}
          width={1200}
          height={700}
          className="h-[500px] w-full object-cover"
        />
      </div>

      <div className="mt-4 flex justify-between">
        <button
          onClick={() =>
            setCurrentPhoto(
              currentPhoto === 0 ? images.length - 1 : currentPhoto - 1
            )
          }
          className="rounded-lg border px-4 py-2 hover:bg-gray-100"
        >
          ← Anterior
        </button>

        <button
          onClick={() =>
            setCurrentPhoto(
              currentPhoto === images.length - 1 ? 0 : currentPhoto + 1
            )
          }
          className="rounded-lg border px-4 py-2 hover:bg-gray-100"
        >
          Siguiente →
        </button>
      </div>
    </>
  );
};

export default RoomGallery;