import { useState } from "react";

export const EstimatedTime = (props: {
  estimatedTime: string | undefined;
  setEstimatedTime: (value: string) => void;
}) => {
  const { estimatedTime, setEstimatedTime } = props;
  return (
    <div className="w-28">
      <select
        value={estimatedTime}
        className="hover:border-2 ml-14 w-14"
        onChange={(e) => setEstimatedTime(e.target.value)}
      >
        <option value="00:00">00:00</option>
        <option value="00:15">00:15</option>
        <option value="00:30">00:30</option>
        <option value="00:45">00:45</option>
        <option value="01:00">01:00</option>
        <option value="01:15">01:15</option>
        <option value="01:30">01:30</option>
        <option value="01:45">01:45</option>
        <option value="02:00">02:00</option>
        <option value="02:15">02:15</option>
        <option value="02:30">02:30</option>
        <option value="02:45">02:45</option>
        <option value="03:00">03:00</option>
        <option value="03:15">03:15</option>
        <option value="03:30">03:30</option>
        <option value="03:45">03:45</option>
        <option value="04:00">04:00</option>
      </select>
    </div>
  );
};
