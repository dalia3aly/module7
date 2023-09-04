import { useState } from "react";

export function loginFormInput(initialValue, type="text") {
  // our custom hook still uses useState internally
  const [value, setValue] = useState(initialValue);

  // generic handler function to update state
  function handleChange(e) {
    type == 'checkbox' ? setValue(e.target.checked) : setValue(e.target.value)
  }

  // generic function to reset input value
  const reset = () => type == 'checkbox' ? setValue(false) : setValue("");

  const valid = () => type != 'checkbox' ? value.trim() != '' : true;

  // object containing the state value and handler function
  // can be unpacked to set as props for input element
  const inputProps = {
    value: value,
    onChange: handleChange,
    type: type
  };

  // returns data to be used by a component
  return [inputProps, reset, valid];
}

