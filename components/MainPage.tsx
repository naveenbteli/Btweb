/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <>
      <aside className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center bg-[#0D1117] min-h-fit">
        <div className="p-8 md:p-12 lg:px-16 lg:py-16">
          <div className="max-w-fit mx-auto text-center sm:text-left">
            <motion.h1
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, type: "tween" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-600 lg:text-7xl font-poppins"
            >
              International Conference on Artificial Intelligence and Machine
              Learning in BIOSCIENCES
            </motion.h1>

            <p className="text-slate-200 md:mt-4 md:block text-xl">
             8-10 December, 2022 
              
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block px-12 py-3 text-sm font-medium text-white rounded transition bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="grid place-items-center">
          {/* <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            In Collaboration with
          </h1>
          <img
            alt="collab partners"
            src="http://bioinnovationcentre.com/storage/app/media/images/logo.png"
            className="object-contain w-fir h-fit"
          /> */}
          <Player
            autoplay
            loop
            // src="https://assets2.lottiefiles.com/private_files/lf30_7gz6mq4o.json"
            src="https://assets2.lottiefiles.com/private_files/lf30_m075yjya.json"
            style={{ height: "100%", width: "100%" }}
            className="asset"
            speed={0.5}
          >
            <Controls visible={false} />
          </Player>
        </div>
      </aside>
    </>
  );
};

export default MainPage;
