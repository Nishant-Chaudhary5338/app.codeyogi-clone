import React from "react";
import LectureDetails from "../LectureDetails";
import MainLayout from "../MainLayout";
import LectureMockData from "../Mock Data/LectureMockdata";

function LectureListPage(props) {
    return(
        
        <div>
          <h1 className="mb-4 text-xl font-semibold ">Lectures</h1>
          <div className="h-full p-10 pt-2 bg-gray-100 ">
            
            
             
          {LectureMockData.map((e) => {
            return (<LectureDetails key={e.id} topics={e.topics} lectureLink={e.lectureLink } lectureDate={e.lectureDate} note = {e.note} duration={e.duration }  lectureNumber={e.lectureNumber} id={e.id} ></LectureDetails>)
          })}
           

          </div>


        </div>
        
    );
}

export default LectureListPage;