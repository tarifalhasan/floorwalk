import Image from "next/image";

const Section2 = () => {
  return (
    <section className="container pb-10 lg:pb-20">
      <div>
        <h1 className="text-center max-w-[868px] mx-auto text-[2rem] lg:text-[2.5rem]  leading-[110%] font-bold text-skin-primary-900">
          Founders Story
        </h1>
      </div>
      <div className="pt-8 lg:pt-10 flex flex-col xl:flex-row gap-6">
        <div className="basis-full xl:basis-[70%]">
          <div className="space-y-3">
            <p className="text-lg font-normal text-skin-gray-700 font-lato">
              I’m Sourabh, a Marker Researcher and a marketing consultant by
              profession and an entrepreneur at heart.
            </p>
            <p className="text-lg font-normal text-skin-gray-700 font-lato">
              Worked with 100+ brands like Porsche, Amazon, Audi, Apple, Cipla,
              Oberoi Group etc on their Marketing & Research Projects and
              enabled them to solve their customer experience problems by
              sharing ground level consumer insights. I’ve been working in this
              industry for 8+ years and have an in-depth knowledge of know-hows
              on how big brands operate on their Marketing & Business spend
              along with automating offline and online marketing campaigns.
            </p>
            <p className="text-lg font-normal text-skin-gray-700 font-lato">
              With diverse experience in the field of retail, I have worked with
              250+ masterminds across retail industry to execute their marketing
              plans across India and auditing them through Mystery Shopping.
              With the vision of creating million opportunities, I have been
              successful in enabling a workforce of 50+ women via my venture
              FloorWalk, a Mystery audit solution for brands with presence in
              350+ cities PAN India, USA, Middle East & China and 22+ countries.
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
        <div className="basis-full xl:basis-[30%]">
          <Image
            src={"/images/Sourabh.png"}
            alt="Sourabh"
            width={604}
            className="w-full block mx-auto lg:w-auto"
            height={587}
            quality={80}
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
