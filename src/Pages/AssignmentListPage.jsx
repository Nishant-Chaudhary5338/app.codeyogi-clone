/** @format */

import React from "react";
import AssignmentDetails from "../AssignmentDetails";
import { useEffect, useState } from "react";
import { getAssignments } from "../Api";

function AssignmentListPage(props) {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const token = getAssignments();
    token.then((assignment) => {
      setAssignments(assignment);
      console.log(assignment);
    });
  }, []);

  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold ">Assignments</h1>
      <div className="flex-col p-10 pt-2 bg-gray-100 ">
        <div>
          {assignments.map((a) => (
            <AssignmentDetails assignment={a} key={a.id}></AssignmentDetails>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AssignmentListPage;
