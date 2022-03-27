import React from "react";
import H6 from "./Small Components/H6";
import { GoPrimitiveDot } from "react-icons/go";


function LectureDetails(props) {
    return (
        <div className="p-4 m-5 font-semibold bg-white border-2 border-gray-200 rounded-md shadow-md text-md">
            <h3 className="inline-block"> Lecture# {props.lectureNumber}</h3>
            <span className="inline-block ml-6 text-gray-500">
                <H6>({props.lectureDate})</H6>
            </span>
            <p className="text-sm text-gray-500">Duration: {props.duration}</p>
            <ul className="px-6 my-6">
                
                {props.topics.map(topic => (
                    <li> {topic}</li> 
                )) }
            </ul>
            <h3 className="mb-4">Note: {props.note}</h3>
            <H6>
              <a className="text-gray-500 px-72 text-md" href={props.lectureLink}>Watch/Download Recording</a></H6>
        </div>
    );
}

export default LectureDetails;