import { useState } from "react";
export const TaskPriority = () => {
  const [priority, setPriority] = useState("★️");
  return (
    <div>
      <select
        value={priority}
        className="hover:border-2"
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="⭐️">★</option>
        <option value="⭐️⭐️">★★</option>
        <option value="⭐️⭐️⭐️">★★★️</option>
      </select>
    </div>
  );
};
