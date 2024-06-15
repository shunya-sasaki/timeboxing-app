import { useState } from "react";

export const TaskName = (props: {
  name: string;
  setName: (name: string) => void;
}) => {
  const { name, setName } = props;
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-64"
        placeholder="Task Name"
      ></input>
    </div>
  );
};
