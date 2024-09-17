import AvatarCircles from "@/components/magicui/avatar-circles";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];
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
      <div className="pt-14 flex gap-9 flex-col lg:flex-row ">
        <div className="basis-full lg:basis-1/3">
          <div
            className="h-[298px] ml-auto p-4 lg:max-w-[254px] rounded-[10px] bg-g1 relative"
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
          <div className="h-[44px]  flex items-center mt-14  px-4 rounded-[8px] bg-g2 relative">
            <h4 className="text-2xl text-white font-black font-lato ">
              7+ years experience
            </h4>

            <div className="w-[57px] grid place-items-center h-[57px] rounded-full absolute -right-2 -top-8 border-2 border-white bg-[#379FD9]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_1_3384)">
                  <path
                    d="M16 1.33337L4 6.66671V14.6667C4 22.0667 9.12 28.9867 16 30.6667C22.88 28.9867 28 22.0667 28 14.6667V6.66671L16 1.33337ZM13.3333 22.6667L8 17.3334L9.88 15.4534L13.3333 18.8934L22.12 10.1067L24 12L13.3333 22.6667Z"
                    fill="#FAFAFA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_3384">
                    <rect width={32} height={32} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="basis-full lg:basis-1/3">
          <div className=" px-4 pb-4  pt-9 flex flex-col  mt-8 rounded-[8px] bg-g3 relative">
            <h4 className="text-2xl text-white font-black font-lato ">
              Personalized Solutions
            </h4>
            <p className="text-xs text-white/85 font-semibold font-lato">
              Tailor your research project with us for <br /> actionable
              insights.
            </p>
            <div className="w-[57px] grid place-items-center h-[57px] rounded-full absolute left-1/2 -translate-x-1/2 -top-8 border-2 border-white bg-[#165375]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={33}
                height={32}
                viewBox="0 0 33 32"
                fill="none"
              >
                <g clipPath="url(#clip0_1_3374)">
                  <path
                    d="M15.0647 18.6667H12.398C12.398 12.04 17.7714 6.66669 24.398 6.66669V9.33335C19.238 9.33335 15.0647 13.5067 15.0647 18.6667ZM24.398 14.6667V12C20.718 12 17.7314 14.9867 17.7314 18.6667H20.398C20.398 16.4534 22.1847 14.6667 24.398 14.6667ZM9.73136 5.33335C9.73136 3.85335 8.5447 2.66669 7.0647 2.66669C5.5847 2.66669 4.39803 3.85335 4.39803 5.33335C4.39803 6.81335 5.5847 8.00002 7.0647 8.00002C8.5447 8.00002 9.73136 6.81335 9.73136 5.33335ZM15.6647 6.00002H12.998C12.678 7.89335 11.0514 9.33335 9.0647 9.33335H5.0647C3.95803 9.33335 3.0647 10.2267 3.0647 11.3334V14.6667H11.0647V11.6534C13.5447 10.8667 15.398 8.68002 15.6647 6.00002ZM25.7314 22.6667C27.2114 22.6667 28.398 21.48 28.398 20C28.398 18.52 27.2114 17.3334 25.7314 17.3334C24.2514 17.3334 23.0647 18.52 23.0647 20C23.0647 21.48 24.2514 22.6667 25.7314 22.6667ZM27.7314 24H23.7314C21.7447 24 20.118 22.56 19.798 20.6667H17.1314C17.398 23.3467 19.2514 25.5334 21.7314 26.32V29.3334H29.7314V26C29.7314 24.8934 28.838 24 27.7314 24Z"
                    fill="#FAFAFA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_3374">
                    <rect
                      width={32}
                      height={32}
                      fill="white"
                      transform="translate(0.397949)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="  flex flex-col mt-12 pt-4 pb-6  px-4 rounded-[8px] bg-g4 relative">
            <h4 className="text-2xl leading-[110%] text-white font-black font-lato ">
              Extensive Market <br /> Coverage
            </h4>

            <p className="text-xs pt-2 font-semibold font-lato text-white/85">
              With over{" "}
              <b className="text-sm font-extrabold">
                350+ cities and 22+ countries
              </b>{" "}
              covered, ensure your retail strategy is on point globally.
            </p>

            <div className="w-[57px] grid place-items-center h-[57px] rounded-full absolute -right-2 -top-8 border-2 border-white bg-g4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={29}
                height={28}
                viewBox="0 0 29 28"
                fill="none"
              >
                <g clipPath="url(#clip0_1_3226)">
                  <path
                    d="M14.5735 2.51855C8.23574 2.51855 3.09204 7.66226 3.09204 14C3.09204 20.3378 8.23574 25.4815 14.5735 25.4815C20.9113 25.4815 26.055 20.3378 26.055 14C26.055 7.66226 20.9113 2.51855 14.5735 2.51855ZM13.4254 23.1049C8.89019 22.5423 5.38834 18.6845 5.38834 14C5.38834 13.2882 5.48019 12.6108 5.62945 11.9449L11.1291 17.4445V18.5926C11.1291 19.8556 12.1624 20.8889 13.4254 20.8889V23.1049ZM21.3476 20.1886C21.0491 19.2586 20.1994 18.5926 19.1661 18.5926H18.018V15.1482C18.018 14.5167 17.5013 14 16.8698 14H9.98093V11.7037H12.2772C12.9087 11.7037 13.4254 11.1871 13.4254 10.5556V8.2593H15.7217C16.9846 8.2593 18.018 7.22596 18.018 5.963V5.49226C21.382 6.85856 23.7587 10.1537 23.7587 14C23.7587 16.3882 22.8402 18.5582 21.3476 20.1886Z"
                    fill="#FAFAFA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_3226">
                    <rect
                      width="27.5556"
                      height="27.5556"
                      fill="white"
                      transform="translate(0.795654 0.222229)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <Image
              src={"/images/Huge Global.png"}
              alt="Huge Globa"
              width={196}
              height={99}
              className="block mx-auto mt-4"
            />
          </div>
        </div>
        <div className="basis-full lg:basis-1/3">
          <div
            className="h-[298px] pt-10 mr-auto p-4 lg:max-w-[354px] rounded-[10px] bg-MysteryShoppers relative"
            style={{
              boxShadow: "12px 12px 55px 0px rgba(0, 0, 0, 0.12)",
            }}
          >
            <div className="space-y-2">
              <div>
                <h3 className="text-3xl font-lato font-black text-white lg:text-5xl">
                  500,000+
                </h3>
                <h4 className="text-2xl text-white font-black font-lato ">
                  Mystery Shoppers
                </h4>
              </div>
              <p className="text-sm lg:text-base font-bold font-lato capitalize  text-skin-base-white/85 lg:max-w-[85%]">
                Leverage our vast network of experienced field agents for
                precise data collection.
              </p>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(126deg, #007DC1 5.59%, #7BAF34 94.41%)",
              }}
              className="w-[57px] grid place-items-center h-[57px] rounded-full absolute -right-3 -top-2 border-2 border-white "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={29}
                height={28}
                viewBox="0 0 29 28"
                fill="none"
              >
                <g clipPath="url(#clip0_1_3179)">
                  <path
                    d="M6.36094 7.11112H22.435C23.0665 7.11112 23.5832 6.59445 23.5832 5.96297C23.5832 5.33149 23.0665 4.81482 22.435 4.81482H6.36094C5.72946 4.81482 5.21279 5.33149 5.21279 5.96297C5.21279 6.59445 5.72946 7.11112 6.36094 7.11112ZM23.7669 9.17778C23.6635 8.64963 23.1928 8.25926 22.6417 8.25926H6.15428C5.60316 8.25926 5.13242 8.64963 5.02909 9.17778L3.88094 14.9185C3.74316 15.6304 4.28279 16.2963 5.00613 16.2963H5.21279V22.037C5.21279 22.6685 5.72946 23.1852 6.36094 23.1852H15.5461C16.1776 23.1852 16.6943 22.6685 16.6943 22.037V16.2963H21.2869V22.037C21.2869 22.6685 21.8035 23.1852 22.435 23.1852C23.0665 23.1852 23.5832 22.6685 23.5832 22.037V16.2963H23.7898C24.5132 16.2963 25.0528 15.6304 24.915 14.9185L23.7669 9.17778V9.17778ZM14.398 20.8889H7.50909V16.2963H14.398V20.8889Z"
                    fill="#FAFAFA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_3179">
                    <rect
                      width="27.5556"
                      height="27.5556"
                      fill="white"
                      transform="translate(0.620117 0.222229)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div
            style={{
              background:
                "radial-gradient(558.04% 113.57% at 93% 5.13%, #1E5C7E 0%, #003C5D 81.8%);",
            }}
            className=" py-5  flex items-end mt-14  px-4 rounded-[8px] bg-g2 relative"
          >
            <h4 className="text-2xl text-white font-black leading-normal basis-[60%] font-lato ">
              We take on the whole complex of Internet marketing
            </h4>

            <div className="basis-[40%]">
              <AvatarCircles numPeople={6} avatarUrls={avatarUrls} />c
            </div>
            <div className="w-[57px] grid place-items-center h-[57px] rounded-full absolute -right-2 -top-8 border-2 border-white bg-[#165375]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="16"
                viewBox="0 0 32 16"
                fill="none"
              >
                <path
                  d="M16 9C18.1733 9 20.0933 9.52 21.6533 10.2C23.0933 10.84 24 12.28 24 13.84V16H8V13.8533C8 12.28 8.90667 10.84 10.3467 10.2133C11.9067 9.52 13.8267 9 16 9ZM5.33333 9.33333C6.8 9.33333 8 8.13333 8 6.66667C8 5.2 6.8 4 5.33333 4C3.86667 4 2.66667 5.2 2.66667 6.66667C2.66667 8.13333 3.86667 9.33333 5.33333 9.33333ZM6.84 10.8C6.34667 10.72 5.85333 10.6667 5.33333 10.6667C4.01333 10.6667 2.76 10.9467 1.62667 11.44C0.64 11.8667 0 12.8267 0 13.9067V16H6V13.8533C6 12.7467 6.30667 11.7067 6.84 10.8ZM26.6667 9.33333C28.1333 9.33333 29.3333 8.13333 29.3333 6.66667C29.3333 5.2 28.1333 4 26.6667 4C25.2 4 24 5.2 24 6.66667C24 8.13333 25.2 9.33333 26.6667 9.33333ZM32 13.9067C32 12.8267 31.36 11.8667 30.3733 11.44C29.24 10.9467 27.9867 10.6667 26.6667 10.6667C26.1467 10.6667 25.6533 10.72 25.16 10.8C25.6933 11.7067 26 12.7467 26 13.8533V16H32V13.9067ZM16 0C18.2133 0 20 1.78667 20 4C20 6.21333 18.2133 8 16 8C13.7867 8 12 6.21333 12 4C12 1.78667 13.7867 0 16 0Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
