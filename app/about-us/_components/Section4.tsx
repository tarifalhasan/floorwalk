import Image from "next/image";

const Section4 = () => {
  return (
    <section className="container pb-10 xl:pb-20">
      <div>
        <Image
          src={"/images/our-vision-2.png"}
          alt="our-vision-2"
          width={1088}
          height={329}
          quality={80}
          className=" w-full"
        />
      </div>
    </section>
  );
};

export default Section4;
