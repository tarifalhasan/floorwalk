import Image from "next/image";

const FeaturedInsightsData = [
  {
    title: "Getting started with Mystery shopping",
    des: "Mahindra & Mahindra Limited is an Indian multinational car manufacturing corporation. The objective of this activity was to check the infrastructure of the showroom.",
    featureImg: "/images/Featured Insights.png",
    brandLogo: "/images/mahindra-logo.png",
  },
  {
    title: "Getting started with Mystery shopping",
    des: "Mahindra & Mahindra Limited is an Indian multinational car manufacturing corporation. The objective of this activity was to check the infrastructure of the showroom.",
    featureImg: "/images/Featured Insights.png",
    brandLogo: "/images/mahindra-logo.png",
  },
  {
    title: "Getting started with Mystery shopping",
    des: "Mahindra & Mahindra Limited is an Indian multinational car manufacturing corporation. The objective of this activity was to check the infrastructure of the showroom.",
    featureImg: "/images/Featured Insights.png",
    brandLogo: "/images/mahindra-logo.png",
  },
];

const FeaturedInsights = () => {
  return (
    <section className="container pb-10 xl:pb-20">
      <div>
        <h2 className="text-[2rem] leading-[100%] tracking-[1px] capitalize text-center text-skin-primary-1000 font-bold xl:text-[2.5rem]">
          Featured Insights
        </h2>
      </div>
      <div className="pt-10 grid sm:grid-cols-2 gap-5 xl:grid-cols-3">
        {FeaturedInsightsData.map((item, index) => (
          <div
            key={index}
            className="border flex flex-col gap-y-4 border-skin-secondary-100 rounded-[12px] p-4"
          >
            <div className=" h-[281px]">
              <Image
                src={item.featureImg}
                alt="mahindra"
                width={360}
                height={216}
                className=" w-full h-full rounded-[8px] object-cover "
                quality={80}
              />
            </div>

            <div>
              <h3 className="text-lg lg:text-2xl font-semibold text-skin-primary-1000 capitalize">
                {item.title}
              </h3>
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

export default FeaturedInsights;
