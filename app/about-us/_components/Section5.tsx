import Image from "next/image";

const Section5 = () => {
  return (
    <section className="container pb-10 lg:pb-20">
      <div>
        <h1 className="text-center max-w-[868px] mx-auto text-[2rem] lg:text-[2.5rem]  leading-[110%] font-bold text-skin-primary-900">
          Our Vision
        </h1>
      </div>
      <div className="pt-8 lg:pt-10 flex flex-col xl:flex-row gap-6 lg:gap-10">
        <div className="basis-full xl:basis-[60%]">
          <div className="space-y-3">
            <p className="text-lg font-normal text-skin-gray-700 font-lato">
              Our Action Oriented Approach drives Futuristic and Holistic
              solutions that are Innovative, Adaptive and Customer Ready.
              Floorwalk builds on key principals of Uplifting Customers,
              Uplifting Auditors and Uplifting Employees ensuring the best
              service standards in the industry. We have also developed and
              expanded across geogrpahies for Global learnings in Mystery
              Audits. Our Mystery Shopping software has achieved upto 95% in
              automation for Mystery Audits. Our vision by 2030 is to have
              customer excellence matrix delivered automatically to brands at
              100% automation.
            </p>
          </div>
          <div className="pt-8">
            <div
              className="w-full h-[8px] "
              style={{
                background:
                  "linear-gradient(90deg, #007DC1 0%, rgba(255, 255, 255, 0.00) 100%)",
              }}
            ></div>
          </div>
        </div>
        <div className="basis-full xl:basis-[40%]">
          <Image
            src={"/images/Our Culture.png"}
            alt="Sourabh"
            width={604}
            className="w-full block lg:min-h-[240px] object-cover rounded-[16px] mx-auto lg:w-auto"
            height={587}
            quality={80}
          />
        </div>
      </div>
    </section>
  );
};

export default Section5;
