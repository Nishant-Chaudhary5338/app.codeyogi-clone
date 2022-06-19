/** @format */

import cn from "classnames";

function Alert({ alert, removeAlert }) {
  let { type, message } = alert;
  type = type || "success";

  const alertClasses = cn(
    "p-5 text-xl font-semibold text-white bg-red-500 m-2",
    {
      "bg-green-500 border-green-700": type === "success",
      "bg-red-500 border-red-700": type === "error",
      "bg-yellow-500 border-yellow-700": type === "warning",
    }
  );

  return (
    <>
      <div className={alertClasses}>
        <span className="mr-10">{message}</span>
        <button onClick={() => removeAlert(alert)}>X</button>
      </div>
    </>
  );
}

export default Alert;
