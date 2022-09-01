/* eslint-disable @next/next/no-img-element */
import { Image } from "@mantine/core";
import React from "react";

const TrackCard = ({ track }: any) => {
  return (
    <div>
      {/* <div className="p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl"> */}
      <div className="block p-6 bg-[#0D1117] sm:p-8 rounded-xl">
        <div className="sm:pr-8 max-w-lg lg:max-w-2xl">
          <div className="flex flex-row items-center gap-8">
            <div>
              <Image
                src="https://github-p-dex-921037-dex365.web.app/assets/icons/asterisk_0.svg"
                alt="logo"
                height={50}
                width={50}
              />
            </div>
            <div>
              <h5 className="text-2xl font-bold text-slate-50 lg:text-5xl">{track.name}</h5>
              <p className="mt-2 text-sm text-gray-500 font-sans">
                {track.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default TrackCard;
