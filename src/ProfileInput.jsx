/** @format */

import { useField } from "formik";
import React from "react";

function ProfileInput({ id, type, children, name, ...rest }) {
  const [field, meta] = useField(name);
  return (
    <div>
      <div className="items-center justify-between px-20 py-6 sm:flex">
        <label htmlFor={id} className="text-gray-500">
          {children}
        </label>
        <div>
          <input
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            name={name}
            id={id}
            className="block py-2 bg-gray-100 border-2 border-gray-200 rounded-md w-96"
            type={type || "text"}
            {...rest}
          />
          {meta.touched && meta.error && (
            <span className="text-sm text-red-500 ">{meta.error}</span>
          )}
        </div>
      </div>

      <hr />
    </div>
  );
}

export default ProfileInput;
