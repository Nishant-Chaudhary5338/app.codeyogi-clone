/** @format */

import React, { useState, useEffect } from "react";
import LectureDetails from "../LectureDetails";
import { getLectures } from "../Api";

function LectureListPage(props) {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const token = getLectures();
    token.then((r) => {
      setSessions(r);

      console.log(r);
    });
  }, []);

  return (
    <div className="h-full p-2 pt-2 bg-gray-100 sm:p-10 ">
      <h1 className="pl-6 mb-4 text-xl font-semibold ">Lectures</h1>
      <div>
        {sessions.map((s) => (
          <LectureDetails session={s} key={s.id}></LectureDetails>
        ))}
      </div>
    </div>
  );
}

export default LectureListPage;
