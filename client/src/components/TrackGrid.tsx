import { useEffect, useState } from "react";
import TrackCardContainer from "./TrackCardContainer";

interface Song {
  id: number;
  title: string;
}

const TrackGrid = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch(
        `http://localhost:5000/songs/search?q=eminem`,
      );

      const data = await response.json();
      setSongs(data);
    };

    fetchSongs();
  }, []);

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 bg-gray-600 p-4">
      {songs?.map((song) => (
        <TrackCardContainer song={song} />
      ))}
    </div>
  );
};

export default TrackGrid;
