import { upcomingTripDetails } from "@/constants";
const TripsPage = () => {
  return (
    <section className="py-2  ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Trips</h2>
        <div className="flex overflow-x-auto  snap-x snap-mandatory">
          {upcomingTripDetails.map((trip) => (
            <div
              key={trip.id}
              className=" border border-yellow-500 border-opacity-30 flex-none w-64 mr-4 rounded-lg shadow-lg  snap-always snap-center"
            >
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{trip.title}</h3>
                <p>
                  <strong>Start Date:</strong> {trip.startDate}
                </p>
                <p>
                  <strong>Return Date:</strong> {trip.returnDate}
                </p>
                <p>
                  <strong>Duration:</strong> {trip.duration}
                </p>
                <p>
                  <strong>Status:</strong> {trip.status}
                </p>
                <p>
                  <strong>Price:</strong> {trip.price} K
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripsPage;
