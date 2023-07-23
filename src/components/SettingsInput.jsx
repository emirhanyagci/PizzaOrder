import PropTypes from "prop-types";
import Button from "./Button";
import { useState } from "react";
function SettingsInput({
  id,
  label,
  type = "text",
  placeholder,
  onClickHandler,
}) {
  const [input, setInput] = useState("");

  return (
    <div className="space-y-3">
      <label
        htmlFor={id}
        className="block text-base font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type={type}
        name={id}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-600 focus:border-amber-600 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
      <Button
        onClickHandler={() => {
          onClickHandler(input);
        }}
        className="bg-secondary-500 rounded-md px-3 py-2 text-white"
      >
        Update {id}
      </Button>
    </div>
  );
}
SettingsInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onClickHandler: PropTypes.func,
};
// "name@company.com"
export default SettingsInput;
