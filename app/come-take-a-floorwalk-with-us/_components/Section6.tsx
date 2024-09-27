import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

const LIST_ITEM_DATA = [
  {
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={65}
        height={57}
        viewBox="0 0 65 57"
        fill="none"
      >
        <path
          d="M65 38.2739C65 48.2151 56.9411 56.2739 47 56.2739L20 56.2739C17.2386 56.2739 15 54.0353 15 51.2739L15 17.2739C15 11.7511 19.4772 7.27393 25 7.27393L60 7.27393C62.7614 7.27393 65 9.5125 65 12.2739L65 38.2739Z"
          fill="#D7F1FF"
        />
        <mask
          id="mask0_1_4409"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={48}
          height={49}
        >
          <rect y="0.273926" width={48} height={48} fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1_4409)">
          <path
            d="M32.9998 19.7739C32.1665 19.7739 31.4581 19.4823 30.8748 18.8989C30.2915 18.3156 29.9998 17.6073 29.9998 16.7739C29.9998 15.9406 30.2915 15.2323 30.8748 14.6489C31.4581 14.0656 32.1665 13.7739 32.9998 13.7739C33.8331 13.7739 34.5415 14.0656 35.1248 14.6489C35.7081 15.2323 35.9998 15.9406 35.9998 16.7739C35.9998 17.6073 35.7081 18.3156 35.1248 18.8989C34.5415 19.4823 33.8331 19.7739 32.9998 19.7739ZM14.9998 19.7739C14.1665 19.7739 13.4581 19.4823 12.8748 18.8989C12.2915 18.3156 11.9998 17.6073 11.9998 16.7739C11.9998 15.9406 12.2915 15.2323 12.8748 14.6489C13.4581 14.0656 14.1665 13.7739 14.9998 13.7739C15.8331 13.7739 16.5415 14.0656 17.1248 14.6489C17.7081 15.2323 17.9998 15.9406 17.9998 16.7739C17.9998 17.6073 17.7081 18.3156 17.1248 18.8989C16.5415 19.4823 15.8331 19.7739 14.9998 19.7739ZM23.9998 25.2739C23.1665 25.2739 22.4581 24.9823 21.8748 24.3989C21.2915 23.8156 20.9998 23.1073 20.9998 22.2739C20.9998 21.4406 21.2915 20.7323 21.8748 20.1489C22.4581 19.5656 23.1665 19.2739 23.9998 19.2739C24.8331 19.2739 25.5415 19.5656 26.1248 20.1489C26.7081 20.7323 26.9998 21.4406 26.9998 22.2739C26.9998 23.1073 26.7081 23.8156 26.1248 24.3989C25.5415 24.9823 24.8331 25.2739 23.9998 25.2739ZM23.9998 14.2739C23.1665 14.2739 22.4581 13.9823 21.8748 13.3989C21.2915 12.8156 20.9998 12.1073 20.9998 11.2739C20.9998 10.4406 21.2915 9.73226 21.8748 9.14893C22.4581 8.56559 23.1665 8.27393 23.9998 8.27393C24.8331 8.27393 25.5415 8.56559 26.1248 9.14893C26.7081 9.73226 26.9998 10.4406 26.9998 11.2739C26.9998 12.1073 26.7081 12.8156 26.1248 13.3989C25.5415 13.9823 24.8331 14.2739 23.9998 14.2739ZM23.9998 40.2739C23.3331 40.2739 22.6581 40.2239 21.9748 40.1239C21.2915 40.0239 20.6331 39.8906 19.9998 39.7239V32.5739C19.9998 31.4073 20.3915 30.3989 21.1748 29.5489C21.9581 28.6989 22.8998 28.2739 23.9998 28.2739C25.0998 28.2739 26.0415 28.6989 26.8248 29.5489C27.6081 30.3989 27.9998 31.4073 27.9998 32.5739V39.7239C27.3665 39.8906 26.7081 40.0239 26.0248 40.1239C25.3415 40.2239 24.6665 40.2739 23.9998 40.2739ZM16.9998 38.6739C16.3331 38.4073 15.6915 38.1073 15.0748 37.7739C14.4581 37.4406 13.8665 37.0739 13.2998 36.6739C12.3665 36.0073 11.6248 35.1406 11.0748 34.0739C10.5248 33.0073 10.2498 31.8739 10.2498 30.6739C10.2498 29.8073 10.1581 28.9989 9.9748 28.2489C9.79147 27.4989 9.46647 26.7906 8.9998 26.1239C8.66647 25.6906 8.04147 25.0323 7.1248 24.1489C6.20814 23.2656 5.36647 22.4406 4.5998 21.6739C4.23314 21.3073 4.0498 20.8406 4.0498 20.2739C4.0498 19.7073 4.23314 19.2406 4.5998 18.8739C4.96647 18.5073 5.43314 18.3239 5.9998 18.3239C6.56647 18.3239 7.03314 18.5073 7.3998 18.8739L15.0498 26.1239C15.7165 26.7239 16.2081 27.4323 16.5248 28.2489C16.8415 29.0656 16.9998 29.9073 16.9998 30.7739V38.6739ZM30.9998 38.6739V30.7739C30.9998 29.9073 31.1665 29.0573 31.4998 28.2239C31.8331 27.3906 32.3165 26.6906 32.9498 26.1239L40.5998 18.8739C40.9998 18.5073 41.4748 18.3239 42.0248 18.3239C42.5748 18.3239 43.0331 18.5073 43.3998 18.8739C43.7665 19.2406 43.9498 19.7073 43.9498 20.2739C43.9498 20.8406 43.7665 21.3073 43.3998 21.6739C42.6331 22.4406 41.7915 23.2573 40.8748 24.1239C39.9581 24.9906 39.3331 25.6573 38.9998 26.1239C38.5331 26.7906 38.2081 27.4989 38.0248 28.2489C37.8415 28.9989 37.7498 29.8073 37.7498 30.6739C37.7498 31.8739 37.4748 33.0156 36.9248 34.0989C36.3748 35.1823 35.6165 36.0573 34.6498 36.7239C34.1165 37.0906 33.5415 37.4406 32.9248 37.7739C32.3081 38.1073 31.6665 38.4073 30.9998 38.6739Z"
            fill="#11ABFF"
          />
        </g>
      </svg>
    ),
    title: "Large Shopper Base",
    des: "A large database of certified mystery shopper profiles to match your target customer. For Mystery Shopping in India You can select shopper basis gender,age, income group, education, work experience and many more criteria",
  },
  {
    icons: (
      <svg
        width={65}
        height={57}
        viewBox="0 0 65 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M65 38.2739C65 48.2151 56.9411 56.2739 47 56.2739L20 56.2739C17.2386 56.2739 15 54.0353 15 51.2739L15 17.2739C15 11.7511 19.4772 7.27393 25 7.27393L60 7.27393C62.7614 7.27393 65 9.5125 65 12.2739L65 38.2739Z"
          fill="#D7F1FF"
        />
        <g clipPath="url(#clip0_1_4418)">
          <path
            d="M22 28H18C18 18.06 26.06 10 36 10V14C28.26 14 22 20.26 22 28ZM36 22V18C30.48 18 26 22.48 26 28H30C30 24.68 32.68 22 36 22ZM14 8C14 5.78 12.22 4 10 4C7.78 4 6 5.78 6 8C6 10.22 7.78 12 10 12C12.22 12 14 10.22 14 8ZM22.9 9H18.9C18.42 11.84 15.98 14 13 14H7C5.34 14 4 15.34 4 17V22H16V17.48C19.72 16.3 22.5 13.02 22.9 9ZM38 34C40.22 34 42 32.22 42 30C42 27.78 40.22 26 38 26C35.78 26 34 27.78 34 30C34 32.22 35.78 34 38 34ZM41 36H35C32.02 36 29.58 33.84 29.1 31H25.1C25.5 35.02 28.28 38.3 32 39.48V44H44V39C44 37.34 42.66 36 41 36Z"
            fill="#11ABFF"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_4418">
            <rect width={48} height={48} fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Ask the Experts",
    des: "FloorWalk is a panel of experts withyears of experience in Retail and Hospitality industries. We do MysteryShopping with a passion to improve the service, and not to justfill the audit forms We analyse and share recommendations and not just plain data sheets.",
  },
  {
    icons: (
      <svg
        width={65}
        height={57}
        viewBox="0 0 65 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M65 38.2739C65 48.2151 56.9411 56.2739 47 56.2739L20 56.2739C17.2386 56.2739 15 54.0353 15 51.2739L15 17.2739C15 11.7511 19.4772 7.27393 25 7.27393L60 7.27393C62.7614 7.27393 65 9.5125 65 12.2739L65 38.2739Z"
          fill="#D7F1FF"
        />
        <g clipPath="url(#clip0_1_4426)">
          <path
            d="M38 6.27393H10C7.8 6.27393 6 8.07393 6 10.2739V38.2739C6 40.4739 7.8 42.2739 10 42.2739H38C40.2 42.2739 42 40.4739 42 38.2739V10.2739C42 8.07393 40.2 6.27393 38 6.27393ZM38 38.2739H10V10.2739H38V38.2739Z"
            fill="#11ABFF"
          />
          <path d="M18 24.2739H14V34.2739H18V24.2739Z" fill="#11ABFF" />
          <path d="M34 14.2739H30V34.2739H34V14.2739Z" fill="#11ABFF" />
          <path d="M26 28.2739H22V34.2739H26V28.2739Z" fill="#11ABFF" />
          <path d="M26 20.2739H22V24.2739H26V20.2739Z" fill="#11ABFF" />
        </g>
        <defs>
          <clipPath id="clip0_1_4426">
            <rect
              width={48}
              height={48}
              fill="white"
              transform="translate(0 0.273926)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Quality Analytics",
    des: "Get comparative analysis for a range of locations audited over a period of time. See how a parameter is delivered across your chain, or which store excels all criteria. Reports are fluid and graphics give an easy snapshot for various management levels",
  },
  {
    icons: (
      <svg
        width={65}
        height={57}
        viewBox="0 0 65 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M65 38.2739C65 48.2151 56.9411 56.2739 47 56.2739L20 56.2739C17.2386 56.2739 15 54.0353 15 51.2739L15 17.2739C15 11.7511 19.4772 7.27393 25 7.27393L60 7.27393C62.7614 7.27393 65 9.5125 65 12.2739L65 38.2739Z"
          fill="#D7F1FF"
        />
        <g clipPath="url(#clip0_1_4434)">
          <path d="M44 14H26V18H44V14Z" fill="#11ABFF" />
          <path d="M44 30H26V34H44V30Z" fill="#11ABFF" />
          <path d="M44 22H32V26H44V22Z" fill="#11ABFF" />
          <path d="M26 24L16 14V22H4V26H16V34L26 24Z" fill="#11ABFF" />
        </g>
        <defs>
          <clipPath id="clip0_1_4434">
            <rect width={48} height={48} fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Range of Services",
    des: "Customer Service or Onsite Execution, Product Knowledge or Speed of billing, Competition Price Benchmarking or market survey, we have got it all covered.",
  },
];

const Section6 = () => {
  return (
    <section>
      <div className="container">
        <div>
          <p className="text-center text-xl  font-normal text-skin-neutral-600">
            Watch this 90 seconds video to know how can FloorWalk help you
            improve your Consumer Experience.
          </p>
        </div>
        <HeroVideoDialog
          className=" max-w-[760px] mx-auto py-10 block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="/images/video.png"
          thumbnailAlt="Hero Video"
        />
      </div>
      <div className="py-10 xl:max-w-[1380px] container xl:py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-9 xl:grid-cols-4">
        {LIST_ITEM_DATA.map((item, index) => (
          <div
            key={index}
            style={{
              boxShadow: "4px 4px 55px 0px rgba(30, 30, 30, 0.12)",
            }}
            className="px-7 py-6 gap-y-4 rounded-[8px] flex flex-col items-center "
          >
            <div>{item.icons}</div>
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
    </section>
  );
};

export default Section6;
