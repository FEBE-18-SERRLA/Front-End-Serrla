import React from "react";

export default function InputRadioBtn({
  name,
  checked,
  value,
  id,
  htmlFor,
  label,
  onChange,
}) {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          checked={checked}
          onChange={onChange}
          name={name}
          type="radio"
          value={value}
          id={id}
        />
        <label className="form-check-label" htmlFor={htmlFor}>
          {" "}
          {label}{" "}
        </label>
      </div>
    </>
  );
}
