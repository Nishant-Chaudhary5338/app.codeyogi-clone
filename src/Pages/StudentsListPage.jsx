/** @format */

import React, { useEffect, useState } from "react";
import StudentsCard from "../Small Components/StudentsCard";
import { getCachedData, getStudents } from "../Api";

function StudentsListPage(props) {
  const cachedUsers = getCachedData("student") || [];
  const [students, setStudents] = useState(cachedUsers);

  useEffect(() => {
    const promise = getStudents();
    promise.then((student) => {
      setStudents(student);
      //console.log(response.data.results);
    });
  }, []);

  return (
    <div className="h-full p-10 bg-white ">
      <h1 className="text-2xl font-semibold">Students of batch 1</h1>
      <div className="flex flex-wrap mx-10 sm:space-x-4">
        {" "}
        {students.map((u) => (
          <StudentsCard user={u} />
        ))}
      </div>
    </div>
  );
}

export default StudentsListPage;
