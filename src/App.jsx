import AboutNemoPage from "./components/AboutNemoPage";
import Footer from "./components/FooterPage";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import RatingAndReview from "./components/RatingAndReview ";
import TravelForm from "./components/TravelForm ";
import TripsPage from "./components/TripsPage";

const App = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <TripsPage />
      <AboutNemoPage />
      <TravelForm />
      <RatingAndReview />
      <Footer />
    </div>
  );
};

export default App;
