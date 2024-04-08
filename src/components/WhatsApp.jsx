import { AiOutlineWhatsApp } from "react-icons/ai";

const WhatsAppButton = () => {
  const contact = "+919515365361";
  const message = "i would like to make a trip ";
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${contact}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="fixed bottom-4 right-4 bg-yellow-500 bg-opacity-80 text-white w-12 h-12 rounded-full 
      flex justify-center items-center cursor-pointer hover:bg-opacity-100"
      onClick={handleClick}
    >
      <AiOutlineWhatsApp className="text-3xl" />
    </div>
  );
};

export default WhatsAppButton;
