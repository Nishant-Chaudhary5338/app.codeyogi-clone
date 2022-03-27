import React from "react";
import NavBar from "../NavBar";


function QuizPage(props) {
    return(
        <div className="h-screen ">
            
            <NavBar></NavBar>
            <h1 className="flex justify-center mt-40">No active quiz!!!!!</h1>
        </div>
    );
}

export default QuizPage;