/** @format */

import React, { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AssignmentDescription from "./AssignmentDescription";
import MainLayout from "./MainLayout";
import AssignmentListPage from "./Pages/AssignmentListPage";
import LectureListPage from "./Pages/LectureListPage";
import LogoutPage from "./Pages/LogoutPage";
import NotFoundPage from "./Pages/NotFoundPage";
import ProfilePage from "./Pages/ProfilePage";
import QuizPage from "./Pages/QuizPage";
import StudentsListPage from "./Pages/StudentsListPage";
import AlertContext from "./Small Components/AlertContext";
import { uniqueId } from "lodash";
import AlertList from "./Small Components/AlertList";

function App() {
  const [alerts, setAlerts] = useState([]);
  const showAlert = (message, type = "success", dismiss = 10) => {
    const id = uniqueId();
    const alert = { message, type, id };
    setAlerts([...alerts, alert]);
    dismiss &&
      setTimeout(() => {
        removeAlert();
      }, dismiss * 1000);
  };
  const removeAlert = (alert) => {
    setAlerts((latestALerts) => {
      return latestALerts.filter((a) => a !== alert);
    });
  };
  const alertData = { alerts, showAlert, removeAlert };
  return (
    <BrowserRouter>
      <AlertContext.Provider value={alertData}>
        <AlertList></AlertList>
        <Routes>
          <Route path="quiz" element={<QuizPage />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="assignments" element={<AssignmentListPage />} />
            <Route
              path="assignments/:assignmentId/description"
              element={<AssignmentDescription />}
            />
            <Route path="lectures" element={<LectureListPage />} />
            <Route path="studentsList" element={<StudentsListPage />} />

            <Route path="profile" element={<ProfilePage />} />
            <Route path="logout" element={<LogoutPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AlertContext.Provider>
    </BrowserRouter>
  );
}

export default App;
