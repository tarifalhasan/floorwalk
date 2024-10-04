import FeaturedInsights from "@/components/FeaturedInsights";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ObjectiveSection {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const objectives: ObjectiveSection[] = [
  {
    id: 1,
    title: "Objective",
    description:
      "Porsche India Pvt Ltd is a division of the German automobile manufacturer Porsche and the Volkswagen Group India. The objective of this activity was to check the selling skills and performance of the sales managers for Porsche showrooms. The sales manager staff were being audited on the lines of their selling skills and product knowledge. The motive was to understand whether the sales manager is compatible enough to understand all customer queries and stand by the brand reputation.",
    imageSrc: "/images/objective.png",
    imageAlt: "objective",
  },

  {
    id: 2,
    title: "Objective",
    description:
      "Porsche India Pvt Ltd is a division of the German automobile manufacturer Porsche and the Volkswagen Group India. The objective of this activity was to check the selling skills and performance of the sales managers for Porsche showrooms. The sales manager staff were being audited on the lines of their selling skills and product knowledge.",
    imageSrc: "/images/objective.png",
    imageAlt: "objective",
  },
  {
    id: 3,
    title: "Objective",
    description:
      "Porsche India Pvt Ltd is a division of the German automobile manufacturer Porsche and the Volkswagen Group India. The objective of this activity was to check the selling skills and performance of the sales managers for Porsche showrooms. The sales manager staff were being audited on the lines of their selling skills and product knowledge.",
    imageSrc: "/images/objective.png",
    imageAlt: "objective",
  },
];

const LIST_ITEM_DATA = [
  {
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
      >
        <g clipPath="url(#clip0_135_4185)">
          <path
            d="M24 7.99976V1.99976L16 9.99976L24 17.9998V11.9998C30.62 11.9998 36 17.3798 36 23.9998C36 26.0198 35.5 27.9398 34.6 29.5998L37.52 32.5198C39.08 30.0598 40 27.1398 40 23.9998C40 15.1598 32.84 7.99976 24 7.99976ZM24 35.9998C17.38 35.9998 12 30.6198 12 23.9998C12 21.9798 12.5 20.0598 13.4 18.3998L10.48 15.4798C8.92 17.9398 8 20.8598 8 23.9998C8 32.8398 15.16 39.9998 24 39.9998V45.9998L32 37.9998L24 29.9998V35.9998Z"
            fill="#11ABFF"
          />
        </g>
        <defs>
          <clipPath id="clip0_135_4185">
            <rect
              width={48}
              height={48}
              fill="white"
              transform="translate(0 -0.000244141)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Closed Loop Reporting",
    des: "A large database of certified mystery shopper profiles to match your target customer. For Mystery Shopping in India You can select shopper basis gender,age, income group, education, work experience and many more criteria",
  },
  {
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={49}
        viewBox="0 0 48 49"
        fill="none"
      >
        <g clipPath="url(#clip0_135_4192)">
          <path
            d="M40 8.60474H8V12.6047H40V8.60474ZM42 28.6047V24.6047L40 14.6047H8L6 24.6047V28.6047H8V40.6047H28V28.6047H36V40.6047H40V28.6047H42ZM24 36.6047H12V28.6047H24V36.6047Z"
            fill="#11ABFF"
          />
        </g>
        <defs>
          <clipPath id="clip0_135_4192">
            <rect
              width={48}
              height={48}
              fill="white"
              transform="translate(0 0.604736)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Client/Storewise Performance",
    des: "A large database of certified mystery shopper profiles to match your target customer. For Mystery Shopping in India You can select shopper basis gender,age, income group, education, work experience and many more criteria",
  },
  {
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
      >
        <g clipPath="url(#clip0_135_4199)">
          <path
            d="M11.08 16.9198L4 23.9998L11.08 31.0798L14.6 27.5398L11.08 23.9998L14.6 20.4598L11.08 16.9198ZM24 36.9198L20.46 33.3998L16.92 36.9198L24 43.9998L31.08 36.9198L27.54 33.3998L24 36.9198ZM36.92 16.9198L33.4 20.4598L36.92 23.9998L33.4 27.5398L36.92 31.0798L44 23.9998L36.92 16.9198ZM16.92 11.0798L20.46 14.5998L24 11.0798L27.54 14.5998L31.08 11.0798L24 3.99976L16.92 11.0798Z"
            fill="#11ABFF"
          />
          <path
            d="M24 29.9998C27.3137 29.9998 30 27.3135 30 23.9998C30 20.686 27.3137 17.9998 24 17.9998C20.6863 17.9998 18 20.686 18 23.9998C18 27.3135 20.6863 29.9998 24 29.9998Z"
            fill="#11ABFF"
          />
        </g>
        <defs>
          <clipPath id="clip0_135_4199">
            <rect
              width={48}
              height={48}
              fill="white"
              transform="translate(0 -0.000244141)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Audio/Video Proofs Attached",
    des: "A large database of certified mystery shopper profiles to match your target customer. For Mystery Shopping in India You can select shopper basis gender,age, income group, education, work experience and many more criteria",
  },
  {
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          d="M38 5.99976H10C7.8 5.99976 6 7.79976 6 9.99976V37.9998C6 40.1998 7.8 41.9998 10 41.9998H38C40.2 41.9998 42 40.1998 42 37.9998V9.99976C42 7.79976 40.2 5.99976 38 5.99976ZM38 37.9998H10V9.99976H38V37.9998Z"
          fill="#11ABFF"
        />
        <path d="M18 23.9998H14V33.9998H18V23.9998Z" fill="#11ABFF" />
        <path d="M34 13.9998H30V33.9998H34V13.9998Z" fill="#11ABFF" />
        <path d="M26 27.9998H22V33.9998H26V27.9998Z" fill="#11ABFF" />
        <path d="M26 19.9998H22V23.9998H26V19.9998Z" fill="#11ABFF" />
      </svg>
    ),
    title: "Track Upcoming Audits",
    des: "A large database of certified mystery shopper profiles to match your target customer. For Mystery Shopping in India You can select shopper basis gender,age, income group, education, work experience and many more criteria",
  },
];
const Porsche = () => {
  return (
    <div className=" pb-10  lg:pb-20">
      <div className="max-w-[800px] container mx-auto block py-10 xl:py-20 space-y-6 lg:space-y-10">
        <div>
          <Image
            src={"/images/parodise.png"}
            alt="parodise"
            width={800}
            height={300}
            className="w-full max-w-[800px] max-h-[300px] object-cover"
            quality={80}
          />
        </div>
        <div>
          <Button>Brand</Button>
        </div>
        <div>
          <h2 className="text-xl xl:text-4xl text-skin-secondary-800 font-semibold">
            Sales Process and Staff Performance Insights
          </h2>
        </div>
        <div>
          <p className="font-lato text-[#696A75] font-medium leading-[142%]">
            August 20, 2022
          </p>
        </div>
        <div>
          <p className="text-sm lg:text-base text-skin-secondary-600 font-normal font-lato">
            Porsche India Pvt Ltd is a division of the German automobile
            manufacturer Porsche and the Volkswagen Group India. The objective
            of this activity was to check the selling skills and performance of
            the sales managers for Porsche.
          </p>
        </div>
        <div className="bg-skin-primary-1000 p-3 rounded-[10px]">
          <p className="text-base lg:text-lg font-semibold text-skin-base-white leading-normal">
            Every sales manager checkpoint is trained and audited quarterly to
            improve overall customer service index.
          </p>
        </div>
      </div>
      <div className="flex container  flex-col gap-y-10">
        {objectives.map((obj, index) => (
          <div
            key={obj.id}
            className={`flex flex-col lg:items-center gap-6 lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="basis-full lg:basis-[55%]">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-skin-primary-1000 tracking-[-1px]">
                    {obj.title}
                  </h3>
                </div>
                <div>
                  <p className="text-skin-neutral-600 text-lg font-lato leading-[-1px]">
                    {obj.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-full lg:basis-[45%]">
              <Image
                src={obj.imageSrc}
                alt={obj.imageAlt}
                width={600}
                height={300}
                quality={100}
                className="w-full max-h-[300px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="pb-8">
        <div className="py-10 xl:max-w-[1380px] container ">
          <div className="pb-10">
            <h3 className="text-3xl lg:text-[40px] font-bold text-center leading-[100%] text-skin-primary-1000 tracking-[1px]">
              Yield
            </h3>
          </div>
          <div className="  grid sm:grid-cols-2 lg:grid-cols-3 gap-9 xl:grid-cols-4">
            {LIST_ITEM_DATA.map((item, index) => (
              <div
                key={index}
                style={{
                  boxShadow: "4px 4px 55px 0px rgba(30, 30, 30, 0.12)",
                }}
                className="px-7 py-6 gap-y-4 rounded-[8px] flex flex-col items-center "
              >
                <div
                  style={{ borderRadius: "18px 5px 10px 5px" }}
                  className=" w-[50px] h-[49px] relative bg-[#D7F1FF]"
                >
                  <div className=" -top-2 -left-3 absolute">{item.icons}</div>
                </div>
                <div>
                  <h4 className="text-2xl text-center font-bold text-skin-primary-1000">
                    {item.title}
                  </h4>
                </div>
                <div>
                  <p className="text-xs text-center xl:text-base font-lato text-skin-neutral-600">
                    {item.des}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex pt-10 justify-center flex-wrap gap-4">
            <Button
              className="border-skin-primary text-skin-primary gap-4"
              variant={"outline"}
            >
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                viewBox="0 0 25 25"
                fill="none"
              >
                <mask
                  id="mask0_135_4216"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={25}
                  height={25}
                >
                  <rect
                    x="0.5"
                    y="0.0671387"
                    width={24}
                    height={24}
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_135_4216)">
                  <path
                    d="M5.9 20.0671L4.5 18.6671L16.1 7.06714H9.5V5.06714H19.5V15.0671H17.5V8.46714L5.9 20.0671Z"
                    fill="#007DC1"
                  />
                </g>
              </svg>
            </Button>
            <Button>Explore Marketplace</Button>
          </div>
        </div>
      </div>
      <FeaturedInsights />
    </div>
  );
};

export default Porsche;
