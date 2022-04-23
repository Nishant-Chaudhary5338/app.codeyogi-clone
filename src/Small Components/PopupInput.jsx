/** @format */

import React from "react";

function PopupInput({ onSubmit, error, type, ...rest }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="py-6 space-x-10 border-t-2 border-b-2">
        <span>Submission Link:</span>
        <input {...rest} type={type || "email"} />
        <div className="text-sm text-red-500 text-semibold">{error}</div>
      </div>
    </form>
  );
}

export default PopupInput;
