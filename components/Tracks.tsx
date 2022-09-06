import React from "react";
import TrackCard from "./TrackCard";
import Schedule from "./Schedule";
import { Controls, Player } from "@lottiefiles/react-lottie-player";

const tracks = [
  {
    name: "Diseases and Diagnostics",
    description: "Disease Detection and Prevention, Therapeutic agents, Correction of genetic diseases  Forensic medicine, Fertility control    ",
  },
  {
    name: "Genomics for Drug discovery",
    description: "GWAS, Exome, Gene Essentiality, Whole Genome Sequence     ",
  },
  {
    name: "Agriculture, Food and Nutrition",
    description: "Green biotechnology, Microbial, Fermentation, Nutrition, Crop biotechnology ",
  },
];

const Tracks = () => {
  return (
    <aside className="bg-[#0D1117] min-h-screen">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <h1 className="text-6xl mb-3 leading-snug text-transparent font-semibold bg-clip-text bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
          Conference Themes 
        </h1>
        <div className="flex items-center justify-around">
          <div className="grid grid-cols-1 place-items-start gap-8">
            {tracks.map((track) => (
              <TrackCard track={track} key={track.name} />
            ))}
          </div>
          <div className="hidden lg:block ">
            <Player
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_6eo6rw2s.json"
              // src="https://assets10.lottiefiles.com/packages/lf20_cignkatp.json"
              style={{ height: "60%", width: "80%" }}
              className="asset"
              speed={0.5}
            >
              <Controls visible={false} />
            </Player>
          </div>
        </div>
      </div>
      <Schedule />
    </aside>
  );
};

export default Tracks;
