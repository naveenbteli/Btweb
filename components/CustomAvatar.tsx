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
              src={null}
              alt="no image here"
              color="indigo"
              size={200}
              radius="xl"
            />
          </div>
          <div>
            <h6 className="mt-2 font-bold">Naveen</h6>
            <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
              cdfsfdvfd
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CustomAvatar;