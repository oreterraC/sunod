interface Song {
  id: number;
  title: string;
}

interface Properties {
  song: Song;
}

const TrackCardContainer = ({ song }: Properties) => {
  return (
    <div className="bg-gray-400 rounded-sm">
      {song.id} {song.title}
    </div>
  );
};

export default TrackCardContainer;
