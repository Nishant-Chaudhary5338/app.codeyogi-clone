/** @format */

import axios from "axios";

const Codeyogi_Base_Url = "https://api.codeyogi.io/";
const RandomUser_Base_Url = "https://randomuser.me/api/";

export const getStudents = () => {
  const responsePromise = axios.get(RandomUser_Base_Url + "?results=9");
  return responsePromise
    .then((response) => {
      const student = response.data.results;
      cacheData(student, "student");
      return student;
    })
    .catch(handleError);
};

export const getLectures = () => {
  const responsePromise = axios.get(Codeyogi_Base_Url + `batches/1/sessions`, {
    withCredentials: true,
  });
  return responsePromise
    .then((response) => {
      const lecture = response.data;
      return lecture;
    })
    .catch(handleError);
};

export const getAssignments = () => {
  const responsePromise = axios.get(
    Codeyogi_Base_Url + `batches/1/assignments`,
    {
      withCredentials: true,
    }
  );
  return responsePromise
    .then((response) => {
      const assignment = response.data;
      return assignment;
    })
    .catch(handleError);
};

const cacheData = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getCachedData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const handleError = (e) => {
  console.log("show alert to users", e);
};
