import React from "react";
import H6 from "./Small Components/H6";

function ProfileInput(props) {
    return (
        <div>
            <div className="flex items-center justify-between px-10 py-6">
                <H6 className="text-gray-500">{props.children }</H6>
                <input className="px-40 bg-gray-100 border-2 border-gray-200 rounded-md" placeholder={props.placeholder } type={props.type} />
                
            </div>
            <hr  />
        </div>
    );
}

export default ProfileInput;