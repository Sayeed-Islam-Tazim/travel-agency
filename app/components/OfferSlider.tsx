"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { offers } from "../utils/Navitems";

const OfferSlider = () => {
  return (
    <div className="w-11/12 mx-auto my-2">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="">
          {offers.map((offer) => {
            return (
              <CarouselItem key={offer.key} className="grid grid-cols-3 gap-2">
                <figure className="relative w-70 overflow-hidden rounded-lg cursor-pointer group">
                  <Image
                    src={offer.src}
                    alt="Example"
                    width={80}
                    height={80}
                    className="block w-full h-auto"
                  />
                  <figcaption className="absolute left-0 right-0 bottom-0 top-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(.22,.9,.32,1)] bg-linear-to-t from-black/60 to-transparent text-white">
                    <h3 className="text-sm font-semibold">{offer.title}</h3>
                    <p className="text-xs mt-1 text-white/90">{offer.desc}</p>
                    <Link className="mt-2" href={"/view-details"}>
                      View Details
                    </Link>
                  </figcaption>
                </figure>
              </CarouselItem>
            );
          })}
          {/* <CarouselItem>2</CarouselItem>
          <CarouselItem>3</CarouselItem> */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default OfferSlider;
