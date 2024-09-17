import { Button } from "@/components/ui/button";
import Image from "next/image";

const Section1 = () => {
  return (
    <section className="container py-10">
      <div className=" max-w-[638px] mx-auto space-y-5">
        <div>
          <h1 className="text-center text-[2.6rem] xl:text-[3.625rem] leading-[110%] font-bold text-skin-primary-900">
            Retail <span className="text-skin-secondary-500">Audit</span> and{" "}
            <span className="text-skin-secondary-500">Research</span> Solutions
          </h1>
        </div>
        <div>
          <p className="text-center font-normal leading-[120%] text-skin-neutral-600 text-base xl:text-lg">
            FloorWalk covers 350+ cities in India and 22+ countries with
            500,000+ mystery shoppers and field agents. Conduct your audit with
            a personalized solution or set up your project in minutes using
            FloorWalk Marketplace.
          </p>
        </div>
        <div className="flex lg:max-w-[450px] mx-auto flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <span className="text-xs font-medium leading-[100%] text-skin-neutral-400 tracking-[.5px]">
              For Shopper
            </span>
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
          <div className="flex flex-1 flex-col gap-y-1.5">
            <span className="text-xs font-medium leading-[100%] text-skin-neutral-400 tracking-[.5px]">
              For Brand
            </span>
            <Button className="gap-3 w-full ">Explore Marketplace</Button>
          </div>
        </div>
      </div>
      <div className="pt-10 flex flex-col lg:flex-row ">
        <div className="basis-full lg:basis-1/3">
          <div
            className="h-[298px] p-4 lg:max-w-[254px] rounded-[10px] bg-g1 relative"
            style={{
              boxShadow: "12px 12px 55px 0px rgba(0, 0, 0, 0.12)",
            }}
          >
            <div className="space-y-2">
              <h4 className="text-2xl font-black font-lato max-w-[179px]">
                Real-Time Analytics
              </h4>
              <p className="text-xs font-normal font-lato capitalize text-skin-neutral-600">
                Monitor your retail performance with live data at your
                fingertips.
              </p>
            </div>
            <div className="w-[57px] grid place-items-center h-[57px] rounded-full absolute -right-3 -top-2 border-2 border-white bg-skin-play-sky-blue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="16"
                viewBox="0 0 29 16"
                fill="none"
              >
                <path
                  d="M28.8517 2.66063C28.8517 4.05899 27.7076 5.2031 26.3092 5.2031C26.0804 5.2031 25.8643 5.17768 25.6609 5.11411L21.1353 9.62699C21.1988 9.83039 21.2243 10.0592 21.2243 10.288C21.2243 11.6864 20.0802 12.8305 18.6818 12.8305C17.2834 12.8305 16.1393 11.6864 16.1393 10.288C16.1393 10.0592 16.1647 9.83039 16.2283 9.62699L12.9867 6.38535C12.7833 6.44891 12.5544 6.47433 12.3256 6.47433C12.0968 6.47433 11.868 6.44891 11.6646 6.38535L5.88047 12.1822C5.94403 12.3856 5.96946 12.6017 5.96946 12.8305C5.96946 14.2289 4.82535 15.373 3.42699 15.373C2.02863 15.373 0.884521 14.2289 0.884521 12.8305C0.884521 11.4321 2.02863 10.288 3.42699 10.288C3.65581 10.288 3.87192 10.3135 4.07532 10.377L9.87214 4.59291C9.80858 4.38951 9.78316 4.16069 9.78316 3.93187C9.78316 2.53351 10.9273 1.3894 12.3256 1.3894C13.724 1.3894 14.8681 2.53351 14.8681 3.93187C14.8681 4.16069 14.8427 4.38951 14.7791 4.59291L18.0208 7.83455C18.2241 7.77099 18.453 7.74557 18.6818 7.74557C18.9106 7.74557 19.1394 7.77099 19.3428 7.83455L23.8557 3.30896C23.7922 3.10556 23.7667 2.88945 23.7667 2.66063C23.7667 1.26227 24.9108 0.118164 26.3092 0.118164C27.7076 0.118164 28.8517 1.26227 28.8517 2.66063Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
            <div
              style={{
                boxShadow: "5.221px 5.221px 71.782px 0px rgba(0, 0, 0, 0.24)",
              }}
              className="bg-skin-base-white absolute top-[50%] p-2 rounded-[6.5px]"
            >
              <div className="inline-flex items-center">
                <p className="text-sm font-extrabold text-skin-secondary">
                  83%{" "}
                  <span className="text-xs text-skin-neutral-400 font-normal">
                    Positive Report
                  </span>
                </p>
              </div>

              <div className="flex justify-center gap-1">
                <div className="w-4 h-4 rounded-full bg-skin-secondary"></div>
                <p className="text-xs font-normal text-skin-neutral-400">
                  Positive
                </p>
              </div>
            </div>
            <Image
              src={"/chat-analytics.png"}
              alt="chat-analytics.png"
              height={145}
              className=" absolute left-0 right-0 w-full bottom-0"
              width={254}
            />
          </div>
        </div>
        <div className="basis-full lg:basis-1/3"></div>
        <div className="basis-full lg:basis-1/3"></div>
      </div>
    </section>
  );
};

export default Section1;
