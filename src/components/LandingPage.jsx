import { landingPageTitles } from "@/constants";
import Carousel from "./subComponents/Carousel";

const LandingPage = () => {
  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];
  const [filteredContent] = landingPageTitles.filter((obj) => obj.id === "1");
  return (
    <>
      <div className="flex flex-col justify-center mt-14 lg:mt-5 lg:flex-row ">
        {/* Title */}
        <div className="px-5 py-2">
          <div className="w-full">
            <h1 className="heading mb-4 tracking-wider">
              {filteredContent.title}
            </h1>
            <p className="text-left text mb-4 leading-relaxed text-[1rem] md:text-[1.15rem] xl:text-[1.42rem]">
              {filteredContent.text}
            </p>
          </div>
        </div>
        <div className="">
          <div className=" w-full px-40 lg:right-2 lg:w-1/2 lg:px-0 ">
            {/* <Carousel>
            {slides.map((s, i) => (
              <img key={i} src={s} alt="img" />
            ))}
          </Carousel> */}
          </div>
        </div>
      </div>
      <div className="w-full border-b  border-b-yellow-400" />
    </>
  );
};

export default LandingPage;
