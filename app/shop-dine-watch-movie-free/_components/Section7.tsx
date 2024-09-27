import Image from "next/image";

const RecommendedReading = [
  {
    title: "Recommended Reading",
    des: "Mahindra & Mahindra Limited is an Indian multinational car manufacturing corporation. The objective of this activity was to check the infrastructure of the showroom.",
    featureImg: "/images/mahindra.png",
    brandLogo: "/images/mahindra-logo.png",
  },
  {
    title: "Recommended Reading",
    des: "Mahindra & Mahindra Limited is an Indian multinational car manufacturing corporation. The objective of this activity was to check the infrastructure of the showroom.",
    featureImg: "/images/mahindra.png",
    brandLogo: "/images/mahindra-logo.png",
  },
  {
    title: "Recommended Reading",
    des: "Mahindra & Mahindra Limited is an Indian multinational car manufacturing corporation. The objective of this activity was to check the infrastructure of the showroom.",
    featureImg: "/images/mahindra.png",
    brandLogo: "/images/mahindra-logo.png",
  },
];

const Section7 = () => {
  return (
    <section className="container py-10 xl:py-20">
      <div>
        <h2 className="text-[2rem] leading-[100%] tracking-[1px] capitalize text-center text-skin-primary-1000 font-bold xl:text-[2.5rem]">
          Recommended Reading
        </h2>
      </div>
      <div className="pt-10 grid sm:grid-cols-2 gap-5 xl:grid-cols-3">
        {RecommendedReading.map((item, index) => (
          <div
            key={index}
            className="border flex flex-col gap-y-4 border-skin-secondary-100 rounded-[12px] p-4"
          >
            <div className=" h-[216px]">
              <Image
                src={item.featureImg}
                alt="mahindra"
                width={360}
                height={216}
                className=" w-full h-full aspect-square rounded-[] object-contain "
                quality={80}
              />
            </div>
            <div>
              <Image
                src={item.brandLogo}
                alt="mahindra-logo"
                width={108}
                height={31}
                className=" max-w-[108px] max-h-[31px]"
                quality={80}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-skin-primary-1000 capitalize">
                {item.title}
              </h3>
            </div>
            <div>
              <p className="text-sm font-semibold font-lato last:max-w-[70%] text-skin-neutral-400">
                {item.des}
              </p>
            </div>
            <div>
              <button
                style={{
                  boxShadow: "0px -1.5px 0px 0px #0B63E5 inset",
                }}
                className="inline-flex   pb-0.5 items-center gap-3"
              >
                <span className="text-base font-medium text-skin-primary">
                  Learn More
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.75 12H20.25"
                    stroke="#007DC1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 5.25L20.25 12L13.5 18.75"
                    stroke="#007DC1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section7;
