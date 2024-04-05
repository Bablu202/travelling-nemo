const TripCard = ({
  id,
  title,
  startDate,
  returnDate,
  duration,
  status,
  price,
}) => {
  return (
    <div
      key={id}
      className="rounded-sm border border-yellow-500 border-opacity-50 w-[20rem] h-[20rem]"
    >
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default TripCard;
