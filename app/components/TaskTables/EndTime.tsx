import { useState } from "react";

export const EndTime = () => {
  const [end, setEnd] = useState<string | undefined>(undefined);
  return (
    <div>
      <input
        type="time"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      ></input>
    </div>
  );
};