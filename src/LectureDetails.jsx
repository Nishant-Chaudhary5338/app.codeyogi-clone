/** @format */

import React from "react";
import H6 from "./Small Components/H6";
import MDEditor from "@uiw/react-md-editor";
import { DateTime } from "luxon";

function LectureDetails({ session }) {
  return (
    <div className="p-4 m-5 space-y-2 font-semibold bg-white border-2 border-gray-200 rounded-md shadow-md text-md">
      <h3 className="inline-block"> Lecture# {session.id}</h3>
      <span className="inline-block ml-6 text-gray-500">
        <H6>
          (
          {DateTime.fromISO(session.created_at).toLocaleString(
            DateTime.DATETIME
          )}
          )
        </H6>
      </span>
      <p className="text-sm text-gray-500">
        Duration: {session.created_at - session.end_at}
      </p>
      <div>
        <MDEditor.Markdown source={session.topic}></MDEditor.Markdown>
      </div>
      <H6>
        <a
          className="block text-center text-gray-500 text-md"
          href={session.recording_url}
        >
          Watch/Download Recording
        </a>
      </H6>
    </div>
  );
}

export default LectureDetails;
