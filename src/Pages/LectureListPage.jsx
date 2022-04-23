/** @format */

import React, { useState, useEffect } from "react";
import LectureDetails from "../LectureDetails";
import axios from "axios";

function LectureListPage(props) {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const token = axios.get(`https://api.codeyogi.io/batches/1/sessions`, {
      withCredentials: true,
    });

    token.then((response) => {
      setSessions(response.data);

      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold ">Lectures</h1>
      <div className="h-full p-10 pt-2 bg-gray-100 ">
        <div>
          {sessions.map((s) => (
            <LectureDetails session={s} key={s.id}></LectureDetails>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LectureListPage;
