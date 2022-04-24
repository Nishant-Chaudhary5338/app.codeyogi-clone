/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import LeftSideBar from "./Pages/LeftSideBar";
import MiniSideBar from "./Small Components/MiniSideBar";

function MainLayout(props) {
  return (
    <div className="sm:flex">
      <div className="">
        <LeftSideBar></LeftSideBar>
        <MiniSideBar></MiniSideBar>
      </div>
      <div className="p-4 bg-gray-200 sm:p-14 grow">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
