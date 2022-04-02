import React from "react";
import { Outlet } from "react-router-dom";
import LeftSideBar from "./Pages/LeftSideBar";

function MainLayout(props) {
    return (
        <div className="flex">
            <LeftSideBar></LeftSideBar>
            <div className="bg-gray-200 p-14 grow">
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;