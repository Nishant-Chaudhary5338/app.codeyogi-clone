import React from 'react';
import Links from './Links';

function AssignmentDetails(props) { 
    return (
        <Links to={`/assignments/${props.assignmentNumber}/description` }>
         <div className="p-4 m-5 bg-white border-2 border-gray-200 rounded-md shadow-md ">
                
            <div className='space-x-2 font-semibold text-md'>
                <span>#{props.assignmentNumber} </span>
                <span>{props.assignmentTitle}</span>
                <span className='text-gray-500 text-md'>({props.publishedDate})</span>
            </div>
            
            <div className='flex justify-between pt-4'>
                <span className='text-red-500'>Due Date: {props.dueDate}</span>
                <span className='text-lg font-semibold text-green-600'>{props.status}</span>
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