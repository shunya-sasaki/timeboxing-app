import { useState } from "react";

export const TaskStatus = (props: {
  status: string;
  setStatus: (status: string) => void;
}) => {
  const {status, setStatus} = props;
  return (
    <div>
      <select
        value={status}
        className="hover:border-2"
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};
