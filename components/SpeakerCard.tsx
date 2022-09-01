/* eslint-disable @next/next/no-img-element */
import React from "react";

const SpeakerCard = ({ profile }: any) => {
  return (
    <div>
      <div className="w-full max-w-2xl rounded-lg border p-8 shadow-md bg-gray-800 border-gray-700">
        <div className="flex flex-col items-center p-10">
          <img
            className="mb-3 w-24 h-24 rounded-full shadow-lg"
            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-white">
            Bonnie Green
          </h5>
          <span className="text-sm text-gray-400">
            Visual Designer
          </span>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
