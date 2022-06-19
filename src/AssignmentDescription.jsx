/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import Links from "./Links";
import A from "./Small Components/A";
import Button from "./Small Components/Button";
import H6 from "./Small Components/H6";
import { useEffect, useState } from "react";
import axios from "axios";
import { DateTime } from "luxon";
import PopupInput from "./Small Components/PopupInput";
import { string } from "yup";
import { getAssignmentNumber, submitAssignmentApi } from "./Api";
import { useContext } from "react";
import AlertContext from "./Small Components/AlertContext";

function AssignmentDescription() {
  const { showAlert } = useContext(AlertContext);
  const data = useParams();
  const id = +data.assignmentId;
  // const selectedAssignment = assignment.find(assignment => assignment.id === selectedId)

  const [assignment, setAssignment] = useState([]);
  const [popup, setPopup] = useState(false);
  const [submissionUrl, setSubmissionUrl] = useState("");
  const [urlError, setUrlError] = useState("");

  const showPopup = () => {
    setPopup(true);
  };
  const hidePopup = () => {
    setPopup(false);
  };

  const handleChange = (event) => {
    setSubmissionUrl(event.target.value);
  };

  const submit = () => {
    const urlValidator = string()
      .url("please enter correct details")
      .required();

    try {
      urlValidator.validateSync(submissionUrl);
      showAlert("assignment submitted", "success");
    } catch (e) {
      setUrlError(e.message);
      showAlert("assignment not submitted", "error");
      return;
    }
    submitAssignmentApi(id, submissionUrl);
    setPopup(false);
    setSubmissionUrl("");
    console.log(`${assignment.id}`, submissionUrl);
  };

  useEffect(() => {
    const token = getAssignmentNumber(id);
    token.then((response) => {
      setAssignment(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <div className="p-10 bg-white border-2 border-gray-200 shadow-md ">
        <h1 className="text-3xl font-extrabold text-center ">
          Description of assignment {assignment.id}
        </h1>
        <h3 className="p-4 text-lg font-semibold ">Assignment Details</h3>
        <hr />
        <div className="space-y-6">
          <div className="flex mt-4 space-x-60">
            <H6>Title</H6>
            <p className="ml-60">{assignment.title}</p>
          </div>
          <hr />
          <div className="flex">
            <H6>Due Date</H6>
            <p className="ml-60">
              {DateTime.fromISO(assignment.due_date).toLocaleString(
                DateTime.DATETIME
              )}
            </p>
          </div>
          <hr />
          <div className="flex">
            <H6>Description</H6>
            <p className="ml-60">{assignment.description}</p>
          </div>
          <hr />
        </div>
        <div className="mt-4 space-x-10">
          <Button onClick={showPopup}>Re-submit</Button>
          {popup && (
            <div>
              <div className="">
                <div className="fixed p-10 bg-gray-300 rounded-md shadow-md top-60 left-96">
                  <div>Assignment {assignment.id}</div>

                  <PopupInput
                    error={urlError}
                    value={submissionUrl}
                    onChange={handleChange}
                    placeholder="submission link"
                    type="text"
                  ></PopupInput>

                  <div className="mt-4 space-x-60">
                    <Button onClick={submit}>Submit</Button>
                    <Button theme="red" onClick={hidePopup}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <A href="">See your submission</A>
        </div>
      </div>
      <div className="text-xl text-red-500">
        <Links to="/assignments">BACK</Links>
      </div>
    </div>
  );
}

export default AssignmentDescription;
