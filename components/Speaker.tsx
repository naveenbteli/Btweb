import React from "react";
import SpeakerCard from "./SpeakerCard";
import { Tabs } from "@mantine/core";

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
  {
    name: "Drug Discovery",
    description: "Track 3 description",
  },
];

const Speakers = () => {
  return (
    <aside className="bg-[#0D1117]">
      <Tabs variant="pills" orientation="vertical" defaultValue="gallery">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <h1 className="text-6xl mb-3 leading-snug text-transparent font-semibold bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            Speakers
          </h1>
          <div className="flex flex-col items-center justify-around gap-8 lg:flex-row">
            <div>
              <Tabs.List>
                <Tabs.Tab value="gallery">Day-1</Tabs.Tab>
                <Tabs.Tab value="messages">Day-2</Tabs.Tab>
                <Tabs.Tab value="settings">Day-3</Tabs.Tab>
              </Tabs.List>
            </div>
            <Tabs.Panel value="gallery">
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 place-items-start gap-8 lg:grid-cols-4 ">
                  {tracks.map((track) => (
                    <SpeakerCard profile={track} key={track.name} />
                  ))}
                </div>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="messages">
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 place-items-start gap-8 lg:grid-cols-4 ">
                  {tracks.map((track) => (
                    <SpeakerCard profile={track} key={track.name} />
                  ))}
                </div>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="settings">
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 place-items-start gap-8 lg:grid-cols-4 ">
                  {tracks.map((track) => (
                    <SpeakerCard profile={track} key={track.name} />
                  ))}
                </div>
              </div>
            </Tabs.Panel>
          </div>
        </div>
      </Tabs>
    </aside>
  );
};

export default Speakers;
