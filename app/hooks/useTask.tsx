import { useState } from "react";
import { useEffect } from "react";
import { TaskName } from "../components/tasktable/TaskName";
import { TaskPriority } from "../components/tasktable/TaskPriority";
import { EstimatedTime } from "../components/tasktable/EstimatedTime";
import { TaskTime } from "../components/tasktable/TaskTime";
import { ActualTime } from "../components/tasktable/ActualTime";
import { TaskStatus } from "../components/tasktable/TaskStatus";
import { calcActualTime } from "../utils/calcActualTime";

export const useTask = () => {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("★️");
  const [estimatedTime, setEstimatedTime] = useState<string | undefined>(
    undefined
  );

  const [startHour, setStartHour] = useState<number | undefined>(undefined);
  const [startMinute, setStartMinute] = useState<number | undefined>(undefined);
  const [endHour, setEndHour] = useState<number | undefined>(undefined);
  const [endMinute, setEndMinute] = useState<number | undefined>(undefined);

  const [actualHour, setActualHour] = useState<number | undefined>(undefined);
  const [actualMinute, setActualMinute] = useState<number | undefined>(
    undefined
  );
  const [status, setStatus] = useState("Not Started");
  const jsxTaskName = <TaskName />;
  const jsxTaskPriority = <TaskPriority />;
  const jsxEstimatedTime = (
    <EstimatedTime
      estimatedTime={estimatedTime}
      setEstimatedTime={setEstimatedTime}
    />
  );
  const jsxStartTime = (
    <TaskTime
      hour={startHour}
      minute={startMinute}
      setHour={setStartHour}
      setMinute={setStartMinute}
    />
  );
  const jsxEndTime = (
    <TaskTime
      hour={endHour}
      minute={endMinute}
      setHour={setEndHour}
      setMinute={setEndMinute}
    />
  );
  const jsxActualTime = <ActualTime hour={actualHour} minute={actualMinute} />;
  const jsxTaskStatus = <TaskStatus />;

  useEffect(() => {
    if (
      startHour !== undefined &&
      startMinute !== undefined &&
      endHour !== undefined &&
      endMinute !== undefined
    ) {
      const { diffHour, diffMinute } = calcActualTime(
        startHour,
        startMinute,
        endHour,
        endMinute
      );
      setActualHour(diffHour);
      setActualMinute(diffMinute);
    }
  }, [startHour, startMinute, endHour, endMinute]);

  const createTask = () => {
    const task = {
      name,
      priority,
      estimatedTime,
      jsxTaskName,
      jsxTaskPriority,
      jsxEstimatedTime,
      jsxStartTime,
      jsxEndTime,
      jsxActualTime,
      jsxTaskStatus,
    };
    return task;
  };
  return {
    jsxTaskName,
    jsxTaskPriority,
    jsxEstimatedTime,
    jsxStartTime,
    jsxEndTime,
    jsxActualTime,
    jsxTaskStatus,
  };
};
