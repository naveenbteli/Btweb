import { Button } from "@mantine/core";
import React from "react";

const Reg = () => {
  return (
    <div className="bg-[#0D1117] p-8 md:p-12 lg:px-16 lg:py-24 ">
      <div className="  text-center p-1 shadow-xl bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-500 rounded-2xl">
        <div className="block p-6 bg-[#0D1117] sm:p-8 rounded-xl">
          <div className="sm:pr-8">
            <h1 className="text-3xl mb-3 leading-snug text-transparent font-semibold bg-clip-text bg-gradient-to-bl from-blue-500 via-yellow-500 to-orange-500 lg:text-6xl">
              Registrations {" "}
            </h1>
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:items-center justify-ceneter">
                <div className=" block p-8   ">
                  <h3 className="mt-4 text-2xl font-bold text-white text-center">
                    Registrations Open
                  </h3>
                  <p className="mt-1 text-xl text-gray-300 text-center">
                    17th of August, 2022
                  </p>
                </div>
                <div className=" block p-8  ">
                  <h1 className="mt-4 text-2xl font-bold text-white text-center">
                    Registrations Close
                  </h1>
                  <p className="mt-1 text-xl text-gray-300 text-center">
                    31st of August, 2022
                  </p>
                </div>
              </div>
            <Button
              variant="gradient"
              gradient={{ from: "teal", to: "blue", deg: 60 }}
              className="mt-2"
            >
              <a href="https://easychair.org/conferences/?conf=aimlbio2022">
              Paper Submission Link
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reg;
