import TrackCardContainer from "./TrackCardContainer";

const TrackGrid = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 bg-gray-600 p-4">
      {list.map((item) => (
        <TrackCardContainer />
      ))}
    </div>
  );
};

export default TrackGrid;
