import { cn } from "@/lib/utils";

const Section3 = () => {
  const ITEMS = [
    {
      name: "Mystery Shopping",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
        >
          <g clip-path="url(#clip0_1_3456)">
            <path
              d="M8.12047 9.22217H29.1205C29.9455 9.22217 30.6205 8.54717 30.6205 7.72217C30.6205 6.89717 29.9455 6.22217 29.1205 6.22217H8.12047C7.29547 6.22217 6.62047 6.89717 6.62047 7.72217C6.62047 8.54717 7.29547 9.22217 8.12047 9.22217ZM30.8605 11.9222C30.7255 11.2322 30.1105 10.7222 29.3905 10.7222H7.85047C7.13047 10.7222 6.51547 11.2322 6.38047 11.9222L4.88047 19.4222C4.70047 20.3522 5.40547 21.2222 6.35047 21.2222H6.62047V28.7222C6.62047 29.5472 7.29547 30.2222 8.12047 30.2222H20.1205C20.9455 30.2222 21.6205 29.5472 21.6205 28.7222V21.2222H27.6205V28.7222C27.6205 29.5472 28.2955 30.2222 29.1205 30.2222C29.9455 30.2222 30.6205 29.5472 30.6205 28.7222V21.2222H30.8905C31.8355 21.2222 32.5405 20.3522 32.3605 19.4222L30.8605 11.9222V11.9222ZM18.6205 27.2222H9.62047V21.2222H18.6205V27.2222Z"
              fill="#007DC1"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_3456">
              <rect
                width="36"
                height="36"
                fill="white"
                transform="translate(0.620361 0.222168)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      des: "Get valuable insights into your store's customer experience",
      slug: "",
    },
    {
      name: "Consumer Insights",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={18}
          viewBox="0 0 32 18"
          fill="none"
        >
          <path
            d="M31.5331 3.11833C31.5331 4.69148 30.246 5.97861 28.6728 5.97861C28.4154 5.97861 28.1723 5.95001 27.9435 5.8785L22.8522 10.9555C22.9237 11.1843 22.9523 11.4417 22.9523 11.6992C22.9523 13.2723 21.6652 14.5594 20.092 14.5594C18.5188 14.5594 17.2317 13.2723 17.2317 11.6992C17.2317 11.4417 17.2603 11.1843 17.3318 10.9555L13.685 7.30864C13.4562 7.38014 13.1987 7.40875 12.9413 7.40875C12.6839 7.40875 12.4265 7.38014 12.1976 7.30864L5.69051 13.8301C5.76202 14.0589 5.79062 14.302 5.79062 14.5594C5.79062 16.1326 4.5035 17.4197 2.93034 17.4197C1.35719 17.4197 0.0700684 16.1326 0.0700684 14.5594C0.0700684 12.9863 1.35719 11.6992 2.93034 11.6992C3.18777 11.6992 3.43089 11.7278 3.65971 11.7993L10.1811 5.29214C10.1096 5.06332 10.081 4.8059 10.081 4.54847C10.081 2.97532 11.3682 1.68819 12.9413 1.68819C14.5145 1.68819 15.8016 2.97532 15.8016 4.54847C15.8016 4.8059 15.773 5.06332 15.7015 5.29214L19.3483 8.93899C19.5771 8.86749 19.8346 8.83889 20.092 8.83889C20.3494 8.83889 20.6069 8.86749 20.8357 8.93899L25.9127 3.8477C25.8412 3.61888 25.8126 3.37576 25.8126 3.11833C25.8126 1.54518 27.0997 0.258057 28.6728 0.258057C30.246 0.258057 31.5331 1.54518 31.5331 3.11833Z"
            fill="#007DC1"
          />
        </svg>
      ),
      des: "Understand your target audience and their preferences",
      slug: "",
    },
    {
      name: "Market Research",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={36}
          height={36}
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M28.5 4.5H7.5C5.85 4.5 4.5 5.85 4.5 7.5V28.5C4.5 30.15 5.85 31.5 7.5 31.5H28.5C30.15 31.5 31.5 30.15 31.5 28.5V7.5C31.5 5.85 30.15 4.5 28.5 4.5ZM28.5 28.5H7.5V7.5H28.5V28.5Z"
            fill="#007DC1"
          />
          <path d="M13.5 18H10.5V25.5H13.5V18Z" fill="#007DC1" />
          <path d="M25.5 10.5H22.5V25.5H25.5V10.5Z" fill="#007DC1" />
          <path d="M19.5 21H16.5V25.5H19.5V21Z" fill="#007DC1" />
          <path d="M19.5 15H16.5V18H19.5V15Z" fill="#007DC1" />
        </svg>
      ),
      des: "Stay ahead of the competition with in-depth market analysis",
      slug: "",
    },
    {
      name: "Retail Audits",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={36}
          height={36}
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            opacity="0.2"
            d="M4.65579 10.4929C4.55376 10.666 4.49996 10.8632 4.5 11.0641V24.9357C4.5 25.1353 4.55311 25.3313 4.65389 25.5037C4.75467 25.676 4.89947 25.8184 5.07346 25.9162L17.4485 32.8772C17.6168 32.9719 17.8068 33.0217 18 33.0216L18.0015 33.0216L18.1335 17.9999L4.65581 10.4929L4.65579 10.4929Z"
            fill="white"
          />
          <path
            d="M31.5 24.9358V11.0642C31.5 10.8646 31.4469 10.6686 31.3461 10.4963C31.2453 10.3239 31.1005 10.1816 30.9265 10.0837L18.5515 3.12275C18.3832 3.02803 18.1932 2.97827 18 2.97827C17.8068 2.97827 17.6168 3.02803 17.4485 3.12275L5.07346 10.0837C4.89947 10.1816 4.75467 10.3239 4.65389 10.4963C4.55311 10.6686 4.5 10.8646 4.5 11.0642V24.9358C4.5 25.1354 4.55311 25.3314 4.65389 25.5038C4.75467 25.6761 4.89947 25.8185 5.07346 25.9163L17.4485 32.8773C17.6168 32.972 17.8068 33.0217 18 33.0217C18.1932 33.0217 18.3832 32.972 18.5515 32.8773L30.9265 25.9163C31.1005 25.8185 31.2453 25.6761 31.3461 25.5038C31.4469 25.3314 31.5 25.1354 31.5 24.9358Z"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.8937 21.4469V14.1344L11.25 6.60938"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.3448 10.4943L18.1334 17.9999L4.65576 10.4929"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.1335 18L18.0015 33.0217"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      des: "Ensure compliance and optimize store operations",
      slug: "",
    },
  ];
  return (
    <section className="pb-10 container lg:pb-20 relative">
      <div className=" max-w-[1020px] mx-auto pt-10  xl:pt-16 grid lg:grid-cols-2 gap-5">
        {ITEMS.map((item, index) => (
          <div
            style={{
              boxShadow: "0px 12px 56px 0px rgba(6, 28, 61, 0.12)",
            }}
            className="bg-white flex flex-col gap-y-5 rounded-[10px]  px-5 lg:px-10 py-5 xl:py-7"
            key={index}
          >
            <div
              className={cn(
                "w-[76px] h-[76px] rounded-[8px] grid place-items-center",
                index === 3 ? "bg-skin-primary" : "bg-skin-primary-50"
              )}
            >
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl xl:text-2xl font-bold text-skin-primary-900">
                {item.name}
              </h3>
              <h6 className="pt-3 max-w-[85%] text-base xl:text-lg font-normal font-lato text-skin-neutral-400">
                {item.des}
              </h6>
            </div>
            <div>
              <button className="inline-flex border-b-2 border-skin-primary pb-0.5 items-center gap-3">
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
      <svg
        className=" hidden xl:block absolute top-28 -z-10 right-0 2xl:-right-[9.5rem]"
        width={467}
        height={605}
        viewBox="0 0 467 605"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="0.08"
          x="273.963"
          width="177.577"
          height="177.577"
          rx="29.2263"
          transform="rotate(45 273.963 0)"
          fill="#11ABFF"
        />
        <rect
          opacity="0.08"
          x="365.283"
          y="205.471"
          width="177.577"
          height="177.577"
          rx="29.2263"
          transform="rotate(45 365.283 205.471)"
          fill="#11ABFF"
        />
        <rect
          opacity="0.08"
          x="216.887"
          y="353.868"
          width="177.577"
          height="177.577"
          rx="29.2263"
          transform="rotate(45 216.887 353.868)"
          fill="#11ABFF"
        />
        <rect
          opacity="0.08"
          x="125.566"
          y="148.396"
          width="177.577"
          height="177.577"
          rx="29.2263"
          transform="rotate(45 125.566 148.396)"
          fill="#11ABFF"
        />
      </svg>
    </section>
  );
};

export default Section3;
