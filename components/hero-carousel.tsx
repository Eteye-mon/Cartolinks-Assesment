"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselItems = [
  {
    id: 1,
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    buttonText: "Try WAN 2.2",
    backgroundImage: "/landscape-with-girl.jpg",
    badge: "NEW IMAGE MODEL",
  },
  {
    id: 2,
    title: "Open Sour",
    subtitle: "FLUX.1 Krea",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    buttonText: "Open",
    backgroundImage: "/whiskey-bottle.jpg",
    badge: "FLUX MODEL",
  },
  {
    id: 3,
    title: "Krea Open Source",
    subtitle: "FLUX.1 Krea",
    description:
      "We’re making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    buttonText: "Learn More",
    backgroundImage: "/house1.jpg",
    badge: "OPEN SOURCE MODEL",
  },
  {
    id: 4,
    title: "FLUX.1 Pro Studio",
    subtitle: "Pro Model for Creators",
    description:
      "Unlock the full creative potential with FLUX.1 Pro — designed for artists, developers, and teams who need advanced image generation capabilities.",
    buttonText: "Try FLUX.1 Pro",
    backgroundImage: "/house2.jpg",
    badge: "PREMIUM MODEL",
  },
  {
    id: 5,
    title: "WAN Vision 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    buttonText: "Try WAN 2.2",
    backgroundImage: "/house3.jpg",
    badge: "NEW IMAGE MODEL",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <section className="ps-4 sm:ps-6 lg:ps-8 py-8">
      <div className="ps-4 sm:ps-6 lg:ps-8">
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {carouselItems.map((item, index) => {
              const isActive = index === currentSlide;
              const isNext =
                index === (currentSlide + 1) % carouselItems.length;

              return (
                <Card
                  key={item.id}
                  className={`relative overflow-hidden transition-all duration-500 h-[450px] ${
                    isActive
                      ? "opacity-100 flex-[0_0_60%]"
                      : isNext
                      ? "opacity-70 flex-[0_0_45%]"
                      : "opacity-0 hidden overflow-hidden"
                  }`}
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="relative w-full max-w-6xl h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 text-white">
                      <p className="uppercase text-xs md:text-sm tracking-widest font-medium opacity-80">
                        {item.badge}
                      </p>
                      <h1 className="text-4xl md:text-[80px] font-bold text-center">
                        {item.title}
                      </h1>
                      <div className="flex flex-col gap-4">
                        <p className="text-[16px] font-bold md:text-base  opacity-90">
                          {item.subtitle}
                        </p>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <p className="text-[12px] md:text-white/50 max-w-2xl text-accent-foreground w-md">
                            {item.description}
                          </p>

                          {isActive && (
                            <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition whitespace-nowrap">
                              Learn More
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="absolute mt-3 md:right-14 right-4  flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="bg-[#f6f6f6] hover:bg-white/20 text-gray-900 backdrop-blur-sm rounded-full cursor-pointer"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-[#f6f6f6] hover:bg-white/20 text-gray-900 backdrop-blur-sm rounded-full cursor-pointer"
              onClick={nextSlide}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide
                    ? "bg-foreground"
                    : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
