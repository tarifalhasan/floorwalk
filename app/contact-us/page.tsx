"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ContactUs = () => {
  const [activeFaq, setActiveFaq] = useState(1);
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
  ];
  return (
    <div className="relative">
      <div className="pt-10 xl:pt-20">
        <h1 className="text-center text-[2.6rem] xl:text-[3.625rem] leading-[110%] font-bold text-skin-primary-900">
          Contact Us
        </h1>
        <h4 className="text-center max-w-[812px] mx-auto text-lg text-skin-neutral-800">
          Whether you&apos;re a mystery shopper, client, or agency, we&apos;re
          here to assist. Fill out the form, and we&apos;ll get back to you
          quickly. Let&apos;s enhance customer experiences and retail audits
          together
        </h4>
      </div>
      <div className="container ">
        <div className="grid sm:grid-cols-2 gap-y-24 pt-[9rem] lg:pt-24 lg:grid-cols-3 gap-10">
          <div
            className="bg-skin-base-white  flex flex-col justify-between  space-y-2 rounded-[10px]"
            style={{
              boxShadow: "4px 4px 44px 0px rgba(0, 0, 0, 0.12)",
            }}
          >
            <div>
              <Image
                src={"/images/people2.png"}
                alt="people"
                width={305}
                height={244}
                className=" max-w-[305px] max-h-[244px] object-contain block mx-auto -mt-16"
              />
            </div>
            <div className="px-5 py-6 text-center space-y-2">
              <div>
                <h3 className="text-xl xl:text-2xl text-center font-extrabold leading-[116%] text-skin-primary-1000">
                  <span className="text-skin-secondary font-medium">I AM </span>
                  <br /> AMYSTERY SHOPPER
                </h3>
              </div>
              <p className="text-center text-lg font-normal text-skin-neutral-800">
                I want to shop for free
              </p>
              <p className="text-lg font-normal text-skin-neutral-400 text-center">
                Sign Up on our online portal to see available opportunities
              </p>
            </div>
            <div className="px-5 pb-6">
              <Button
                className="gap-3 w-full text-skin-primary border-skin-primary"
                variant={"outline"}
              >
                Sign Up For Free
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
            </div>
          </div>
          <div
            className="bg-skin-base-white flex flex-col justify-between  space-y-2 rounded-[10px]"
            style={{
              boxShadow: "4px 4px 44px 0px rgba(0, 0, 0, 0.12)",
            }}
          >
            <div>
              <Image
                src={"/images/imclient.png"}
                alt="people"
                width={305}
                height={244}
                className=" max-w-[305px] max-h-[244px] object-contain block mx-auto -mt-24"
              />
            </div>
            <div className="px-5 py-6 text-center space-y-2">
              <div>
                <h3 className="text-xl xl:text-2xl text-center font-extrabold leading-[116%] text-skin-primary-1000">
                  <span className="text-skin-secondary font-medium">I AM </span>
                  <br /> CLIENT
                </h3>
              </div>
              <p className="text-center text-lg font-normal text-skin-neutral-800">
                I want to get my stores audited
              </p>
              <p className="text-lg font-normal text-skin-neutral-400 text-center">
                Tell us a few things about you and we will get to you ASAP
              </p>
            </div>
            <div className="px-5 pb-6">
              <Button className="gap-2 w-full ">
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.08 14.82 15.69 14.9 15.41 15.17L13.21 17.37C10.38 15.93 8.06 13.62 6.62 10.78L8.82 8.57C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5ZM21 6H18V3H16V6H13V8H16V11H18V8H21V6Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div
            className="bg-skin-base-white  flex flex-col justify-between  space-y-2 rounded-[10px]"
            style={{
              boxShadow: "4px 4px 44px 0px rgba(0, 0, 0, 0.12)",
            }}
          >
            <div>
              <Image
                src={"/images/imanagency.png"}
                alt="people"
                width={305}
                height={270}
                className=" max-w-[305px] max-h-[244px] object-contain block mx-auto -mt-24"
              />
            </div>
            <div className="px-5 py-6 text-center space-y-2">
              <div>
                <h3 className="text-xl xl:text-2xl text-center font-extrabold leading-[116%] text-skin-primary-1000">
                  <span className="text-skin-secondary font-medium">
                    I AM AN
                  </span>
                  <br /> AGENCY
                </h3>
              </div>
              <p className="text-center text-lg font-normal text-skin-neutral-800">
                I am interested in a professional tie-up
              </p>
              <p className="text-lg font-normal text-skin-neutral-400 text-center">
                Please fill up the form and let us work together
              </p>
            </div>
            <div className="px-5 pb-6">
              <Button
                className="gap-3 w-full text-skin-primary border-skin-primary"
                variant={"outline"}
              >
                Register As a Agent
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
            </div>
          </div>
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
      <div className="bg-skin-primary">
        <div className="container py-10 xl:py-20">
          <div className="flex items-center flex-wrap gap-3">
            <div className="max-w-[272px]">
              <h4 className="text-4xl font-bold text-skin-base-white">
                Get in touch with FloorWalk
              </h4>
            </div>
            <div className="flex-1">
              <p className="text-xl font-normal text-white">
                We are committed to ensuring that your privacy is protected.
                Should we ask you to provide certain information by which you
                can be identified when using this website, you can be assured
                that it will only be used in accordance with this privacy
                statement.
              </p>
            </div>
          </div>
          <div className="flex pt-6 justify-center flex-wrap gap-6">
            <div className="">
              <div>
                <h3 className="text-xl font-bold text-white">Head Office</h3>
              </div>
              <div className="pt-2 space-y-5">
                <div className="flex  items-start gap-2">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22.605C11.7667 22.605 11.5667 22.5383 11.4 22.405C11.2333 22.2716 11.1083 22.0966 11.025 21.88C10.7083 20.9466 10.3083 20.0716 9.825 19.255C9.35833 18.4383 8.7 17.48 7.85 16.38C7 15.28 6.30833 14.23 5.775 13.23C5.25833 12.23 5 11.0216 5 9.60498C5 7.65498 5.675 6.00498 7.025 4.65498C8.39167 3.28831 10.05 2.60498 12 2.60498C13.95 2.60498 15.6 3.28831 16.95 4.65498C18.3167 6.00498 19 7.65498 19 9.60498C19 11.1216 18.7083 12.3883 18.125 13.405C17.5583 14.405 16.9 15.3966 16.15 16.38C15.25 17.58 14.5667 18.58 14.1 19.38C13.65 20.1633 13.275 20.9966 12.975 21.88C12.8917 22.1133 12.7583 22.2966 12.575 22.43C12.4083 22.5466 12.2167 22.605 12 22.605ZM12 12.105C12.7 12.105 13.2917 11.8633 13.775 11.38C14.2583 10.8966 14.5 10.305 14.5 9.60498C14.5 8.90498 14.2583 8.31331 13.775 7.82998C13.2917 7.34665 12.7 7.10498 12 7.10498C11.3 7.10498 10.7083 7.34665 10.225 7.82998C9.74167 8.31331 9.5 8.90498 9.5 9.60498C9.5 10.305 9.74167 10.8966 10.225 11.38C10.7083 11.8633 11.3 12.105 12 12.105Z"
                      fill="#FAFAFA"
                    />
                  </svg>
                  <p className="max-w-[300px] text-base font-bold text-white font-lato">
                    FloorWalk Consultants Pvt Ltd. AltF Empire Square, MR-I,
                    Unit 1, 3rd Floor, JMD Empire Square Near Sikanderpur Metro
                    Station, Opp. Metro Pillar No. 71, MG Road Gurugram, Haryana
                    -122002
                  </p>
                </div>
                <div className="flex  items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={25}
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_7528)">
                      <path
                        d="M10 17.605L15 12.605L10 7.60498V17.605Z"
                        fill="#FAFAFA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_7528">
                        <rect
                          width={24}
                          height={24}
                          fill="white"
                          transform="translate(0 0.60498)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <p className="max-w-[300px] font-bol\ text-base font-bold text-white font-lato">
                    <a
                      className="underline"
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click here
                    </a>{" "}
                    if want to conduct audits for your tore.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div>
                <h3 className="text-xl font-bold text-white">Branch Offices</h3>
              </div>
              <div className="pt-2 space-y-5">
                <div className="flex  items-start gap-2">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22.605C11.7667 22.605 11.5667 22.5383 11.4 22.405C11.2333 22.2716 11.1083 22.0966 11.025 21.88C10.7083 20.9466 10.3083 20.0716 9.825 19.255C9.35833 18.4383 8.7 17.48 7.85 16.38C7 15.28 6.30833 14.23 5.775 13.23C5.25833 12.23 5 11.0216 5 9.60498C5 7.65498 5.675 6.00498 7.025 4.65498C8.39167 3.28831 10.05 2.60498 12 2.60498C13.95 2.60498 15.6 3.28831 16.95 4.65498C18.3167 6.00498 19 7.65498 19 9.60498C19 11.1216 18.7083 12.3883 18.125 13.405C17.5583 14.405 16.9 15.3966 16.15 16.38C15.25 17.58 14.5667 18.58 14.1 19.38C13.65 20.1633 13.275 20.9966 12.975 21.88C12.8917 22.1133 12.7583 22.2966 12.575 22.43C12.4083 22.5466 12.2167 22.605 12 22.605ZM12 12.105C12.7 12.105 13.2917 11.8633 13.775 11.38C14.2583 10.8966 14.5 10.305 14.5 9.60498C14.5 8.90498 14.2583 8.31331 13.775 7.82998C13.2917 7.34665 12.7 7.10498 12 7.10498C11.3 7.10498 10.7083 7.34665 10.225 7.82998C9.74167 8.31331 9.5 8.90498 9.5 9.60498C9.5 10.305 9.74167 10.8966 10.225 11.38C10.7083 11.8633 11.3 12.105 12 12.105Z"
                      fill="#FAFAFA"
                    />
                  </svg>
                  <p className="max-w-[300px] text-base font-bold text-white font-lato">
                    FloorWalk Consultants Pvt Ltd. 215, B-zone business park,
                    Dewas Naka, Indore 452010
                  </p>
                </div>
                <div className="flex  items-start gap-2">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22.605C11.7667 22.605 11.5667 22.5383 11.4 22.405C11.2333 22.2716 11.1083 22.0966 11.025 21.88C10.7083 20.9466 10.3083 20.0716 9.825 19.255C9.35833 18.4383 8.7 17.48 7.85 16.38C7 15.28 6.30833 14.23 5.775 13.23C5.25833 12.23 5 11.0216 5 9.60498C5 7.65498 5.675 6.00498 7.025 4.65498C8.39167 3.28831 10.05 2.60498 12 2.60498C13.95 2.60498 15.6 3.28831 16.95 4.65498C18.3167 6.00498 19 7.65498 19 9.60498C19 11.1216 18.7083 12.3883 18.125 13.405C17.5583 14.405 16.9 15.3966 16.15 16.38C15.25 17.58 14.5667 18.58 14.1 19.38C13.65 20.1633 13.275 20.9966 12.975 21.88C12.8917 22.1133 12.7583 22.2966 12.575 22.43C12.4083 22.5466 12.2167 22.605 12 22.605ZM12 12.105C12.7 12.105 13.2917 11.8633 13.775 11.38C14.2583 10.8966 14.5 10.305 14.5 9.60498C14.5 8.90498 14.2583 8.31331 13.775 7.82998C13.2917 7.34665 12.7 7.10498 12 7.10498C11.3 7.10498 10.7083 7.34665 10.225 7.82998C9.74167 8.31331 9.5 8.90498 9.5 9.60498C9.5 10.305 9.74167 10.8966 10.225 11.38C10.7083 11.8633 11.3 12.105 12 12.105Z"
                      fill="#FAFAFA"
                    />
                  </svg>
                  <p className="max-w-[300px] text-base font-bold text-white font-lato">
                    FloorWalk Consultants Pvt Ltd. . Eureka offices, 87, First
                    Floor, Sawarkar Nagar, Chatrapati Sq. Nagpur- 440015
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 xl:py-20 container ">
        <div className="pt-5">
          <h2 className="text-center max-w-[868px] mx-auto text-[1.6rem] xl:text-[2.525rem] leading-[110%] font-bold text-skin-primary-900">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex pt-6 justify-center gap-4 flex-wrap">
          <button
            onClick={() => setActiveFaq(1)}
            className={cn(
              "inline-flex items-center font-medium font-lato gap-3 px-4 py-3 rounded",
              activeFaq == 1
                ? "text-skin-primary  border-b-[3px] border-skin-primary"
                : "text-skin-neutral-400 bg-skin-base-white"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                className={cn(
                  activeFaq == 1 ? "fill-skin-primary" : "fill-skin-neutral-400"
                )}
                d="M19.1667 11.2716V0.60498H5.83333V5.93831H0.5V24.605H11.1667V19.2716H13.8333V24.605H24.5V11.2716H19.1667ZM5.83333 21.9383H3.16667V19.2716H5.83333V21.9383ZM5.83333 16.605H3.16667V13.9383H5.83333V16.605ZM5.83333 11.2716H3.16667V8.60498H5.83333V11.2716ZM11.1667 16.605H8.5V13.9383H11.1667V16.605ZM11.1667 11.2716H8.5V8.60498H11.1667V11.2716ZM11.1667 5.93831H8.5V3.27165H11.1667V5.93831ZM16.5 16.605H13.8333V13.9383H16.5V16.605ZM16.5 11.2716H13.8333V8.60498H16.5V11.2716ZM16.5 5.93831H13.8333V3.27165H16.5V5.93831ZM21.8333 21.9383H19.1667V19.2716H21.8333V21.9383ZM21.8333 16.605H19.1667V13.9383H21.8333V16.605Z"
              />
            </svg>
            <span className="">General FAQs</span>
          </button>
          <button
            onClick={() => setActiveFaq(2)}
            className={cn(
              "inline-flex items-center font-medium font-lato gap-3 px-4 py-3 rounded",
              activeFaq == 2
                ? "text-skin-primary  border-b-[3px] border-skin-primary"
                : "text-skin-neutral-400 bg-skin-base-white"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              viewBox="0 0 25 25"
              fill="none"
            >
              <g clipPath="url(#clip0_1_7554)">
                <path
                  d="M20.5 4.60498H4.5V6.60498H20.5V4.60498ZM21.5 14.605V12.605L20.5 7.60498H4.5L3.5 12.605V14.605H4.5V20.605H14.5V14.605H18.5V20.605H20.5V14.605H21.5ZM12.5 18.605H6.5V14.605H12.5V18.605Z"
                  className={cn(
                    activeFaq == 2
                      ? "fill-skin-primary"
                      : "fill-skin-neutral-400"
                  )}
                />
              </g>
              <defs>
                <clipPath id="clip0_1_7554">
                  <rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(0.5 0.60498)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span className="">Product-Specific FAQs</span>
          </button>
        </div>
      </div>
      <div className="container pb-10 gap-10  gap-x-0 xl:pb-20 lg:gap-x-10 grid grid-cols-11">
        <div className="col-span-11 lg:col-span-6">
          <ul>
            {DATA.map((item, i) => (
              <li
                onClick={() => setActiveIndex(item.id)}
                className={cn(
                  i === 0 && "border-t",
                  "p-4 gap-4 border-b border-black/[0.04] border-x justify-between cursor-pointer flex items-center"
                )}
                key={i}
              >
                <div className={"flex items-center gap-4"}>
                  <div
                    className={cn(
                      "w-6 h-6 rounded-full ",
                      activeIndex === item.id
                        ? "bg-skin-secondary"
                        : "bg-[#D9ECBF]"
                    )}
                  ></div>
                  <p className="lg:text-base text-sm font-sans font-normal text-skin-primary-1000">
                    Why Do Companies Use Mystery Shopping?
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M8 4.60498L16 12.605L8 20.605"
                    stroke={activeIndex === item.id ? "#8DC63F" : "#D9ECBF"}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
                <p className=" pt-5 lg:pt-10 font-lato text-base font-normal text-black">
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

export default ContactUs;
