import React from "react";
import { useParams } from "react-router-dom";
import AssignmentDetails from "./AssignmentDetails";
import Links from "./Links";
import AssignmentMockData from "./Mock Data/AssignmentMockData";
import A from "./Small Components/A";
import Button from "./Small Components/Button";
import H6 from "./Small Components/H6";

function AssignmentDescription() {
    const data = useParams();
    const selectedId = +data.assignmentNumber;
    const selectedAssignment = AssignmentMockData.find(assignment => assignment.id === selectedId)


    return (
        <div>
            <div className="p-10 bg-white border-2 border-gray-200 shadow-md ">
                <h1 className="text-3xl font-extrabold text-center "> Description of assignment {selectedAssignment.assignmentNumber}</h1>
                <h3 className="p-4 text-lg font-semibold ">Assignment Details</h3>
                <hr />
                <div className="space-y-6">
                    <div className="flex justify-between mt-4">
                        <H6>Title</H6>
                        <p className="mr-60">{selectedAssignment.assignmentTitle }</p>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <H6>Due Date</H6>
                        <p className="pr-60">{ selectedAssignment.dueDate}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <H6>Description</H6>
                        <p className="mr-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, ut perspiciatis? </p>
                    </div>
                    <hr />
                </div>
                <div className="mt-4 space-x-10">
                    <Button>Re-submit</Button>
                    <A href = "https//:www.google.com">See your submission</A>
                </div>
                
                
               
               
                
                
            </div>
            <div className="text-xl text-red-500">
                <Links to ="/assignments">BACK</Links>
            </div>
        </div>
    );
}

export default AssignmentDescription;