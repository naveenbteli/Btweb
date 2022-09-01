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
              src="https://ik.imagekit.io/tf4mccdje/prajwal_Mjvs5REg4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662013248173"
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
