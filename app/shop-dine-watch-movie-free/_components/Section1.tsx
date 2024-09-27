import { Button } from "@/components/ui/button";
import Image from "next/image";

const Section1 = () => {
  return (
    <section className="container py-10">
      <div className=" max-w-[638px] mx-auto space-y-5">
        <div>
          <h1 className="text-center text-[2.6rem] xl:text-[3.625rem] leading-[110%] font-bold text-skin-primary-900">
            Shop, dine or watch a movie for
            <span className="text-skin-secondary-500">Free.</span>
          </h1>
        </div>
        <div>
          <p className="text-center font-normal leading-[120%] text-skin-neutral-600 text-base xl:text-lg">
            Register with us as a Mystery Shopper, visit the store, Become eyes
            and ears of the brand and get paid to do so.
          </p>
        </div>
        <div className="flex lg:max-w-[450px] mx-auto flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex flex-1 flex-col gap-y-1.5">
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
            <Button className="gap-3 w-full ">
              More About Mystery Shopper
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 pt-10 xl:pt-20 gap-y-5 lg:gap-x-5">
        <div className="col-span-12 grid gap-y-5 lg:col-span-8">
          <div className="grid lg:grid-cols-2 lg:gap-x-5">
            <div
              className="w-full space-y-2 rounded-[8px] py-[37px] px-4"
              style={{
                background:
                  "radial-gradient(62.13% 119.61% at 52.44% -14.71%, #1E5C7E 0%, #003C5D 81.8%)",
              }}
            >
              <div>
                <h3 className="text-xl max-w-[90%] xl:max-w-[264px] lg:text-2xl font-black capitalize text-skin-base-white">
                  Become a Mystery Shopper
                </h3>
              </div>
              <div>
                <p className="text-base font-semibold font-lato text-white/80">
                  Register today and start shopping, dining, or watching movies
                  for free. Experience the joy of being paid while you review
                  and assess stores, restaurants, and entertainment venues.
                </p>
              </div>
            </div>
            <div>
              <Image
                alt="shop-dine-watch-movie-free."
                width={381}
                height={285}
                className="w-full object-cover"
                src={"/images/shop-dine-watch-movie-free.png"}
              />
            </div>
          </div>
          <div className=" grid grid-cols-12  ">
            <div className="hidden lg:block lg:col-span-4"></div>
            <div className="lg:col-span-8">
              <Image
                src={"/images/shop-dine-watch-movie-free-2.png"}
                alt="shop-dine-watch-movie-free-2"
                width={390}
                height={118}
                quality={80}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div
            className="w-full lg:mt-[4.5rem] space-y-2 rounded-[8px] py-[37px] px-4"
            style={{
              background:
                "radial-gradient(62.13% 119.61% at 52.44% -14.71%, #1E5C7E 0%, #003C5D 81.8%)",
            }}
          >
            <div>
              <h3 className="text-xl max-w-[90%] xl:max-w-[264px] lg:text-2xl font-black capitalize text-skin-base-white">
                Become a Mystery Shopper
              </h3>
            </div>
            <div>
              <p className="text-base font-semibold font-lato text-white/80">
                Register today and start shopping, dining, or watching movies
                for free. Experience the joy of being paid while you review and
                assess stores, restaurants, and entertainment venues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
