"use client";

import Marquee from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
const filters = [
  {
    title: "All Clients",
    value: "all",
  },
  {
    title: "Automobile",
    value: "automobile",
  },
  {
    title: "Aftermarket Industry",
    value: "aftermarket_industry",
  },
  {
    title: "Appa rel Retail",
    value: "appa_rel_retail",
  },
  {
    title: "Aviation, Hospitality & Travel Management",
    value: "Aviation_Hospitality_Travel_Management",
  },
  {
    title: "Banking",
    value: "banking",
  },
  {
    title: "Consulting ",
    value: "consulting ",
  },
];

const clients = [
  {
    imgSrc: "/images/clients/amazon.png",
    tag: ["banking"],
  },
  {
    imgSrc: "/images/clients/hyundai.png",
    tag: ["banking"],
  },
  {
    imgSrc: "/images/clients/shaadi.png",
    tag: ["banking"],
  },
  {
    imgSrc: "/images/clients/vivo.png",
    tag: ["banking"],
  },
  {
    imgSrc: "/images/clients/garmin.png",
    tag: ["banking"],
  },
  {
    imgSrc: "/images/clients/oyo.png",
    tag: ["banking"],
  },
  {
    imgSrc: "/images/clients/pwc.png",
    tag: ["banking"],
  },
  {
    imgSrc: "/images/clients/cars24.png",
    tag: ["banking"],
  },
  {
    imgSrc: "/images/clients/whitehatjs.png",
    tag: ["banking"],
  },
  {
    imgSrc: "/images/clients/whitehatjs.png",
    tag: ["banking"],
  },
  {
    imgSrc: "/images/clients/whitehatjs.png",
    tag: ["banking"],
  },
  {
    imgSrc: "/images/clients/manyyavar.png",
    tag: ["banking"],
  },
  {
    imgSrc: "/images/clients/garmin.png",
    tag: ["banking"],
  },
  {
    imgSrc: "/images/clients/jmc.png",
    tag: ["banking"],
  },
  {
    imgSrc: "/images/clients/hyundai.png",
    tag: ["banking"],
  },
  {
    imgSrc: "/images/clients/shaadi.png",
    tag: ["banking"],
  },
  {
    imgSrc: "/images/clients/vivo.png",
    tag: ["banking"],
  },
  {
    imgSrc: "/images/clients/garmin.png",
    tag: ["banking"],
  },
];

const margue1 = [
  {
    imgSrc: "/images/clients/amazon.png",
  },
  {
    imgSrc: "/images/chat-analytics.png",
  },
  {
    imgSrc: "/images/Caratlane-logo.bf829ec2f99735cf784d.png",
  },
  {
    imgSrc: "/images/clients/shaadi.png",
  },
  {
    imgSrc: "/images/clients/cars24.png",
  },
];

const margue2 = [
  {
    imgSrc: "/images/clients/pwc.png",
  },
  {
    imgSrc: "/images/clients/oyo.png",
  },
  {
    imgSrc: "/images/clients/garmin.png",
  },
  {
    imgSrc: "/images/clients/whitehatjs.png",
  },
  {
    imgSrc: "/images/tci.png",
  },
];

const IndustriesAndClientsWeserve = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="lg:py-10 py-4 container">
      <div>
        {/* <div className="bg-[url('/images/IndustriesAndClientsWeserve1.png')] bg-contain   bg-center pb-[8%] bg-no-repeat opacity-30 w-full"></div> */}
        <Marquee className="[--duration:10s] bg-white">
          {margue2.map((item, i) => (
            <div key={i} className="w-[10%] opacity-20  sm:w-[12%]  ">
              <Image
                width={200}
                height={115}
                className="object-contain w-full h-full"
                src={item.imgSrc}
                alt="dsfdf"
              />
            </div>
          ))}
        </Marquee>
        <div className="space-y-2">
          <h1 className="text-center max-w-[868px] mx-auto text-[2.6rem] xl:text-[3.625rem] leading-[110%] font-bold text-skin-primary-900">
            <span className="text-skin-secondary-500"> Industries</span> &
            <span className="text-skin-secondary-500"> Clients </span>We serve
          </h1>
          <p className="text-center font-normal leading-[120%] text-skin-neutral-600 text-base xl:text-lg">
            We are now serving in 22+ countries
          </p>
        </div>
        <Marquee reverse className="[--duration:10s] bg-white">
          {margue1.map((item, i) => (
            <div key={i} className="w-[10%] sm:w-[12%]  ">
              <Image
                width={200}
                height={115}
                className="object-contain opacity-20 w-full h-full"
                src={item.imgSrc}
                alt="dsfdf"
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="pt-10 flex flex-col lg:grid grid-cols-12 gap-y-10 lg:gap-y-0 lg:gap-x-10">
        <div
          style={{
            boxShadow: "4px 4px 55px 0px rgba(0, 0, 0, 0.12)",
          }}
          className="col-span-12 lg:min-h-[800px] lg:col-span-4  bg-skin-base-white rounded-[5px] p-5 flex flex-col space-y-2"
        >
          <div>
            <h3 className="text-xl font-medium uppercase text-skin-neutral-800">
              Our Clients
            </h3>
          </div>
          <div className="pt-4">
            {filters.map((item) => (
              <button
                className={cn(
                  "text-lg block text-left font-medium py-[10px]",
                  activeFilter === item.value
                    ? "text-skin-primary"
                    : "text-skin-neutral-400"
                )}
                onClick={() => setActiveFilter(item.value)}
                key={item.value}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className=" flex flex-wrap    gap-8  ">
            {clients.map((item) => (
              <div
                style={{
                  boxShadow: "4px 4px 55px 0px rgba(0, 0, 0, 0.06)",
                }}
                className="grow"
                key={item.imgSrc}
              >
                <Image
                  className=""
                  src={item.imgSrc}
                  alt="dfdfdf"
                  width={200}
                  height={90}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-6 lg:pt-10">
            <Button variant={"outline"}>Load More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesAndClientsWeserve;
