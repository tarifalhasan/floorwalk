import Marquee from "@/components/magicui/marquee";

const Section2 = () => {
  const cutomers = [
    "/images/amzon.png",
    "/images/Caratlane.png",
    "/images/Cars24.png",
    "/images/kpmg.png",
    "/images/shaddi.png",
  ];
  return (
    <section className="py-10 xl:py-20 container">
      <div className="space-y-2">
        <h2 className="text-[2rem] leading-[100%] tracking-[1px] capitalize text-center text-skin-primary-1000 font-bold xl:text-[2.5rem]">
          Our Marquee Customers
        </h2>
        <p className="text-base text-center xl:text-xl text-skin-neutral-600 font-normal font-lato">
          Trusted by the world&apos;s most customer-focused companies
        </p>
      </div>
      <div className="mt-5 bg-skin-base-white px-10 py-5">
        <Marquee pauseOnHover className="[--duration:20s] bg-white">
          {cutomers.map((item, i) => (
            <img
              className="w-[15%] object-contain aspect-[3/2]"
              src={item}
              alt="dsfdf"
              key={i}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Section2;
