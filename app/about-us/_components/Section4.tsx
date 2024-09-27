"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Section4 = () => {
  const [zoomIndex, setZoomIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setZoomIndex((prevIndex) => (prevIndex + 1) % 3); // Loop through 3 images
    }, 2000); // 2 seconds delay

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="pb-10 xl:pb-20">
      <div className="container  flex flex-col gap-5 lg:flex-row gap-y-10 lg:items-center lg:gap-x-10">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className={`w-full lg:w-1/3 transition-transform duration-500 ${
              zoomIndex === i
                ? " scale-115 lg:scale-[1.3]"
                : "scale-100 grayscale"
            }`}
          >
            <Image
              src={`/images/about${i + 1}.png`}
              shop-dine-watch-movie-free
              alt={`our-vision-${i + 1}`}
              width={446}
              height={329}
              quality={80}
              className="w-full aspect-[3/2] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section4;
