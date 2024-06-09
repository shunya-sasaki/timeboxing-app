import { useState } from "react";

export const TaskTime = (props: {
  hour: number | undefined;
  minute: number | undefined;
  setHour: (value: number) => void;
  setMinute: (value: number) => void;
}) => {
  const { hour, minute, setHour, setMinute } = props;
  return (
    <div>
      <input
        type="text"
        value={hour}
        step={1}
        onChange={(e) => setHour(parseInt(e.target.value))}
        className=" w-6 text-right"
        placeholder="HH"
      ></input>
      :
      <input
        type="text"
        value={minute}
        step={15}
        onChange={(e) => setMinute(parseInt(e.target.value))}
        className=" w-8"
        placeholder="MM"
      ></input>
    </div>
  );
};
