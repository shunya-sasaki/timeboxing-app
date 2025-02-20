import { useState } from "react";
import { useEffect } from "react";
import { TaskName } from "./TaskName";
import { TaskPriority } from "./TaskPriority";
import { EstimatedTime } from "./EstimatedTime";
import { TaskTime } from "./TaskTime";
import { ActualTime } from "./ActualTime";
import { TaskStatus } from "./TaskStatus";
import { calcActualTime } from "../../utils/calcActualTime";
import { TaskProps } from "../../interfaces/TaskProps";
import { TimeButton } from "./TimeButton";

export const Task = (props: TaskProps) => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const id = props.id;
  const estimatedTimes = props.estimatedTimes;
  const setEstimatedTimes = props.setEstimatedTimes;
  const actualTimes = props.actualTimes;
  const setActualTimes = props.setActualTimes;
  const tableState = props.tableState;
  const setTableState = props.setTableState;
  const tableIsInitialized = props.tableIsInitialized;

  const [name, setName] = useState("");
  const [priority, setPriority] = useState("★️");
  const [estimatedTime, setEstimatedTime] = useState<string | undefined>(
    "00:00"
  );

  const [startHour, setStartHour] = useState<number | undefined>(undefined);
  const [startMinute, setStartMinute] = useState<number | undefined>(undefined);
  const [startStrHour, setStartStrHour] = useState<string>("");
  const [startStrMinute, setStartStrMinute] = useState<string>("");
  const [endHour, setEndHour] = useState<number | undefined>(undefined);
  const [endMinute, setEndMinute] = useState<number | undefined>(undefined);
  const [endStrHour, setEndStrHour] = useState<string>("");
  const [endStrMinute, setEndStrMinute] = useState<string>("");

  const [actualHour, setActualHour] = useState<number | undefined>(undefined);
  const [actualMinute, setActualMinute] = useState<number | undefined>(
    undefined
  );
  const [status, setStatus] = useState("Not Started");
  const [statusColor, setStatusColor] = useState("text-gray bg-white");

  const jsxTaskName = <TaskName name={name} setName={setName} />;
  const jsxTaskPriority = (
    <TaskPriority priority={priority} setPriority={setPriority} />
  );
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
      strHour={startStrHour}
      setStrHour={setStartStrHour}
      strMinute={startStrMinute}
      setStrMinute={setStartStrMinute}
      taskIsInitialized={isInitialized}
    />
  );
  const jsxEndTime = (
    <TaskTime
      hour={endHour}
      minute={endMinute}
      setHour={setEndHour}
      setMinute={setEndMinute}
      strHour={endStrHour}
      setStrHour={setEndStrHour}
      strMinute={endStrMinute}
      setStrMinute={setEndStrMinute}
      taskIsInitialized={isInitialized}
    />
  );
  const jsxActualTime = <ActualTime hour={actualHour} minute={actualMinute} />;
  const jsxTaskStatus = <TaskStatus status={status} setStatus={setStatus} />;

  const jsxStartTimeButton = (
    <TimeButton
      label="start"
      setHour={setStartStrHour}
      setMinute={setStartStrMinute}
      setStatus={setStatus}
      pushedStatus="In Progress"
    />
  );
  const jsxEndTimeButton = (
    <TimeButton
      label="end"
      setHour={setEndStrHour}
      setMinute={setEndStrMinute}
      setStatus={setStatus}
      pushedStatus="Completed"
    />
  );

  const updateEstimatedTimes = (estimatedTime: string | undefined) => {
    const newEstimatedTimes = { ...estimatedTimes };
    newEstimatedTimes[id] = estimatedTime;
    setEstimatedTimes(newEstimatedTimes);
  };

  const updateActualTimes = (actualTime: string | undefined) => {
    const newActualTimes = { ...actualTimes };
    newActualTimes[id] = actualTime;
    setActualTimes(newActualTimes);
  };

  const clearTaskState = () => {
    setName("");
    setPriority("★️");
    setEstimatedTime("00:00");
    setStartHour(undefined);
    setStartMinute(undefined);
    setStartStrHour("");
    setStartStrMinute("");
    setEndStrHour("");
    setEndStrMinute("");
    setEndHour(undefined);
    setEndMinute(undefined);
    setActualHour(undefined);
    setActualMinute(undefined);
    setStatus("Not Started");
  };

  useEffect(() => {
    updateEstimatedTimes(estimatedTime);
  }, [estimatedTime]);

  useEffect(() => {
    if (actualHour !== undefined && actualMinute !== undefined) {
      const actualTime = `${actualHour
        .toString()
        .padStart(2, "0")}:${actualMinute.toString().padStart(2, "0")}`;
      updateActualTimes(actualTime);
    }
  }, [actualHour, actualMinute]);

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

  useEffect(() => {
    if (isInitialized) {
      const newTableState = { ...tableState };
      newTableState.tasks[id] = {
        name: name,
        priority: priority,
        estimatedTime: estimatedTime,
        startHour: startHour,
        startMinute: startMinute,
        endHour: endHour,
        endMinute: endMinute,
        status: status,
      };
      setTableState(newTableState);
    }
  }, [
    id,
    name,
    priority,
    estimatedTime,
    startHour,
    startMinute,
    endHour,
    endMinute,
    status,
  ]);

  useEffect(() => {
    if (tableIsInitialized) {
      if (id in tableState.tasks) {
        setName(tableState.tasks[id].name);
        setPriority(tableState.tasks[id].priority);
        setEstimatedTime(tableState.tasks[id].estimatedTime);
        setStartHour(tableState.tasks[id].startHour);
        setStartMinute(tableState.tasks[id].startMinute);
        setEndHour(tableState.tasks[id].endHour);
        setEndMinute(tableState.tasks[id].endMinute);
        setStatus(tableState.tasks[id].status);
      } else {
        clearTaskState();
      }
      setIsInitialized(true);
    }
  }, [tableIsInitialized]);

  useEffect(() => {
    switch (status) {
      case "Not Started":
        setStatusColor(" text-gray bg-white");
        break;
      case "In Progress":
        setStatusColor(" text-blue-500 bg-blue-100");
        break;
      case "Completed":
        setStatusColor(" text-green-500 bg-green-100");
        break;
    }
  }, [status]);

  return (
    <div className="flex flex-row pt-2">
      <div className="w-64 min-w-64 ml-4">{jsxTaskName}</div>
      <div className="w-20 min-w-20 ml-4 text-left">{jsxTaskPriority}</div>
      <div className="w-28 min-w-28 ml-4 text-right">{jsxEstimatedTime}</div>
      <div className="w-20 min-w-20 ml-4 text-right">{jsxStartTime}</div>
      <div className="w-20 min-w-20 ml-4 text-right">{jsxEndTime}</div>
      <div className="w-28 min-w-28 ml-4 text-right">{jsxActualTime}</div>
      <div className={"w-28 min-w-28 ml-4 text-center" + statusColor}>
        {jsxTaskStatus}
      </div>
      <div className=" w-12 min-w-12 ml-4">{jsxStartTimeButton}</div>
      <div className=" w-12 min-w-12 ml-8">{jsxEndTimeButton}</div>
    </div>
  );
};
