import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Task } from "./Task";
import { strTimeToMinute } from "@/app/utils/strTimeToMinute";

export const TaskTable = () => {
  const numTasks = 8;
  const [estimatedTimes, setEstimatedTimes] = useState<{} | { string: string }>(
    {}
  );
  const [totalEstimatedTime, setTotalEstimatedTime] = useState<string>("00:00");

  const [actualTimes, setActualTimes] = useState<{} | { string: string }>(
    {}
  );
  const [totalActualTime, setTotalActualTime] = useState<string>("00:00");

  useEffect(() => {
    let totalMinute = 0;
    Object.values(estimatedTimes).map((estimatedTime) => {
      if (estimatedTime !== undefined) {
        const tmpMinute = strTimeToMinute(estimatedTime);
        totalMinute += tmpMinute;
      }
    });
    const hour = Math.floor(totalMinute / 60);
    const minute = totalMinute % 60;
    setTotalEstimatedTime(
      hour.toString().padStart(2, "0") +
        ":" +
        minute.toString().padStart(2, "0")
    );
  }, [estimatedTimes]);

  useEffect(() => {
    let totalMinute = 0;
    Object.values(actualTimes).map((actualTime) => {
      if (actualTime !== undefined) {
        const tmpMinute = strTimeToMinute(actualTime);
        totalMinute += tmpMinute;
      }
    });
    const hour = Math.floor(totalMinute / 60);
    const minute = totalMinute % 60;
    setTotalActualTime(
      hour.toString().padStart(2, "0") +
        ":" +
        minute.toString().padStart(2, "0")
    );
  }, [actualTimes]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row w-full border-b-2">
        <div className="w-64 font-bold text-center ml-4">
          <FontAwesomeIcon icon={faPen} /> Task
        </div>
        <div className="w-20 font-bold text-center ml-4">
          <FontAwesomeIcon icon={faStar} /> Priority
        </div>
        <div className=" w-28 font-bold text-center ml-4">
          <FontAwesomeIcon icon={faStopwatch} /> Estimated
        </div>
        <div className=" w-20 font-bold text-center ml-4">
          <FontAwesomeIcon icon={faHourglassStart} /> Start
        </div>
        <div className=" w-20 font-bold text-center ml-4">
          <FontAwesomeIcon icon={faHourglassEnd} /> End
        </div>
        <div className=" w-28 font-bold text-center ml-4">
          <FontAwesomeIcon icon={faStopwatch} /> Actual
        </div>
        <div className=" w-28 font-bold text-center ml-4">
          <FontAwesomeIcon icon={faCheck} /> Status
        </div>
      </div>
      <div className="border-b-2">
        {Array(numTasks)
          .fill(0)
          .map((_, index) => {
            return (
              <Task
                key={"task-" + index}
                id={index}
                estimatedTimes={estimatedTimes}
                setEstimatedTimes={setEstimatedTimes}
                actualTimes = {actualTimes}
                setActualTimes={setActualTimes}
              />
            );
          })}
      </div>
      <div className="flex flex-row">
        <div className="w-64 ml-4"></div>
        <div className="w-20 ml-4"></div>
        <div className="w-14 ml-16 pl-2">{totalEstimatedTime}</div>
        <div className="w-20 ml-4 text-right"></div>
        <div className="w-20 ml-4 text-right"></div>
        <div className="w-32 ml-2 text-right">{totalActualTime}</div>
        <div className="w-28 ml-4 text-right"></div>
      </div>
    </div>
  );
};
