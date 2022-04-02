import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AssignmentDescription from "./AssignmentDescription";
import Links from "./Links";
import MainLayout from "./MainLayout";
import AssignmentListPage from "./Pages/AssignmentListPage";
import LectureListPage from "./Pages/LectureListPage";
import LeftSideBar from "./Pages/LeftSideBar";
import LogoutPage from "./Pages/LogoutPage";
import NotFoundPage from "./Pages/NotFoundPage";
import ProfilePage from "./Pages/ProfilePage";
import QuizPage from "./Pages/QuizPage";
import StudentsListPage from "./Pages/StudentsListPage";

function App() {
  return (
    <BrowserRouter>
    
          <Routes>
            <Route path="quiz" element={<QuizPage />} />
            <Route path="/" element={ <MainLayout />}>
              <Route path="assignments" element={<AssignmentListPage />} />
              <Route path="assignments/:assignmentNumber/description" element={<AssignmentDescription /> } />
              <Route path="lectures" element={<LectureListPage />} />
              <Route path="studentsList" element={<StudentsListPage /> } />
              
              <Route path="profile" element = {<ProfilePage />} />
              <Route path="logout" element={<LogoutPage />} />
           </Route>
           <Route path="*" element={<NotFoundPage /> } />
        
          </Routes>
        
    
    </BrowserRouter>
  );
}

export default App;
