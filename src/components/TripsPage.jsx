import { upcomingTripDetails } from "@/constants";
import TripCard from "./subComponents/TripCard";
import Carousel from "./subComponents/Carousel";
const TripsPage = () => {
  return (
    <div className="mt-1">
      TripsPage
      <div className="flex gap-8 m-4  ">
        <Carousel width={20}>
          {upcomingTripDetails.map((trip) => (
            <TripCard
              key={trip.id}
              title={trip.title}
              startDate={trip.startDate}
              returnDate={trip.returnDate}
              duration={trip.duration}
              status={trip.status}
              price={trip.price}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TripsPage;
