/** @format */

import React from "react";
import Links from "../Links";
import {
  MdOutlineQuiz,
  MdOutlineAssignment,
  MdOutlineClass,
} from "react-icons/md";
import { CgProfile, CgLogOut } from "react-icons/cg";
import { HiUsers } from "react-icons/hi";

function LeftSideBar(props) {
  return (
    <div className="sticky top-0 hidden h-screen pr-2 bg-gray-800 sm:block sm:h-screen w-60">
      <h1 className="pt-6 ml-6 text-3xl font-extrabold text-white ">
        CODEYOGI
      </h1>
      <div className="flex flex-col mt-6 ml-4 ">
        <Links theme="primary" icon={<MdOutlineQuiz />} to="/quiz">
          Quiz
        </Links>
        <Links theme="primary" icon={<MdOutlineAssignment />} to="/assignments">
          Assignments
        </Links>
        <Links theme="primary" icon={<MdOutlineClass />} to="/lectures">
          Lectures
        </Links>
        <Links theme="primary" icon={<HiUsers />} to="/studentsList">
          Students
        </Links>

        <span className="mt-10 h-72"></span>
        <Links theme="primary" icon={<CgProfile />} to="/profile">
          Profile
        </Links>
        <Links theme="primary" icon={<CgLogOut />} to="logout">
          Logout
        </Links>
      </div>
    </div>
  );
}

export default LeftSideBar;
