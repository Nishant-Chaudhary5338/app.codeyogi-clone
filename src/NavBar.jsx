import React from "react";
import Links from "./Links";
import Button from "./Small Components/Button";

function NavBar() {
    return(
        <div className="bg-gray-800 h-14">
          <div className="flex justify-between">
            <div className="flex pt-4 ml-16 space-x-2 font-semibold text-white">
              <span className=""><Links to="/lectures">CodeYogi</Links></span>
              <span>|</span>
              <span className="text-white">Welcome, Nishant</span>

            </div>
            <div className="pt-2 pr-10">
                <Button>Logout</Button>
            </div>
          </div>
        </div>
    );
}

export default NavBar;