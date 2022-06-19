/** @format */

import React from "react";
import { useContext } from "react";
import Alert from "./Alert";
import AlertContext from "./AlertContext";

function AlertList() {
  const { alerts, removeAlert } = useContext(AlertContext);

  return (
    <div className="fixed m-2 left-80 right-60 w-96 w-100 top-40">
      {alerts.map((a) => (
        <Alert key={a.id} alert={a} removeAlert={removeAlert}></Alert>
      ))}
    </div>
  );
}

export default AlertList;
