import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import Image from "next/image";

const Section6 = () => {
  return (
    <div>
      <div className="container">
        <div>
          <p className="text-center text-xl  font-normal text-skin-neutral-600">
            Watch this 90 seconds video to know how can FloorWalk help you
            improve your Consumer Experience.
          </p>
        </div>
        <HeroVideoDialog
          className="dark:hidden py-10 block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="/images/video.png"
          thumbnailAlt="Hero Video"
        />
      </div>
      <div className="py-10 xl:py-20 bg-skin-secondary">
        <div>
          <h2 className="text-[2rem] leading-[100%] tracking-[1px] capitalize text-center text-white 0 font-bold xl:text-[2.5rem]">
            Read more about Mystery Shopping & its Types
          </h2>
          <div className="space-y-2">
            <p className="text-base max-w-[85%] pt-2 lg:max-w-[75%] xl:max-w-[55%] 2xl:max-w-[972px] mx-auto text-center xl:text-xl text-white font-normal font-lato">
              Businesses turn to Mystery shopping services because these
              services offer a number of benefits for companies. Many companies
              report that these services help them to:
            </p>
            <p className="text-base max-w-[85%] pt-2 lg:max-w-[75%] xl:max-w-[55%] 2xl:max-w-[972px] mx-auto text-center xl:text-xl text-white font-normal font-lato">
              People who perform Mystery Shopping are referred to as Mystery
              Shoppers or Mystery Evaluators and get paid on per shop/audit
              basis post the successful submission of their reports along with
              requisite proofs. Mystery Shopping helps businesses and
              organizations to identify areas that need improvement. It is a
              very important tool in any business&apos;s arsenal. Mystery
              Shopping serves just as a blood test diagnostic of any
              organization, bringing out the deficiencies in the areas of
              operations. There are various forms of Mystery evaluations.
            </p>
          </div>
        </div>
        <div className="pt-10 container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 gap-8 grid grid-cols-11">
              <div
                style={{
                  boxShadow: "4px 4px 55px 0px rgba(0, 0, 0, 0.12)",
                }}
                className="col-span-11 relative bg-skin-base-white rounded-[10px] p-4 lg:col-span-6"
              >
                <div className="space-y-2">
                  <h2 className=" max-w-[70%] leading-[90%] text-skin-neutral-800 text-xl lg:text-2xl font-bold">
                    Mystery calling
                  </h2>
                  <p className="text-sm font-lato font-semibold text-skin-neutral-400">
                    An Organizations help desk or sales desk is the
                    &apso;heart&apso; of it&apso; s business. Many times you
                    would be asked to evaluate a place by &apso;Calling In&apso;
                    at their call centre or boardline number and provide various
                    details like call opening, voice tone, rapport building,
                    effective listening, professionalism, enthusiasm, sales,
                    cross selling, upselling, closing etc..The call checks can
                    be separate evaluations or part of the regular shop checks.
                  </p>
                </div>
                <div className=" w-[62px] h-[62px] absolute -top-1 -right-4 rounded-full border-2 grid place-items-center border-skin-secondary bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.0504 5C16.0272 5.19057 16.9248 5.66826 17.6285 6.37194C18.3322 7.07561 18.8099 7.97326 19.0004 8.95M15.0504 1C17.0797 1.22544 18.972 2.13417 20.4167 3.57701C21.8613 5.01984 22.7724 6.91101 23.0004 8.94M22.0004 16.92V19.92C22.0016 20.1985 21.9445 20.4742 21.8329 20.7293C21.7214 20.9845 21.5577 21.2136 21.3525 21.4019C21.1473 21.5901 20.905 21.7335 20.6412 21.8227C20.3773 21.9119 20.0978 21.9451 19.8204 21.92C16.7433 21.5856 13.7874 20.5341 11.1904 18.85C8.77425 17.3147 6.72576 15.2662 5.19042 12.85C3.5004 10.2412 2.44866 7.27099 2.12042 4.18C2.09543 3.90347 2.1283 3.62476 2.21692 3.36162C2.30555 3.09849 2.44799 2.85669 2.63519 2.65162C2.82238 2.44655 3.05023 2.28271 3.30421 2.17052C3.5582 2.05833 3.83276 2.00026 4.11042 2H7.11042C7.59573 1.99522 8.06621 2.16708 8.43418 2.48353C8.80215 2.79999 9.0425 3.23945 9.11042 3.72C9.23704 4.68007 9.47187 5.62273 9.81042 6.53C9.94497 6.88792 9.97408 7.27691 9.89433 7.65088C9.81457 8.02485 9.62928 8.36811 9.36042 8.64L8.09042 9.91C9.51398 12.4135 11.5869 14.4864 14.0904 15.91L15.3604 14.64C15.6323 14.3711 15.9756 14.1858 16.3495 14.1061C16.7235 14.0263 17.1125 14.0555 17.4704 14.19C18.3777 14.5286 19.3204 14.7634 20.2804 14.89C20.7662 14.9585 21.2098 15.2032 21.527 15.5775C21.8441 15.9518 22.0126 16.4296 22.0004 16.92Z"
                      stroke="#007DC1"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                style={{
                  boxShadow: "4px 4px 55px 0px rgba(0, 0, 0, 0.12)",
                }}
                className="col-span-11 relative bg-skin-base-white rounded-[10px] p-4 lg:col-span-5"
              >
                <div className="space-y-2">
                  <h2 className=" max-w-[70%] leading-[90%] text-skin-neutral-800 text-xl lg:text-2xl font-bold">
                    Mystery shopping at store
                  </h2>
                  <p className="text-sm font-lato font-semibold text-skin-neutral-400">
                    A shop check would mean visiting the designated outlets and
                    reviewing the outlet against the predefined parameters. It
                    is needless to mention here that the entire visit remains
                    anonymous, unless required otherwise.
                  </p>
                </div>
                <div className=" w-[62px] h-[62px] absolute -top-1 -right-4 rounded-full border-2 grid place-items-center border-skin-secondary bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={28}
                    height={28}
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_4085)">
                      <path
                        d="M5.74083 6.88907H21.8149C22.4464 6.88907 22.963 6.3724 22.963 5.74092C22.963 5.10944 22.4464 4.59277 21.8149 4.59277H5.74083C5.10934 4.59277 4.59268 5.10944 4.59268 5.74092C4.59268 6.3724 5.10934 6.88907 5.74083 6.88907ZM23.1468 8.95574C23.0434 8.42759 22.5727 8.03722 22.0216 8.03722H5.53416C4.98305 8.03722 4.51231 8.42759 4.40897 8.95574L3.26083 14.6965C3.12305 15.4083 3.66268 16.0743 4.38601 16.0743H4.59268V21.815C4.59268 22.4465 5.10934 22.9631 5.74083 22.9631H14.926C15.5575 22.9631 16.0742 22.4465 16.0742 21.815V16.0743H20.6668V21.815C20.6668 22.4465 21.1834 22.9631 21.8149 22.9631C22.4464 22.9631 22.963 22.4465 22.963 21.815V16.0743H23.1697C23.893 16.0743 24.4327 15.4083 24.2949 14.6965L23.1468 8.95574ZM13.7779 20.6668H6.88897V16.0743H13.7779V20.6668Z"
                        fill="#007DC1"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_4085">
                        <rect width="27.5556" height="27.5556" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div
                style={{
                  boxShadow: "4px 4px 55px 0px rgba(0, 0, 0, 0.12)",
                }}
                className="col-span-11 h-[298px] relative bg-skin-base-white rounded-[10px] p-4 lg:col-span-6"
              >
                <div className="space-y-2">
                  <h2 className=" max-w-[70%] leading-[90%] text-skin-neutral-800 text-xl lg:text-2xl font-bold">
                    Price audits
                  </h2>
                  <p className="text-sm font-lato font-semibold text-skin-neutral-400">
                    Many a time, the companies set MOP (market operating prices)
                    or their products as a company policy. At times the
                    retailers sell below these prices to increase their sales,
                    jeopardizing the companies reputation in effect. In these
                    scenarios you may have to check whether the retailer offers
                    discount on specific items. You may be surprised to know
                    that implications of selling below the prices set can be as
                    severe as losing the franchise of the brand.
                  </p>
                </div>
                <div className=" w-[62px] h-[62px] absolute -top-1 -right-4 rounded-full border-2 grid place-items-center border-skin-secondary bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 1V23"
                      stroke="#007DC1"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                      stroke="#007DC1"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                style={{
                  boxShadow: "4px 4px 55px 0px rgba(0, 0, 0, 0.12)",
                }}
                className="col-span-11 relative bg-skin-base-white rounded-[10px] p-4 lg:col-span-5"
              >
                <div className="space-y-2">
                  <h2 className=" max-w-[70%] leading-[90%] text-skin-neutral-800 text-xl lg:text-2xl font-bold">
                    Announced Mystery Audits
                  </h2>
                  <p className="text-sm font-lato font-semibold text-skin-neutral-400">
                    In an announced mystery evaluation, you would be evaluating
                    the location and if certain standards are met with, you
                    would be revealing yourself as a mystery evaluator and also,
                    at times, reward an employee or the location itself. It may
                    also mean evaluating the location with prior intimation to
                    the incharge there.
                  </p>
                </div>
                <div className=" w-[62px] h-[62px] absolute -top-1 -right-4 rounded-full border-2 grid place-items-center border-skin-secondary bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
                      fill="#007DC1"
                    />
                    <path d="M9 12H7V17H9V12Z" fill="#007DC1" />
                    <path d="M17 7H15V17H17V7Z" fill="#007DC1" />
                    <path d="M13 14H11V17H13V14Z" fill="#007DC1" />
                    <path d="M13 10H11V12H13V10Z" fill="#007DC1" />
                  </svg>
                </div>
              </div>

              <div
                style={{
                  boxShadow: "4px 4px 55px 0px rgba(0, 0, 0, 0.12)",
                }}
                className="col-span-11 relative bg-skin-base-white rounded-[10px] p-4 lg:col-span-5"
              >
                <div className="space-y-2">
                  <h2 className=" max-w-[70%] leading-[90%] text-skin-neutral-800 text-xl lg:text-2xl font-bold">
                    Integrity checks
                  </h2>
                  <p className="text-sm font-lato max-w-[92%]  font-semibold text-skin-neutral-400">
                    In this scenario, the secret evaluation is aimed to check
                    the employees integrity and honesty by creating a scenario
                    like paying lesser amount and purchasing something without
                    bill or bribing the employee for something. Temptation plus
                    opportunity often give way to dishonesty, this checks help
                    in preventing thefts and loss to the organizations profit
                    and goodwill.
                  </p>
                </div>
                <div className=" w-[62px] h-[62px] absolute -top-1 -right-4 rounded-full border-2 grid place-items-center border-skin-secondary bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_4148)">
                      <path
                        d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM14.5 12.59L15.4 16.47L12 14.42L8.6 16.47L9.5 12.6L6.5 10.01L10.46 9.67L12 6.02L13.54 9.66L17.5 10L14.5 12.59Z"
                        fill="#007DC1"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_4148">
                        <rect width={24} height={24} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div
                style={{
                  boxShadow: "4px 4px 55px 0px rgba(0, 0, 0, 0.12)",
                }}
                className="col-span-11 relative bg-skin-base-white rounded-[10px] p-4 lg:col-span-6"
              >
                <div className="space-y-2">
                  <h2 className=" max-w-[70%] leading-[90%] text-skin-neutral-800 text-xl lg:text-2xl font-bold">
                    Competition benchmarking
                  </h2>
                  <p className="text-sm font-lato font-semibold text-skin-neutral-400">
                    While most of the evaluations you do, would be done at
                    clients own location, there would be a few which have to be
                    done at competitors locations with various motives on mind,
                    eg- Comparing the industry standards,price checks, brand
                    recommendation by sales staff, feasibility study for new
                    outlet, introducing a new product, marketing or promotional
                    activities of companies, etc.
                  </p>
                </div>
                <div className=" w-[62px] h-[62px] absolute -top-1 -right-4 rounded-full border-2 grid place-items-center border-skin-secondary bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_4160)">
                      <path
                        d="M11 14H9C9 9.03 13.03 5 18 5V7C14.13 7 11 10.13 11 14ZM18 11V9C15.24 9 13 11.24 13 14H15C15 12.34 16.34 11 18 11ZM7 4C7 2.89 6.11 2 5 2C3.89 2 3 2.89 3 4C3 5.11 3.89 6 5 6C6.11 6 7 5.11 7 4ZM11.45 4.5H9.45C9.21 5.92 7.99 7 6.5 7H3.5C2.67 7 2 7.67 2 8.5V11H8V8.74C9.86 8.15 11.25 6.51 11.45 4.5ZM19 17C20.11 17 21 16.11 21 15C21 13.89 20.11 13 19 13C17.89 13 17 13.89 17 15C17 16.11 17.89 17 19 17ZM20.5 18H17.5C16.01 18 14.79 16.92 14.55 15.5H12.55C12.75 17.51 14.14 19.15 16 19.74V22H22V19.5C22 18.67 21.33 18 20.5 18Z"
                        fill="#007DC1"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_4160">
                        <rect width={24} height={24} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 gap-8 grid grid-rows-2 ">
              <div
                style={{
                  boxShadow: "4px 4px 55px 0px rgba(0, 0, 0, 0.12)",
                }}
                className="col-span-11 relative bg-skin-base-white rounded-[10px] pt-4 px-4 lg:col-span-6"
              >
                <div className="space-y-2">
                  <h2 className=" max-w-[70%] leading-[90%] text-skin-neutral-800 text-xl lg:text-2xl font-bold">
                    Web checks
                  </h2>
                  <p className="text-sm font-lato font-semibold text-skin-neutral-400">
                    The webchecks aim at gauging the website in terms of meeting
                    the customer expectations, number of clicks or select to
                    order, cycle and overall customer experience such as the GUI
                    (Graphical User Interface) and user friendliness. The
                    mystery shopping industry would present you with numerous
                    scenarios once you start working as a Mystery Shopper.
                  </p>
                </div>
                <div className=" w-[62px] h-[62px] absolute -top-1 -right-4 rounded-full border-2 grid place-items-center border-skin-secondary bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_3623)">
                      <path
                        d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H21V19ZM11 12H20V18H11V12Z"
                        fill="#007DC1"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_3623">
                        <rect width={24} height={24} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex  xl:absolute xl:bottom-0  xl:right-0 justify-center pt-4 space-x-[-20px] items-center">
                  <Image
                    src={"/images/Rectangle 1792.png"}
                    alt="wdsds"
                    className="opacity-10"
                    width={283}
                    height={178}
                  />
                </div>
              </div>
              <div
                style={{
                  boxShadow: "4px 4px 55px 0px rgba(0, 0, 0, 0.12)",
                }}
                className="col-span-11 relative bg-skin-base-white rounded-[10px] p-4 lg:col-span-6"
              >
                <div className="space-y-2">
                  <h2 className=" max-w-[70%] leading-[90%] text-skin-neutral-800 text-xl lg:text-2xl font-bold">
                    Objections
                  </h2>
                  <p className="text-sm font-lato max-w-[92%] font-semibold text-skin-neutral-400">
                    In either of the Mystery shopping categories, you may have
                    to raise objections to observe the response of the sales
                    associate and measure it against the set guidelines. You
                    may, for example, be asked to object at the price of the
                    shirt at the apparel store and see how the sales associate
                    justifies he price with product knowledge he has. in a
                    scenario where you are asked to raise an objection, it is
                    very important that you follow the guidelines. Failure to do
                    so may result in exclusion or no acceptance of your report
                    and therefore, leads to less or no money.
                  </p>
                </div>
                <div className=" w-[62px] h-[62px] absolute -top-1 -right-4 rounded-full border-2 grid place-items-center border-skin-secondary bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={29}
                    height={16}
                    viewBox="0 0 29 16"
                    fill="none"
                  >
                    <path
                      d="M28.2386 3.16991C28.2386 4.56827 27.0945 5.71238 25.6962 5.71238C25.4673 5.71238 25.2512 5.68695 25.0478 5.62339L20.5222 10.1363C20.5858 10.3397 20.6112 10.5685 20.6112 10.7973C20.6112 12.1957 19.4671 13.3398 18.0688 13.3398C16.6704 13.3398 15.5263 12.1957 15.5263 10.7973C15.5263 10.5685 15.5517 10.3397 15.6153 10.1363L12.3736 6.89463C12.1702 6.95819 11.9414 6.98361 11.7126 6.98361C11.4838 6.98361 11.2549 6.95819 11.0515 6.89463L5.26743 12.6915C5.33099 12.8948 5.35642 13.111 5.35642 13.3398C5.35642 14.7381 4.21231 15.8822 2.81395 15.8822C1.41559 15.8822 0.271484 14.7381 0.271484 13.3398C0.271484 11.9414 1.41559 10.7973 2.81395 10.7973C3.04277 10.7973 3.25888 10.8227 3.46228 10.8863L9.25911 5.10219C9.19554 4.89879 9.17012 4.66997 9.17012 4.44114C9.17012 3.04279 10.3142 1.89868 11.7126 1.89868C13.1109 1.89868 14.2551 3.04279 14.2551 4.44114C14.2551 4.66997 14.2296 4.89879 14.1661 5.10219L17.4077 8.34383C17.6111 8.28027 17.8399 8.25484 18.0688 8.25484C18.2976 8.25484 18.5264 8.28027 18.7298 8.34383L23.2427 3.81824C23.1791 3.61484 23.1537 3.39873 23.1537 3.16991C23.1537 1.77155 24.2978 0.627441 25.6962 0.627441C27.0945 0.627441 28.2386 1.77155 28.2386 3.16991Z"
                      fill="#007DC1"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
