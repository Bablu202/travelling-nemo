import { travelQuality } from "@/constants";
import { GiFlyingFlag } from "react-icons/gi";

const AboutNemoPage = () => {
  return (
    <section className="py-8 " id="magazine">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-left mb-8 flex uk-align-center">
          <GiFlyingFlag className="w-8 h-8 text-yellow-500 mb-4 mr-5" />
          Travel Quality
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {travelQuality.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <item.icon className="w-16 h-16 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-left ">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutNemoPage;
