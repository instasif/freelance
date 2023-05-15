import React from "react";
import UserSearchBar from "./UserSearchBar";
import UserSortDropDown from "./UserSortDropDown";
import UsersTableFooter from "./UsersTableFooter";

const UsersTable = () => {

    const users = [
      {
        name: "Devid Warner",
        email: "David@warner.com",
        userType: "Trainee",
        accountCreated: "19 April 2023",
      },
      {
        name: "Devid Warner",
        email: "David@warner.com",
        userType: "Trainee",
        accountCreated: "19 April 2023",
      },
      {
        name: "Devid Warner",
        email: "David@warner.com",
        userType: "Trainee",
        accountCreated: "19 April 2023",
      },
      {
        name: "Devid Warner",
        email: "David@warner.com",
        userType: "Trainee",
        accountCreated: "19 April 2023",
      }
    ];

  return (
    <div className="p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <div className="flex justify-between">

        {/* this is search bar */}
        <div className="w-[70%]">
          <UserSearchBar />
        </div>
        
        {/* this is sorting dropdowns */}
        <div className="flex gap-3 me-5">
          <UserSortDropDown />
          <UserSortDropDown />
        </div>

      </div>
        {/* this is table footer part */}
      <UsersTableFooter />
    </div>
  );
};

export default UsersTable;
