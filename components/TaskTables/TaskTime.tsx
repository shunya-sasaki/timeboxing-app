import { useState } from "react";
import { useEffect } from "react";

export const TaskTime = (props: {
  hour: number | undefined;
  minute: number | undefined;
  setHour: (value: number) => void;
  setMinute: (value: number) => void;
  strHour: string;
  strMinute: string;
  setStrHour: (value: string) => void;
  setStrMinute: (value: string) => void;
  taskIsInitialized: boolean;
}) => {
  const {
    hour,
    minute,
    setHour,
    setMinute,
    strHour,
    strMinute,
    setStrHour,
    setStrMinute,
    taskIsInitialized,
  } = props;
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (taskIsInitialized && !isInitialized) {
      if (hour !== undefined) {
        setStrHour(hour.toString().padStart(2, "0"));
      }
      if (minute !== undefined) {
        setStrMinute(minute.toString().padStart(2, "0"));
      }
      setIsInitialized(true);
    }
  }, [taskIsInitialized]);

  useEffect(() => {
    if (isInitialized && strHour !== "") {
      setHour(parseInt(strHour));
    }
  }, [setHour, strHour]);

  useEffect(() => {
    if (isInitialized && strMinute !== "") {
      setMinute(parseInt(strMinute));
    }
  }, [setMinute, strMinute]);

  return (
    <div>
      <input
        type="text"
        value={strHour}
        onChange={(e) => setStrHour(e.target.value)}
        className=" w-6 text-right"
        placeholder="HH"
      ></input>
      :
      <input
        type="text"
        value={strMinute}
        onChange={(e) => setStrMinute(e.target.value)}
        className=" w-8"
        placeholder="MM"
      ></input>
    </div>
  );
};
