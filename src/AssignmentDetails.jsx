/** @format */

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { string } from "yup";
import PopupInput from "./Small Components/PopupInput";
import { DateTime } from "luxon";
import Button from "./Small Components/Button";
import { useForm } from "./forms";

function AssignmentDetails({ assignment }) {
  const [popup, setPopup] = useState(false);

  const [urlError, setUrlError] = useState("");

  const { formData, handleChange } = useForm({
    url: "",
  });

  const showPopup = () => {
    setPopup(true);
  };
  const hidePopup = () => {
    setPopup(false);
  };

  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    const urlValidator = string().url("please enter valid Url").required();

    try {
      urlValidator.validateSync(formData.url);
      setUrlError("");
    } catch (e) {
      setUrlError(e.message);
      return;
    }
    setPopup(false);
    // setFormData("");
    console.log(`${assignment.id}`, formData.url);
  };

  return (
    <div className="p-4 m-5 bg-white border-2 border-gray-200 rounded-md shadow-md ">
      <div
        onClick={() => navigate(`/assignments/${assignment.id}/description`)}
      >
        <div className="space-x-2 font-semibold text-md">
          <span>#{assignment.id} </span>
          <span>{assignment.title}</span>
          <span className="text-gray-500 text-md">
            (
            {DateTime.fromISO(assignment.created_at).toLocaleString(
              DateTime.DATETIME
            )}
            )
          </span>
        </div>

        <div className="flex justify-between pt-4">
          <span className="text-red-500">
            Due Date:{" "}
            {DateTime.fromISO(assignment.due_date).toLocaleString(
              DateTime.DATETIME
            )}
          </span>
          <span className="text-lg font-semibold text-green-600">{}</span>
        </div>
      </div>
      <div className="flex justify-between pt-6 pb-4 sm:mx-40">
        <button
          type="button"
          onClick={showPopup}
          className="font-semibold text-green-600"
        >
          Re-submit
        </button>
        {popup && (
          <div>
            <div className="">
              <div className="fixed p-10 bg-gray-300 rounded-md shadow-md top-60 left-96">
                <div>Assignment {assignment.id}</div>

                <PopupInput
                  id="url"
                  error={urlError}
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  placeholder="submission link"
                  type="text"
                  onSubmit={submit}
                ></PopupInput>

                <div className="mt-4 space-x-60">
                  <Button onClick={submit} type="submit">
                    Submit
                  </Button>
                  <Button type="button" theme="red" onClick={hidePopup}>
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        <a
          className="font-semibold text-blue-600 underline"
          href={formData.submissionUrl}
        >
          Check your submission
        </a>
      </div>
    </div>
  );
}

export default AssignmentDetails;
