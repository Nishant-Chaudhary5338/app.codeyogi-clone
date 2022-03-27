import React from "react";
import MainLayout from "../MainLayout";
import ProfileInput from "../ProfileInput";
import Button from "../Small Components/Button";

function ProfilePage(props) {
    return(
        
        <div className="bg-white ">
            <div >
              <h1 className="p-4 text-lg font-semibold">Personal details</h1>
              <hr />
            </div>

            <ProfileInput type="text" placeholder = "First Name" >First Name</ProfileInput>
            <ProfileInput type="text" placeholder = "Last Name"  >Last Name</ProfileInput>
            <ProfileInput type="email" placeholder = "Email Address"  >Email Address</ProfileInput>
            <ProfileInput type="text" placeholder = "Institute Name"  >Institute Name</ProfileInput>
            <ProfileInput type="date" placeholder = "Year of Passout"  >Year of Passout</ProfileInput>
            <ProfileInput type="number" placeholder = "Phone Number"  >Phone Number</ProfileInput>
            <ProfileInput type="date" placeholder = "Date Of Birth"  >Date Of Birth</ProfileInput>
            <ProfileInput type="number" placeholder = "Institute Roll Number"  >Institute Roll Number</ProfileInput>
            <ProfileInput type="text" placeholder = "Branch"  >Branch</ProfileInput>
        
            <div className="p-8 my-4">
                <Button>Update</Button>
            </div>
        </div>
        
        
        
    );
}

export default ProfilePage;