/** @format */

import React, { useContext } from "react";
import ProfileInput from "../ProfileInput";
import Button from "../Small Components/Button";
import { object, string, number, date } from "yup";
import { Formik, Form } from "formik";
import AlertContext from "../Small Components/AlertContext";

function ProfilePage() {
  const { showAlert } = useContext(AlertContext);
  const onSubmit = () => {
    console.log("profile info updated");
    showAlert("profile info updated", "success");
  };

  const validationSchema = object().shape({
    firstName: string().required(),
    lastName: string(),
    email: string().email().required(),
    instituteName: string().required(),
    yearOfPassout: number(),
    phoneNumber: number().min(10, "enter 10 digit mobile number").required(),
    dateOfBirth: date().required(),
    device: string().required(),
    rollNumber: string(),
    branch: string(),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    instituteName: "",
    yearOfPassout: "",
    phoneNumber: "",
    dateOfBirth: "",
    device: "",
    rollNumber: "",
    branch: "",
  };

  return (
    <div className="p-2 bg-white sm:m-16 ">
      <div>
        <h1 className="p-4 text-lg font-semibold sm:p-10 sm:px-20">
          Personal details
        </h1>
        <hr />
      </div>

      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form>
          <ProfileInput
            id="firstName"
            required
            placeholder="First Name"
            name="firstName"
            autoComplete="firstName"
          >
            First Name
          </ProfileInput>
          <ProfileInput
            id="lastName"
            placeholder="Last Name"
            name="lastName"
            autoComplete="lastName"
          >
            Last Name
          </ProfileInput>
          <ProfileInput
            id="email"
            type="email"
            required
            placeholder="email"
            name="email"
            autoComplete="email"
          >
            Email Address
          </ProfileInput>
          <ProfileInput
            id="instituteName"
            required
            placeholder="Institute Name"
            name="instituteName"
            autoComplete="instituteName"
          >
            Institute Name
          </ProfileInput>
          <ProfileInput
            id="yearOfPassout"
            type="number"
            name="yearOfPassout"
            autoComplete="yearOfPassout"
          >
            Year Of Passout
          </ProfileInput>
          <ProfileInput
            id="phoneNumber"
            required
            placeholder="Phone Number"
            type="number"
            name="phoneNumber"
            autoComplete="phoneNumber"
          >
            Phone Number
          </ProfileInput>
          <ProfileInput
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            placeholder="D.O.B - (DD/MM/YYYY)"
            required
            autoComplete="dateOfBirth"
          >
            Date of Birth
          </ProfileInput>
          <ProfileInput
            id="device"
            name="device"
            placeholder="Personal Computer/College Computer/mobile/mobile with keyboard"
            required
            autoComplete="device"
          >
            Device you are using
          </ProfileInput>
          <ProfileInput
            id="rollNumber"
            name="rollNumber"
            placeholder="rollNumber"
            autoComplete="rollNumber"
          >
            Institute Roll Number
          </ProfileInput>
          <ProfileInput
            id="branch"
            name="name"
            placeholder="Branch"
            autoComplete="branch"
          >
            Branch
          </ProfileInput>
          <div className="my-4 sm:p-8">
            <Button type="submit">Update</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ProfilePage;
