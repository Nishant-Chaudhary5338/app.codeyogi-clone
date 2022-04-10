import React from "react";
import AssignmentMockData from '../Mock Data/AssignmentMockData';
import AssignmentDetails from "../AssignmentDetails";
import { useEffect, useState } from "react";
import axios from "axios";

function AssignmentListPage(props) {

  const [assignments, setAssignments] = useState([]);

  useEffect(() => { 
    const token = axios.get(`https://api.codeyogi.io/batches/1/assignments`, {
    withCredentials: true,
    })
    
    token.then((response) => {
      setAssignments(response.data);
      console.log(response.data);
    })
  }, [])
  
    return(
        
        <div>
          <h1 className="mb-4 text-xl font-semibold ">Assignments</h1>
        <div className="flex-col p-10 pt-2 bg-gray-100 ">
          
          <div>
            {assignments.map((a) => (
              <AssignmentDetails assignment={a} key={ a.id}></AssignmentDetails>
            ))
            }
          </div>
           
          </div>    
        </div>
            
        
    );
}

export default AssignmentListPage;