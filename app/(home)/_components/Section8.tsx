import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Section8 = () => {
  return (
    <section className="py-10 xl:py-20 relative  container">
      <div>
        <h2 className="text-[2rem] leading-[100%] tracking-[1px] capitalize text-center text-skin-primary-1000 font-bold xl:text-[2.5rem]">
          In the News
        </h2>
      </div>
      <div className="pt-10">
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-full lg:basis-1/2">
                <div
                  style={{
                    boxShadow: "0px 16px 48px 0px rgba(0, 0, 0, 0.04)",
                  }}
                  className="p-8 border border-skin-neutral-400 rounded-[10px] gap-5 flex flex-col md:flex-row md:items-center"
                >
                  <div className="md:basis-[35%]">
                    <Image
                      src={"/images/Photo1.png"}
                      alt="alt"
                      width={196}
                      className="w-full h-[300px] object-cover rounded-[6px] md:rounded-[16px]"
                      height={275}
                    />
                  </div>
                  <div className="md:basis-[65%] flex flex-col gap-y-4">
                    <div className="flex items-center gap-5">
                      <div className="inline-flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <path
                            d="M7.98027 6.67769V4.11768C7.98027 3.55768 8.42027 3.11768 8.98027 3.11768C9.54027 3.11768 9.98027 3.55768 9.98027 4.11768V6.67769C9.98027 7.23769 9.54027 7.67769 8.98027 7.67769C8.42027 7.67769 7.98027 7.23769 7.98027 6.67769ZM15.3803 7.67769C15.9403 7.67769 16.3803 7.23769 16.3803 6.67769V4.11768C16.3803 3.55768 15.9403 3.11768 15.3803 3.11768C14.8203 3.11768 14.3803 3.55768 14.3803 4.11768V6.67769C14.3803 7.23769 14.8203 7.67769 15.3803 7.67769ZM8.62028 11.1177H15.7203C16.1603 11.1177 16.5203 10.7577 16.5203 10.3177C16.5203 9.87768 16.1603 9.51768 15.7203 9.51768H8.62028C8.18028 9.51768 7.82028 9.87768 7.82028 10.3177C7.82028 10.7577 8.18028 11.1177 8.62028 11.1177ZM19.7803 4.51768H18.1203C17.6803 4.51768 17.3203 4.87768 17.3203 5.31768C17.3203 5.75768 17.6803 6.11768 18.1203 6.11768H18.9803V19.7177H5.38027V6.11768H6.24027C6.68027 6.11768 7.04027 5.75768 7.04027 5.31768C7.04027 4.87768 6.68027 4.51768 6.24027 4.51768H4.58027C4.14027 4.51768 3.78027 4.95766 3.78027 5.39766V20.5177C3.78027 20.9577 4.14027 21.3177 4.58027 21.3177H19.7803C20.2203 21.3177 20.5803 20.9577 20.5803 20.5177V5.39766C20.5803 4.95766 20.2203 4.51768 19.7803 4.51768ZM11.5203 6.11768H12.8403C13.2803 6.11768 13.6403 5.75768 13.6403 5.31768C13.6403 4.87768 13.2803 4.51768 12.8403 4.51768H11.5203C11.0803 4.51768 10.7203 4.87768 10.7203 5.31768C10.7203 5.75768 11.0803 6.11768 11.5203 6.11768ZM8.62028 14.7177H15.7203C16.1603 14.7177 16.5203 14.3577 16.5203 13.9177C16.5203 13.4777 16.1603 13.1177 15.7203 13.1177H8.62028C8.18028 13.1177 7.82028 13.4777 7.82028 13.9177C7.82028 14.3577 8.18028 14.7177 8.62028 14.7177Z"
                            fill="#007DC1"
                          />
                        </svg>
                        <span className="text-sm text-skin-gray-900 font-normal">
                          15 Sep, 2024
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1_3781)">
                            <path
                              d="M20.175 3.31787H5.17505C4.07505 3.31787 3.17505 4.21787 3.17505 5.31787V19.3179C3.17505 20.4179 4.07505 21.3179 5.17505 21.3179H20.175C21.275 21.3179 22.175 20.4179 22.175 19.3179V5.31787C22.175 4.21787 21.275 3.31787 20.175 3.31787ZM20.175 5.31787V8.31787H5.17505V5.31787H20.175ZM15.175 19.3179H10.175V10.3179H15.175V19.3179ZM5.17505 10.3179H8.17505V19.3179H5.17505V10.3179ZM17.175 19.3179V10.3179H20.175V19.3179H17.175Z"
                              fill="#007DC1"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_3781">
                              <rect
                                width={24}
                                height={24}
                                fill="white"
                                transform="translate(0.175049 0.317871)"
                              />
                            </clipPath>
                          </defs>
                        </svg>

                        <span className="text-sm text-skin-gray-900 font-normal">
                          Times Of India
                        </span>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg lg:max-w-[85%] font-semibold capitalize text-skin-primary-1000">
                        Top 10 Mystery Shopping Companies in India
                      </h2>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-skin-neutral-400">
                        Do you wish to earn Rs.1,OOO or more per day for
                        shopping, staying at hotels or dining out or wish to
                        improve customer of your business? the answers are yes
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex pt-8 justify-center gap-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Section8;
