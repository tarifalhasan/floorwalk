"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const Section5 = () => {
  const [activeItem, setActiveItem] = useState(1);
  return (
    <section className="container py-10 xl:py-20">
      <div className="space-y-2">
        <h2 className="text-[2rem] leading-[100%] tracking-[1px] capitalize text-center text-skin-primary-1000 font-bold xl:text-[2.5rem]">
          Understand the Concept of Mystery Shopping
        </h2>
        <p className="text-base text-center xl:text-xl text-skin-neutral-600 font-normal font-lato">
          A Comprehensive Guide to Customer Experience Evaluation
        </p>
      </div>
      <div className="pt-8 xl:pt-10 grid lg:grid-cols-2 gap-10">
        <ul className="flex flex-col gap-y-10">
          <li className=" cursor-pointer " onClick={() => setActiveItem(1)}>
            <div
              className={cn(
                "px-6 py-3 rounded-[6px] flex items-center gap-3",
                activeItem === 1 ? "bg-skin-secondary" : ""
              )}
            >
              {activeItem === 1 && (
                <div className="w-[14.25px] rounded-tr-full rounded-br-full bg-white h-[80px]"></div>
              )}
              <div>
                <h4
                  className={cn(
                    "text-xl font-medium capitalize",
                    activeItem === 1 ? "text-white" : "text-skin-primary-1000"
                  )}
                >
                  FloorInsigts
                </h4>
                <p
                  className={cn(
                    "text-sm font-normal font-lato leading-[125%] capitalize",
                    activeItem === 1
                      ? "text-skin-base-white"
                      : "text-skin-primary-1000"
                  )}
                >
                  A comprehensive analytics platform that tracks key customer
                  experience metrics, driving actionable insights for business
                  growth. NPS (Net Promoter Score), Customer Satisfaction
                  Score(CSAT), Customer Effort Score (CES)
                </p>
              </div>
            </div>
          </li>
          <li className=" cursor-pointer " onClick={() => setActiveItem(2)}>
            <div
              className={cn(
                "px-6 py-3 rounded-[6px] flex items-center gap-3",
                activeItem === 2 ? "bg-skin-secondary" : ""
              )}
            >
              {activeItem === 2 && (
                <div className="w-[14.25px] rounded-tr-full rounded-br-full bg-white h-[80px]"></div>
              )}
              <div>
                <h4
                  className={cn(
                    "text-xl font-medium capitalize",
                    activeItem === 2 ? "text-white" : "text-skin-primary-1000"
                  )}
                >
                  FloorWalk Marketplace
                </h4>
                <p
                  className={cn(
                    "text-sm font-normal font-lato leading-[125%] capitalize",
                    activeItem === 2
                      ? "text-skin-base-white"
                      : "text-skin-primary-1000"
                  )}
                >
                  Your one-stop solution for retail insights, empowering
                  businesses to enhance in-store experiences and track product
                  performance.
                </p>
              </div>
            </div>
          </li>{" "}
          <li className=" cursor-pointer " onClick={() => setActiveItem(3)}>
            <div
              className={cn(
                "px-6 py-3 rounded-[6px] flex items-center gap-3",
                activeItem === 3 ? "bg-skin-secondary" : ""
              )}
            >
              {activeItem === 3 && (
                <div className="w-[14.25px] rounded-tr-full rounded-br-full bg-white h-[80px]"></div>
              )}
              <div>
                <h4
                  className={cn(
                    "text-xl font-medium capitalize",
                    activeItem === 3 ? "text-white" : "text-skin-primary-1000"
                  )}
                >
                  Retail Research
                </h4>
                <p
                  className={cn(
                    "text-sm font-normal font-lato leading-[125%] capitalize",
                    activeItem === 3
                      ? "text-skin-base-white"
                      : "text-skin-primary-1000"
                  )}
                >
                  Leverage powerful tools to analyze Brands presence, tailor
                  your strategies, and expand effectively
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div>
          {activeItem === 1 && (
            <div>
              <Image
                src={"/images/FloorInsigts.svg"}
                alt="FloorInsigts"
                width={481}
                height={385}
                className=" block ml-auto"
              />
            </div>
          )}
          {activeItem === 2 && (
            <div>
              {/*  */}

              <Image
                src={"/images/FloorInsights.svg"}
                alt="FloorInsigts"
                width={481}
                height={385}
                className=" block ml-auto"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section5;
