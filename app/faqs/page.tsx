"use client";

import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const FAQS = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const DATA = [
    {
      question: " How Does Mystery Shopping Work?",
      answer:
        "Mystery shopping can be a good job for those who love to shop and have excellent observational skills. Mystery shopping helps companies discover more about the services offered at their locations. Whether you are working",
      id: 1,
    },
    {
      question: "Why Do Companies Use Mystery Shopping?",
      answer:
        "Mystery shopping can be a good job for those who love to shop and have excellent observational skills. Mystery shopping helps companies discover more about the services offered at their locations. Whether you are working",
      id: 2,
    },
    {
      question: "Why Do Companies Use Mystery Shopping?",
      answer:
        "Mystery shopping can be a good job for those who love to shop and have excellent observational skills. Mystery shopping helps companies discover more about the services offered at their locations. Whether you are working",
      id: 3,
    },
    {
      question: "Why Do Companies Use Mystery Shopping?",
      answer:
        "Mystery shopping can be a good job for those who love to shop and have excellent observational skills. Mystery shopping helps companies discover more about the services offered at their locations. Whether you are working",
      id: 4,
    },
    {
      question: "Why Do Companies Use Mystery Shopping?",
      answer:
        "Mystery shopping can be a good job for those who love to shop and have excellent observational skills. Mystery shopping helps companies discover more about the services offered at their locations. Whether you are working",
      id: 5,
    },
    {
      question: "Why Do Companies Use Mystery Shopping?",
      answer:
        "Mystery shopping can be a good job for those who love to shop and have excellent observational skills. Mystery shopping helps companies discover more about the services offered at their locations. Whether you are working",
      id: 5,
    },
  ];
  return (
    <div className="relative">
      <div className="pt-10 xl:pt-20">
        <h1 className="text-center text-[2.6rem] xl:text-[3.625rem] leading-[110%] font-bold text-skin-primary-900">
          Frequently Asked Questions <br />
          <span className="text-skin-secondary-500">Mystery Shoppers</span>
        </h1>
      </div>
      <div className="py-8 container lg:max-w-[544px] xl:py-10 -space-x-2 flex justify-center">
        <input
          placeholder="Search Here"
          className="flex-1  focus:outline-none border-l rounded-[5px] text-base font-light text-skin-neutral-500 px-4  h-[56px] inline-flex border-y border-skin-neutral-600"
        ></input>
        <Button className="h-[56px] border border-skin-primary">Search</Button>
      </div>
      <div className="container pb-10 gap-10  gap-x-0 lg:gap-x-10 grid grid-cols-11">
        <div className="col-span-11 lg:col-span-6">
          <ul>
            {DATA.map((item, i) => (
              <li
                onClick={() => setActiveIndex(item.id)}
                className="cursor-pointer"
                key={i}
              >
                <div
                  //   style={{
                  //     boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.15)",
                  //   }}
                  className={cn(
                    i === 0 && "border-t",
                    "p-4 gap-4 border-b border-black/15 border-x flex items-center"
                  )}
                >
                  <div
                    className={cn(
                      "w-6 h-6 rounded-full ",
                      activeIndex === item.id
                        ? "bg-skin-secondary"
                        : "bg-[#D9ECBF]"
                    )}
                  ></div>
                  <p className="lg:text-base text-sm font-normal text-skin-primary-1000">
                    Why Do Companies Use Mystery Shopping?
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-11 lg:col-span-5">
          <div
            className="py-10 px-8 bg-skin-base-white"
            style={{
              boxShadow: "4px 4px 55px 1px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div>
              <h3 className="text-xl font-bold text-skin-primary-1000">
                Why Do Companies Use Mystery Shopping?
              </h3>
              <div>
                <p className=" pt-5 lg:pt-10 text-base font-normal text-black">
                  Mystery shopping can be a good job for those who love to shop
                  and have excellent observational skills. Mystery shopping
                  helps companies discover more about the services offered at
                  their locations. Whether you are working
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <p className="text-center text-xl  font-normal text-skin-neutral-600">
            Watch this 90 seconds video to know how can FloorWalk help you
            improve your Consumer Experience.
          </p>
        </div>
        <HeroVideoDialog
          className="dark:hidden py-10 block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="/images/video.png"
          thumbnailAlt="Hero Video"
        />
      </div>
      <Image
        src={"/images/faqs-left.png"}
        alt="faqs"
        className=" absolute -z-10 top-0 left-0"
        width={310}
        height={350}
      />
      <Image
        src={"/images/faqs-right.png"}
        alt="faqs"
        className=" -z-10 absolute top-0 right-0"
        width={310}
        height={350}
      />
    </div>
  );
};

export default FAQS;
