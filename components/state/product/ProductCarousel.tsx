import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  "/assets/Sneakers_1.webp",
  "/assets/Sneakers_2.webp",
  "/assets/Sneakers_3.webp",
  "/assets/Sneakers_4.webp",
];

function ProductCarousel() {
  return (
    <Carousel className="w-full h-full object-cover overflow-hidden relative grid place-items-center">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index} className="flex justify-center">
            <Image
              src={src}
              alt={`상품 이미지 ${index + 1}`}
              width={0}
              height={0}
              sizes="100vw"
              className="w-[50%] h-auto"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-10" />
      <CarouselNext className="absolute right-10" />
    </Carousel>
  );
}

export default ProductCarousel;
