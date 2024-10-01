import FeaturedInsights from "@/components/FeaturedInsights";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const FloorwalkServices = () => {
  return (
    <div>
      <div className="py-10">
        <h1 className="text-center max-w-[868px] mx-auto text-[2.6rem] xl:text-[3.625rem] leading-[110%] font-bold text-skin-primary-900">
          Floorwalk Services
          <br className="hidden lg:block" />
          <span className="text-skin-secondary-500">Mystery Shopping</span>
        </h1>
      </div>
      <div className="container pb-10">
        <div>
          <Image
            src={"/images/mystert-shoping.png"}
            alt="mystert-shoping"
            width={1300}
            height={300}
            className="w-full object-cover rounded-[12px] max-h-[300px]"
            quality={100}
          />
        </div>
        <div className="pt-8 max-w-[804px] mx-auto">
          <p className="text-base text-center text-skin-neutral-600  font-lato font-normal">
            Floorwalk conducts mystery shopping for the brand to aknowledge
            their actual store appearance, consumer experience, stock
            availiblity, staff behavior and other findings inside their stores.
            The whole data is collected by third person who poses as a genuine
            shopper and shares the exact data collected on-site.
          </p>
        </div>
        <div className="pt-10 pb-16 2xl:pb-20 space-y-8">
          {/* Item  1*/}
          <div className="grid grid-cols-12 gap-y-7  lg:gap-x-6 items-center">
            <div className="col-span-12 lg:col-span-7 space-y-3">
              <h3 className="text-2xl lg:text-3xl font-bold text-skin-primary-1000">
                Visual Merchandising Audits
              </h3>
              <h4 className="text-skin-neutral-600 font-lato font-normal">
                Floorwalk conducts Merchandising audits which provide regular
                check ups on retailers, ensuring that they are complying with
                the agreements that you have made regarding product location,
                shelf space, product displays, pricing, and promotion.
              </h4>
              <Button>Explore Visual Merchandising Audits</Button>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <Image
                src={"/images/martery.png"}
                alt="martery"
                width={531}
                height={300}
                quality={90}
                className="h-[220px] lg:h-[300px] w-full object-cover"
              />
            </div>
          </div>
          {/* Item 2 */}
          <div className="grid grid-cols-12 gap-y-7  lg:gap-x-6 items-center">
            <div className="col-span-12 lg:col-span-5">
              <Image
                src={"/images/martery.png"}
                alt="martery"
                width={531}
                height={300}
                quality={90}
                className="h-[220px] lg:h-[300px] w-full object-cover"
              />
            </div>
            <div className="col-span-12 lg:col-span-7 space-y-3">
              <h3 className="text-2xl lg:text-3xl font-bold text-skin-primary-1000">
                Visual Merchandising Audits
              </h3>
              <h4 className="text-skin-neutral-600 font-lato font-normal">
                Floorwalk conducts Merchandising audits which provide regular
                check ups on retailers, ensuring that they are complying with
                the agreements that you have made regarding product location,
                shelf space, product displays, pricing, and promotion.
              </h4>
              <Button>Explore Visual Merchandising Audits</Button>
            </div>
          </div>
          {/* Item 3 */}
          <div className="grid grid-cols-12 gap-y-7  lg:gap-x-6 items-center">
            <div className="col-span-12 lg:col-span-7 space-y-3">
              <h3 className="text-2xl lg:text-3xl font-bold text-skin-primary-1000">
                Visual Merchandising Audits
              </h3>
              <h4 className="text-skin-neutral-600 font-lato font-normal">
                Floorwalk conducts Merchandising audits which provide regular
                check ups on retailers, ensuring that they are complying with
                the agreements that you have made regarding product location,
                shelf space, product displays, pricing, and promotion.
              </h4>
              <Button>Explore Visual Merchandising Audits</Button>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <Image
                src={"/images/martery.png"}
                alt="martery"
                width={531}
                height={300}
                quality={90}
                className="h-[220px] lg:h-[300px] w-full object-cover"
              />
            </div>
          </div>
        </div>
        <FeaturedInsights />
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
                  A quicker way to audit your stores. FloorWalk marketplace
                  allows you to choose your solution from our product list,
                  setup your project, and make it live on-the-go. It allows you
                  to execute your smaller straightforward audit and research
                  projects and get insights in a jiffy.
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
    </div>
  );
};

export default FloorwalkServices;
