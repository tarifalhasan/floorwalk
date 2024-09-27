import { Button } from "@/components/ui/button";
import Image from "next/image";

const Section1 = () => {
  return (
    <section className="container py-10">
      <div className="  mx-auto space-y-5">
        <div>
          <h1 className="text-center text-[2.6rem] xl:text-[3.625rem] leading-[110%] font-bold text-skin-primary-900">
            Come take a{" "}
            <span className="text-skin-secondary-500">floorwalk</span> with us !
          </h1>
        </div>
        <div>
          <p className="text-center font-normal leading-[120%] text-skin-neutral-600 text-base xl:text-lg">
            Get Useful Consumer Insights From our Mystery Shoppers.
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
      <div className="pt-14 flex gap-9 flex-col lg:flex-row ">
        <div className="relative">
          <Image
            src={"/images/come-take-a-floorwalk-with-us-hero.png"}
            alt="come-take-a-floorwalk-with-us-hero.png"
            width={1030}
            className="block mx-auto"
            height={642}
          />
          <Image
            src={"/images/come-take-a-floorwalk-with-us-hero.png-mask.png"}
            alt="come-take-a-floorwalk-with-us-hero.png-mask"
            width={310}
            height={325}
            className="absolute top-1/2 -translate-y-1/2 right-0 xl:right-[-100px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
