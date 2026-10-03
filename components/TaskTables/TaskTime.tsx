import { useState } from "react";

const formatTimePart = (value: number | undefined) => {
  return value === undefined ? "" : value.toString().padStart(2, "0");
};

const parseTimePart = (str: string) => {
  const value = parseInt(str);
  return Number.isNaN(value) ? undefined : value;
};

const TimePartInput = (props: {
  value: number | undefined;
  setValue: (value: number | undefined) => void;
  className: string;
  placeholder: string;
}) => {
  const { value, setValue, className, placeholder } = props;
  // Keep the typed text so that e.g. "0" is not reformatted to "00" mid-input.
  const [text, setText] = useState(formatTimePart(value));
  const [prevValue, setPrevValue] = useState(value);

  // Sync the text when the value is changed from outside (Clear, time buttons).
  if (value !== prevValue) {
    setPrevValue(value);
    if (parseTimePart(text) !== value) {
      setText(formatTimePart(value));
    }
  }

  return (
    <input
      type="text"
      value={text}
      onChange={(e) => {
        setText(e.target.value);
        setValue(parseTimePart(e.target.value));
      }}
      className={className}
      placeholder={placeholder}
    ></input>
  );
};

export const TaskTime = (props: {
  hour: number | undefined;
  minute: number | undefined;
  setHour: (value: number | undefined) => void;
  setMinute: (value: number | undefined) => void;
}) => {
  const { hour, minute, setHour, setMinute } = props;

  return (
    <div>
      <TimePartInput
        value={hour}
        setValue={setHour}
        className=" w-6 text-right"
        placeholder="HH"
      />
      :
      <TimePartInput
        value={minute}
        setValue={setMinute}
        className=" w-8"
        placeholder="MM"
      />
    </div>
  );
};
