import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialsDATA = [
  {
    authorName: "Viral Sayan",
    location: "Kolkata",
    avatarUrl: "/images/Avatar.png",
    whatSay:
      "FloorWalk has been a very professional company and I have enjoyed doing the audits. The pay is good compared to others and the staff has been superbly cooperative. Happy to be a part of the team. Looking forward to a more stronger bond.",
  },
  {
    authorName: "Viral Sayan",
    location: "Kolkata",
    avatarUrl: "/images/Avatar.png",
    whatSay:
      "FloorWalk has been a very professional company and I have enjoyed doing the audits. The pay is good compared to others and the staff has been superbly cooperative. Happy to be a part of the team. Looking forward to a more stronger bond.",
  },
  {
    authorName: "Viral Sayan",
    location: "Kolkata",
    avatarUrl: "/images/Avatar.png",
    whatSay:
      "FloorWalk has been a very professional company and I have enjoyed doing the audits. The pay is good compared to others and the staff has been superbly cooperative. Happy to be a part of the team. Looking forward to a more stronger bond.",
  },
];

const ShopperTestimonials = () => {
  return (
    <section className="py-10 xl:py-20 relative  container">
      <div>
        <h2 className="text-[2rem] leading-[100%] tracking-[1px] capitalize text-center text-skin-primary-1000 font-bold xl:text-[2.5rem]">
          Shopper Testimonials
        </h2>
      </div>
      <div className="pt-10">
        <Carousel>
          <CarouselContent>
            {TestimonialsDATA.map((data, index) => {
              const centerIndex = Math.floor(TestimonialsDATA.length / 2); // Calculate center index

              return (
                <CarouselItem key={index} className="basis-full lg:basis-1/3">
                  <div
                    style={{
                      background:
                        index === centerIndex
                          ? "#E7F5E8"
                          : "rgba(215, 241, 255, 0.25)",
                    }}
                    className={cn("px-10 space-y-3 py-11 rounded-[24px]")}
                  >
                    <div className="flex items-center gap-1">
                      <Avatar>
                        <AvatarImage src={data.avatarUrl} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-lg font-semibold text-skin-gray-900">
                          {data.authorName}
                        </h4>
                        <p className="text-sm font-semibold text-skin-gray-700">
                          {data.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg font-normal text-skin-gray-900">
                      {data.whatSay}
                    </p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="flex pt-8 justify-center gap-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ShopperTestimonials;
