import React from "react";
import Links from "../Links";
import { MdError } from 'react-icons/md';

function NotFoundPage() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen bg-black border-2">
                
                <div>
                    <img className="w-96 h-96" src="https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png" alt="" />
                    
                    
                    <div className="text-4xl font-extrabold text-red-500 ">
                        <Links  to = "/assignments">Go back to assignments</Links>
                    </div>
                </div>  
                
                
            </div>
            
            
        </div>
    );
}

export default NotFoundPage;