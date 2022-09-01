import React from "react";
import TrackCard from "./TrackCard";
import Schedule from "./Schedule";

const tracks = [
  {
    name: "Diagnostics and Diseases in HPCC",
    description: "Track 1 description",
  },
  {
    name: "Artificial Intelligence and Machine Learning in Genomics",
    description: "Track 2 description",
  },
  {
    name: "Drug Discovery",
    description: "Track 3 description",
  },
];

const Tracks = () => {
  return (
    <aside className="bg-[#0D1117] min-h-screen">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <h1 className="text-6xl mb-3 leading-snug text-transparent font-semibold bg-clip-text bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
          Tracks
        </h1>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 place-items-start gap-8">
            {tracks.map((track) => (
              <TrackCard track={track} key={track.name} />
            ))}
          </div>
        </div>
      </div>
      <Schedule/>
    </aside>
  );
};

export default Tracks;
