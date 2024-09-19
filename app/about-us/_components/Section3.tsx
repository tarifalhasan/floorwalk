import Image from "next/image";

const Section3 = () => {
  return (
    <section className="container pb-10 lg:pb-20">
      <div>
        <h1 className="text-center max-w-[868px] mx-auto text-[2rem] lg:text-[2.5rem]  leading-[110%] font-bold text-skin-primary-900">
          Our Culture
        </h1>
      </div>
      <div className="pt-8 lg:pt-10 flex flex-col xl:flex-row gap-6 lg:gap-10">
        <div className="basis-full xl:basis-[40%]">
          <Image
            src={"/images/Our Culture.png"}
            alt="Sourabh"
            width={604}
            className="w-full block object-cover rounded-[16px] lg:min-h-[265px] mx-auto lg:w-auto"
            height={587}
            quality={80}
          />
        </div>
        <div className="basis-full xl:basis-[60%]">
          <div className="space-y-3">
            <p className="text-lg font-normal text-skin-gray-700 font-lato">
              Innovating Solution driven ideas Groundbreaking Ideas. New
              Concepts. Consumer Focused. That’s how we at FloorWalk spell
              Innovation as. Our “ideas-first” approach enable us to brainstorm
              and yield solutions that are tailor made to the best of our
              customers’ preferences. Technological advancements To create value
              in an ever-evolving business environment, FloorWalk understands
              and imbibes the principle of Adaptation as the key to success.
              With the accelerating pace of technological advancements,
              FloorWalk leaps ahead in the industry by adapting to these changes
              and producing best in class solutions for their customers
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
      </div>
    </section>
  );
};

export default Section3;
