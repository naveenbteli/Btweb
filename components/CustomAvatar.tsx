import { Avatar } from "@mantine/core";
import React from "react";

const CustomAvatar = () => {
  return (
    <div>
      {" "}
      <a className="block shadow-sm">
        <div className="flex flex-col items-center justify-between">
          <div>
            <Avatar
              src="https://www.ssmrv.edu.in/wp-content/uploads/2020/11/Dr.-M.P-Shyam-300x223.png"
              alt="no image here"
              color="indigo"
              size={200}
              radius="xl"
            />
          </div>
          <div>
            <h6 className="mt-2 font-bold">Dr. M. P. Shyam</h6>
            <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
            President, RSST
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};


export default CustomAvatar ;
  
