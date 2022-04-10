import React, {useEffect, useState} from "react";
import StudentsCard from "../Small Components/StudentsCard";
import axios from "axios";



function StudentsListPage(props) {
  

    const [students, setStudents] = useState([]);
      
    useEffect(() => {
        const token = axios.get(`https://api.codeyogi.io/batches/1/sessions`, {
            withCredentials: true,
        });
    
        token.then((response) => {
            
            console.log(response.data);
        });
    }, [])
    

    
    
    return(
        
        <div className="h-full p-10 bg-white ">
            
            <h1 className="text-2xl font-semibold">Students of batch 1</h1>
              <div>
              </div>
            
            
        </div>
        
    );
}

export default StudentsListPage;