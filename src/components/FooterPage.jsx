import { footerContent } from "@/constants";

// Assuming you have imported the necessary icons and stored them in variables

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-white py-6 ">
      <div className="flex flex-col text-center mx-5 lg:flex lg:flex-row lg:justify-between  lg:mx-10">
        <div className="flex flex-col ">
          <h3 className="text-base sm:text-xl lg:text-2xl">
            Follow us for more events & things...
          </h3>
          <p className=""> &copy; 2024. All rights are Reserved</p>
        </div>

        <div className="flex justify-center text-center gap-2 ">
          {footerContent.map((item) => (
            <a key={item.id} href={item.url} className="mx-2">
              {item.isText ? (
                <span className="text-lg">{item.title}</span>
              ) : (
                <div className="text-4xl lg:text-5xl ">
                  <item.logo />
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
