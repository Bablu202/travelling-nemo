import AboutNemoPage from "./components/AboutNemoPage";
import Footer from "./components/FooterPage";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import RatingAndReview from "./components/RatingAndReview ";
import TravelForm from "./components/TravelForm ";
import TripsPage from "./components/TripsPage";
import WhatsAppButton from "./components/WhatsApp";

const App = () => {
  return (
    <div className="border m-[1px] border-yellow-500 border-opacity-20">
      <Header />
      <LandingPage />
      <TripsPage />
      <AboutNemoPage />
      <TravelForm />
      <RatingAndReview />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default App;
