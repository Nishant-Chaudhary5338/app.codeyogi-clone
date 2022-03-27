import React from "react";
import AssignmentMockData from '../Mock Data/AssignmentMockData';
import AssignmentDetails from "../AssignmentDetails";

function AssignmentListPage(props) {
    return(
        
        <div>
          <h1 className="mb-4 text-xl font-semibold ">Assignments</h1>
        <div className="flex-col p-10 pt-2 bg-gray-100 ">
          
          {AssignmentMockData.map((e) => { 
            return (
              <AssignmentDetails key={e.id} assignmentNumber={e.assignmentNumber} assignmentTitle={e.assignmentTitle} publishedDate={e.publishedDate} dueDate={e.dueDate} status={e.status }></AssignmentDetails>
            );
          }) }
           
          </div>    
        </div>
            
        
    );
}

export default AssignmentListPage;