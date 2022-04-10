import React from 'react';
import Links from './Links';

function AssignmentDetails({assignment }) { 
    return (
        <Links to={`/assignments/${assignment.assignmentNumber}/description` }>
         <div className="p-4 m-5 bg-white border-2 border-gray-200 rounded-md shadow-md ">
                
            <div className='space-x-2 font-semibold text-md'>
                <span>#{assignment.id} </span>
                <span>{assignment.description}</span>
                <span className='text-gray-500 text-md'>({assignment.created_at})</span>
            </div>
            
            <div className='flex justify-between pt-4'>
                <span className='text-red-500'>Due Date: {assignment.due_date}</span>
                <span className='text-lg font-semibold text-green-600'>{}</span>
            </div>
            <div className='flex justify-between pt-6 pb-4 mx-40'>
                <a className='font-semibold text-green-600' href="#">Re-submit</a>
                <a className='font-semibold text-blue-600 underline' href="#">Check your submission</a>
            </div>
            
            
         </div>
        </Links>
    );
}

export default AssignmentDetails;