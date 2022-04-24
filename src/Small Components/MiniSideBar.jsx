/** @format */

import React, { useState } from "react";
import Links from "../Links";
import {
  MdOutlineQuiz,
  MdOutlineAssignment,
  MdOutlineClass,
} from "react-icons/md";
import { CgProfile, CgLogOut } from "react-icons/cg";
import { HiUsers } from "react-icons/hi";

function MiniSideBar(props) {
  const [miniSidebar, setMiniSideBar] = useState(false);
  const showSideBar = () => {
    setMiniSideBar(true);
  };
  const hideSideBar = () => {
    setMiniSideBar(false);
  };
  return (
    <div>
      <div className="bg-gray-900 sm:hidden">
        <img
          onClick={showSideBar}
          src="https://img.icons8.com/fluency/48/000000/menu--v1.png"
        />
      </div>
      {miniSidebar && (
        <div>
          <div className="fixed top-0 w-40 h-full bg-gray-900">
            <img
              onClick={hideSideBar}
              src="https://img.icons8.com/color/48/000000/back--v1.png"
            />
            <div>
              <h1 className="pt-6 ml-2 font-bold text-white text-md ">
                CODEYOGI
              </h1>
              <div className="flex flex-col mt-6 ml-2 ">
                <Links
                  onClick={hideSideBar}
                  theme="primary"
                  icon={<MdOutlineQuiz />}
                  to="/quiz"
                >
                  Quiz
                </Links>
                <Links
                  onClick={hideSideBar}
                  theme="primary"
                  icon={<MdOutlineAssignment />}
                  to="/assignments"
                >
                  Assignments
                </Links>
                <Links
                  onClick={hideSideBar}
                  theme="primary"
                  icon={<MdOutlineClass />}
                  to="/lectures"
                >
                  Lectures
                </Links>
                <Links
                  theme="primary"
                  onClick={hideSideBar}
                  icon={<HiUsers />}
                  to="/studentsList"
                >
                  Students
                </Links>

                <Links
                  theme="primary"
                  onClick={hideSideBar}
                  icon={<CgProfile />}
                  to="/profile"
                >
                  Profile
                </Links>
                <Links
                  theme="primary"
                  onClick={hideSideBar}
                  icon={<CgLogOut />}
                  to="logout"
                >
                  Logout
                </Links>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MiniSideBar;
