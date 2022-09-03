/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

const SpeakerCard = ({ profile }: any) => {
  return (
    <motion.div layoutId="underline">
      <div className="w-full max-w-2xl rounded-lg border p-8 shadow-md bg-gray-800 border-gray-700">
        <div className="flex flex-col items-center p-10">
          <img
            className="mb-3 w-24 h-24 rounded-full shadow-lg"
            src="https://ik.imagekit.io/tf4mccdje/prajwal_Mjvs5REg4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662013248173"
            alt="Prajwal P"
          />
          <h5 className="mb-1 text-xl font-medium text-white">Prajwal P</h5>
          <span className="text-sm text-gray-400">Web Master</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SpeakerCard;
