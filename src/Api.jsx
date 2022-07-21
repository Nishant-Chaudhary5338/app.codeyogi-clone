/** @format */

import axios from "axios";
import { useEffect } from "react";

const Codeyogi_Base_Url = "https://api.codeyogi.io/";
const RandomUser_Base_Url = "https://randomuser.me/api/";

export const getStudents = async () => {
  try {
    const response = await axios.get(RandomUser_Base_Url + "?results=9");
    const student = response.data.results;
    cacheData(student, "student");
    return student;
  } catch (e) {
    handleError;
  }
};

//without async await
/*export const getStudents = () => {
  const responsePromise = axios.get(RandomUser_Base_Url + "?results=9");
  return responsePromise
    .then((response) => {
      const student = response.data.results;
      cacheData(student, "student");
      return student;
    })
    .catch(handleError);
};*/

export const getLectures = async () => {
  try {
    const response = await axios.get(Codeyogi_Base_Url + `batches/1/sessions`, {
      withCredentials: true,
    });
    const lecture = response.data;
    return lecture;
  } catch (e) {
    handleError;
  }
};

//without async await
/*export const getLectures = () => {
  const responsePromise = axios.get(Codeyogi_Base_Url + `batches/1/sessions`, {
    withCredentials: true,
  });
  return responsePromise
    .then((response) => {
      const lecture = response.data;
      return lecture;
    })
    .catch(handleError);
};*/

export const getAssignments = async () => {
  try {
    const response = await axios.get(
      Codeyogi_Base_Url + `batches/1/assignments`,
      {
        withCredentials: true,
      }
    );
    const assignment = response.data;
    return assignment;
  } catch (e) {
    handleError;
  }
};

//without async await
/*export const getAssignments = () => {
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
};*/

export const getAssignmentNumber = (id) => {
  return axios.get(`https://api.codeyogi.io/assignments/${id}`, {
    withCredentials: true,
  });
};

export const submitAssignmentApi = (id, submissionUrl) => {
  return axios.put(
    `https://api.codeyogi.io/assignment/${id}/submit`,
    { submissionLink: submissionUrl },
    { withCredentials: true }
  );
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
