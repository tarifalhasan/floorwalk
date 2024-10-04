"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CASE_STUDIES_DATA = [
  {
    title: "Sales Process and StaffPe rformance Insights",
    category: "Technology",
    slug: "/case-studies/porsche",
    id: 801,
    image: "/images/image100.png",
  },
  {
    title: "Sales Process and StaffPe rformance Insights",
    category: "Technology",
    slug: "/case-studies/porsche",
    id: 802,
    image: "/images/image100.png",
  },
  {
    title: "Sales Process and StaffPe rformance Insights",
    category: "Technology",
    slug: "/case-studies/porsche",
    id: 803,
    image: "/images/image100.png",
  },
  {
    title: "Sales Process and StaffPe rformance Insights",
    category: "Technology",
    slug: "/case-studies/porsche",
    id: 804,
    image: "/images/image100.png",
  },
  {
    title: "Sales Process and StaffPe rformance Insights",
    category: "Technology",
    slug: "/case-studies/porsche",
    id: 805,
    image: "/images/image100.png",
  },
  {
    title: "Sales Process and StaffPe rformance Insights",
    category: "Technology",
    slug: "/case-studies/porsche",
    id: 806,
    image: "/images/image100.png",
  },
];

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState(10);
  const tabs = [
    {
      name: "All Case Studies",
      id: 10,
    },
    {
      name: "Financial Institutes",
      id: 11,
    },
    {
      name: "Online Wedding Services",
      id: 12,
    },
    {
      name: " Automobile",
      id: 13,
    },
    {
      name: " Retail",
      id: 14,
    },
    {
      name: " Entertainment",
      id: 15,
    },
  ];
  return (
    <div>
      <div className="pt-10 space-y-3 container">
        <h2 className="text-center text-[2.6rem] xl:text-[3.625rem] leading-[110%] font-bold text-skin-primary-900 capitalize">
          <span className="text-skin-secondary-500">Floorwalk</span> Case
          studies
        </h2>
        <p className="text-center font-normal leading-[120%] text-skin-neutral-600 text-base xl:text-lg">
          Get Useful Consumer Insights From our Mystery Shoppers.
        </p>
      </div>
      <div className="py-8 container lg:max-w-[544px] xl:py-10 -space-x-2 flex justify-center">
        <input
          placeholder="Search Here"
          className="flex-1  focus:outline-none border-l rounded-[5px] text-base text-skin-neutral-500 px-4  font-bold h-[56px] inline-flex border-y border-skin-neutral-600"
        ></input>
        <Button className="h-[56px] gap-1 border border-skin-primary">
          Search <Search size={20} />
        </Button>
      </div>
      <div className="container ">
        <div className="flex pt-4 justify-center gap-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "inline-flex items-center font-medium border-b-[3px] font-lato gap-3 px-4 py-3 rounded",
                activeTab == tab.id
                  ? "text-skin-primary   border-skin-primary"
                  : "text-skin-neutral-400 border-transparent bg-skin-base-white"
              )}
            >
              <span className="">{tab.name}</span>
            </button>
          ))}
        </div>
        <div className="pt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CASE_STUDIES_DATA.map((item) => (
            <div
              className="p-4 flex flex-col justify-between gap-6 rounded-[5px] border border-skin-secondary-100"
              key={item.id}
            >
              <div>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={360}
                  height={240}
                  quality={80}
                  className="w-full object-cover max-h-[240px]"
                />
              </div>
              <div className="space-y-4 p-2">
                <span className="text-sm font-lato font-bold p-1 bg-skin-primary/5 text-skin-primary rounded-[6px]">
                  {item.category}
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-skin-primary-1000">
                    {item.title}
                  </h2>
                </div>
              </div>
              <div className="flex justify-end">
                <Link href={"case-studies/porsche"}>
                  <Button>Read More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-9 flex justify-center">
          <Button variant={"outline"}>Load More</Button>
        </div>
      </div>
      <div className="container py-10  xl:py-20">
        <div className="space-y-1">
          <h2 className="text-center max-w-[868px] mx-auto text-[1.6rem] xl:text-[2.525rem] leading-[110%] font-bold text-skin-primary-900">
            We are now serving in 22+ countries
          </h2>
        </div>
        <div className="py-10 xl:py-20">
          <Image
            className="block mx-auto"
            src={"/images/Earth.png"}
            quality={80}
            alt="earth"
            width={735}
            height={362}
          />
        </div>
        <div className="flex items-center justify-between gap-8 flex-wrap">
          <div className="flex items-center gap-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={52}
                height={53}
                viewBox="0 0 52 53"
                fill="none"
              >
                <g clipPath="url(#clip0_1_5026)">
                  <path
                    d="M38.9999 17.9385C38.9999 10.7668 33.1716 4.93848 25.9999 4.93848C18.8283 4.93848 12.9999 10.7668 12.9999 17.9385C12.9999 27.6885 25.9999 41.7718 25.9999 41.7718C25.9999 41.7718 38.9999 27.6885 38.9999 17.9385ZM21.6666 17.9385C21.6666 15.5551 23.6166 13.6051 25.9999 13.6051C28.3833 13.6051 30.3333 15.5551 30.3333 17.9385C30.3333 20.3218 28.4049 22.2718 25.9999 22.2718C23.6166 22.2718 21.6666 20.3218 21.6666 17.9385ZM10.8333 43.9385V48.2718H41.1666V43.9385H10.8333Z"
                    fill="#8DC63F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_5026">
                    <rect
                      width={52}
                      height={52}
                      fill="white"
                      transform="translate(0 0.605103)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h4 className="text-xl lg:text-2xl font-medium text-skin-primary-1000">
                22+
              </h4>
              <h6 className="text-sm font-medium font-lato uppercase text-skin-primary-1000">
                Operations Countries
              </h6>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={42}
                viewBox="0 0 48 42"
                fill="none"
              >
                <path
                  d="M30.5001 28.4384H34.8334V21.9384H37.0001V17.6051L34.8334 6.77173H2.33341L0.166748 17.6051V21.9384H2.33341V34.9384H21.8334V21.9384H30.5001V28.4384ZM17.5001 30.6051H6.66675V21.9384H17.5001V30.6051Z"
                  fill="#8DC63F"
                />
                <path
                  d="M34.8335 0.271729H2.3335V4.60506H34.8335V0.271729Z"
                  fill="#8DC63F"
                />
                <path
                  d="M41.3333 30.6051V24.1051H37V30.6051H30.5V34.9384H37V41.4384H41.3333V34.9384H47.8333V30.6051H41.3333Z"
                  fill="#8DC63F"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-xl lg:text-2xl font-medium text-skin-primary-1000">
                5 Lakh+
              </h4>
              <h6 className="text-sm font-medium font-lato uppercase text-skin-primary-1000">
                Mystery Shoppers
              </h6>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={62}
                height={63}
                viewBox="0 0 62 63"
                fill="none"
              >
                <g clipPath="url(#clip0_1_5043)">
                  <path
                    d="M52.6484 22.7443L49.4709 27.5234C51.0032 30.5797 51.7534 33.9684 51.6543 37.3859C51.5551 40.8034 50.6096 44.1428 48.9025 47.1051H13.0975C10.8789 43.2562 9.95955 38.7948 10.4758 34.3823C10.9921 29.9699 12.9165 25.8412 15.9637 22.6084C19.0109 19.3757 23.0187 17.2109 27.393 16.435C31.7673 15.6591 36.2752 16.3134 40.2484 18.3009L45.0275 15.1234C40.1618 12.0033 34.3902 10.6052 28.636 11.1527C22.8818 11.7002 17.4774 14.1616 13.2874 18.1434C9.09735 22.1251 6.36372 27.397 5.52377 33.1159C4.68381 38.8347 5.78606 44.67 8.65421 49.6884C9.10502 50.4693 9.75235 51.1186 10.5319 51.5718C11.3114 52.025 12.1959 52.2663 13.0975 52.2718H48.8767C49.7871 52.2754 50.6823 52.0383 51.4717 51.5847C52.261 51.1311 52.9165 50.4769 53.3717 49.6884C55.7519 45.5652 56.9464 40.8645 56.8234 36.1051C56.7003 31.3458 55.2644 26.7131 52.6742 22.7184L52.6484 22.7443ZM27.3575 40.4143C27.8374 40.8946 28.4072 41.2757 29.0344 41.5357C29.6617 41.7957 30.334 41.9296 31.013 41.9296C31.6919 41.9296 32.3643 41.7957 32.9915 41.5357C33.6187 41.2757 34.1885 40.8946 34.6684 40.4143L49.29 18.4818L27.3575 33.1034C26.8772 33.5833 26.4961 34.1531 26.2361 34.7803C25.9761 35.4075 25.8422 36.0799 25.8422 36.7588C25.8422 37.4378 25.9761 38.1101 26.2361 38.7374C26.4961 39.3646 26.8772 39.9344 27.3575 40.4143Z"
                    fill="#8DC63F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_5043">
                    <rect
                      width={62}
                      height={62}
                      fill="white"
                      transform="translate(0 0.605103)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h4 className="text-xl lg:text-2xl font-medium text-skin-primary-1000">
                Real time
              </h4>
              <h6 className="text-sm font-medium font-lato uppercase text-skin-primary-1000">
                audit tool
              </h6>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={62}
                height={32}
                viewBox="0 0 62 32"
                fill="none"
              >
                <path
                  d="M31 17.5426C35.2108 17.5426 38.9308 18.5501 41.9533 19.8676C44.7433 21.1076 46.5 23.8976 46.5 26.9201V31.1051H15.5V26.9459C15.5 23.8976 17.2567 21.1076 20.0467 19.8934C23.0692 18.5501 26.7892 17.5426 31 17.5426ZM10.3333 18.1884C13.175 18.1884 15.5 15.8634 15.5 13.0218C15.5 10.1801 13.175 7.8551 10.3333 7.8551C7.49167 7.8551 5.16667 10.1801 5.16667 13.0218C5.16667 15.8634 7.49167 18.1884 10.3333 18.1884ZM13.2525 21.0301C12.2967 20.8751 11.3408 20.7718 10.3333 20.7718C7.77583 20.7718 5.3475 21.3143 3.15167 22.2701C1.24 23.0968 0 24.9568 0 27.0493V31.1051H11.625V26.9459C11.625 24.8018 12.2192 22.7868 13.2525 21.0301ZM51.6667 18.1884C54.5083 18.1884 56.8333 15.8634 56.8333 13.0218C56.8333 10.1801 54.5083 7.8551 51.6667 7.8551C48.825 7.8551 46.5 10.1801 46.5 13.0218C46.5 15.8634 48.825 18.1884 51.6667 18.1884ZM62 27.0493C62 24.9568 60.76 23.0968 58.8483 22.2701C56.6525 21.3143 54.2242 20.7718 51.6667 20.7718C50.6592 20.7718 49.7033 20.8751 48.7475 21.0301C49.7808 22.7868 50.375 24.8018 50.375 26.9459V31.1051H62V27.0493ZM31 0.105103C35.2883 0.105103 38.75 3.56677 38.75 7.8551C38.75 12.1434 35.2883 15.6051 31 15.6051C26.7117 15.6051 23.25 12.1434 23.25 7.8551C23.25 3.56677 26.7117 0.105103 31 0.105103Z"
                  fill="#8DC63F"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-xl lg:text-2xl font-medium text-skin-primary-1000">
                500+
              </h4>
              <h6 className="text-sm font-medium font-lato uppercase text-skin-primary-1000">
                Happy Customers
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="py-10  relative lg:py-20 grid lg:grid-cols-2 gap-y-14 lg:gap-y-0">
          <div className="flex  justify-between gap-y-5 flex-col items-center">
            <div className="space-y-3">
              <div className="space-y-2 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M28 16V0H8V8H0V36H16V28H20V36H36V16H28ZM8 32H4V28H8V32ZM8 24H4V20H8V24ZM8 16H4V12H8V16ZM16 24H12V20H16V24ZM16 16H12V12H16V16ZM16 8H12V4H16V8ZM24 24H20V20H24V24ZM24 16H20V12H24V16ZM24 8H20V4H24V8ZM32 32H28V28H32V32ZM32 24H28V20H32V24Z"
                    fill="#007DC1"
                  />
                </svg>
                <span className="text-xl font-bold text-skin-primary tracking-[1px]">
                  For Brand
                </span>
              </div>
              <h2 className="text-[2rem] leading-[100%] tracking-[1px] capitalize text-center text-skin-primary-1000 font-bold xl:text-[2.5rem]">
                Unveiling FloorWalk <br /> Marketplace
              </h2>
              <p className=" max-w-[90%] text-center mx-auto text-base xl:text-xl font-normal text-skin-neutral-600">
                A quicker way to audit your stores. FloorWalk marketplace allows
                you to choose your solution from our product list, setup your
                project, and make it live on-the-go. It allows you to execute
                your smaller straightforward audit and research projects and get
                insights in a jiffy.
              </p>
            </div>
            <div className=" flex flex-col sm:flex-row gap-4 lg:pt-10">
              <Button
                className="gap-3 w-full text-skin-primary border-skin-primary"
                variant={"outline"}
              >
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1_3151"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={24}
                    height={24}
                  >
                    <rect width={24} height={24} fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1_3151)">
                    <path
                      d="M5.4 20L4 18.6L15.6 7H9V5H19V15H17V8.4L5.4 20Z"
                      fill="#007DC1"
                    />
                  </g>
                </svg>
              </Button>
              <Button>Explore Marketplace</Button>
            </div>
          </div>

          <div className="flex gap-y-5   flex-col justify-between items-center">
            <div className="space-y-2">
              <div className="space-y-2 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_3425)">
                    <path
                      d="M30 6H6V9H30V6ZM31.5 21V18L30 10.5H6L4.5 18V21H6V30H21V21H27V30H30V21H31.5ZM18 27H9V21H18V27Z"
                      fill="#007DC1"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_3425">
                      <rect width={36} height={36} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-xl font-bold text-skin-primary tracking-[1px]">
                  For Shopper
                </span>
              </div>
              <h2 className="text-[2rem] leading-[100%] tracking-[1px] capitalize text-center text-skin-primary-1000 font-bold xl:text-[2.5rem]">
                Become a <br />
                Mystery Shopper With Us
              </h2>
              <p className=" max-w-[90%] xl:max-w-[70%] text-center mx-auto text-base xl:text-xl font-normal text-skin-neutral-600">
                Enjoy Free service or earn extra with your side hustle as a
                Mystery shopper.
              </p>
              <p className=" max-w-[90%] xl:max-w-[70%] text-center mx-auto text-base xl:text-xl font-normal text-skin-neutral-600">
                Register as a shopper, Apply For Opportunities, Explore
                different ways to earn.
              </p>
            </div>
            <div className=" flex flex-col sm:flex-row gap-4 lg:pt-10">
              <Button
                className="gap-3 w-full text-skin-primary border-skin-primary"
                variant={"outline"}
              >
                Explore More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1_3151"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={24}
                    height={24}
                  >
                    <rect width={24} height={24} fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1_3151)">
                    <path
                      d="M5.4 20L4 18.6L15.6 7H9V5H19V15H17V8.4L5.4 20Z"
                      fill="#007DC1"
                    />
                  </g>
                </svg>
              </Button>
              <Button>Register as a shopper</Button>
            </div>
          </div>

          <Image
            src={"/images/Line1.png"}
            alt="line"
            width={2}
            height={465}
            className=" lg:block hidden absolute top-[60%] -translate-y-[60%]  left-1/2 -translate-x-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
