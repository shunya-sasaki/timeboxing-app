import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useTask } from "@/app/hooks/useTask";
import { Task } from "./Task";

export const TaskTable = () => {
  const [tasks, setTasks] = useState([
    useTask(),
    useTask(),
    useTask(),
    useTask(),
    useTask(),
  ]);
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
        {tasks.map((task, index) => {
          return <Task key={"task-" + index} />;
        })}
      </div>
      <div className="flex flex-row">
        <div className="w-64 ml-4">Sum</div>
        <div className="w-20 ml-4"></div>
        <div className="w-14 ml-16 pl-2">00:00</div>
        <div className="w-20 ml-4 text-right"></div>
        <div className="w-20 ml-4 text-right"></div>
        <div className="w-28 ml-4 text-right">00:00</div>
        <div className="w-28 ml-4 text-right"></div>
      </div>
    </div>
  );
};
