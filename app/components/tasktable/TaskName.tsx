import { useState } from "react";

export const TaskName = () => {
  const [name, setName] = useState("");
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