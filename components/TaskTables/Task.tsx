import { TaskName } from "./TaskName";
import { TaskPriority } from "./TaskPriority";
import { EstimatedTime } from "./EstimatedTime";
import { TaskTime } from "./TaskTime";
import { ActualTime } from "./ActualTime";
import { TaskStatus } from "./TaskStatus";
import { calcTaskActualTime } from "../../utils/calcTaskActualTime";
import { TaskProps } from "../../interfaces/TaskProps";
import { TimeButton } from "./TimeButton";

const statusColors: { [status: string]: string } = {
  "Not Started": " text-gray bg-white",
  "In Progress": " text-blue-500 bg-blue-100",
  Completed: " text-green-500 bg-green-100",
};

export const Task = (props: TaskProps) => {
  const { task, updateTask } = props;
  const actualTime = calcTaskActualTime(task);
  const statusColor = statusColors[task.status] ?? statusColors["Not Started"];

  const jsxTaskName = (
    <TaskName name={task.name} setName={(name) => updateTask({ name })} />
  );
  const jsxTaskPriority = (
    <TaskPriority
      priority={task.priority}
      setPriority={(priority) => updateTask({ priority })}
    />
  );
  const jsxEstimatedTime = (
    <EstimatedTime
      estimatedTime={task.estimatedTime}
      setEstimatedTime={(estimatedTime) => updateTask({ estimatedTime })}
    />
  );
  const jsxStartTime = (
    <TaskTime
      hour={task.startHour}
      minute={task.startMinute}
      setHour={(startHour) => updateTask({ startHour })}
      setMinute={(startMinute) => updateTask({ startMinute })}
    />
  );
  const jsxEndTime = (
    <TaskTime
      hour={task.endHour}
      minute={task.endMinute}
      setHour={(endHour) => updateTask({ endHour })}
      setMinute={(endMinute) => updateTask({ endMinute })}
    />
  );
  const jsxActualTime = (
    <ActualTime hour={actualTime?.diffHour} minute={actualTime?.diffMinute} />
  );
  const jsxTaskStatus = (
    <TaskStatus
      status={task.status}
      setStatus={(status) => updateTask({ status })}
    />
  );

  const jsxStartTimeButton = (
    <TimeButton
      label="start"
      setTime={(startHour, startMinute) =>
        updateTask({ startHour, startMinute, status: "In Progress" })
      }
    />
  );
  const jsxEndTimeButton = (
    <TimeButton
      label="end"
      setTime={(endHour, endMinute) =>
        updateTask({ endHour, endMinute, status: "Completed" })
      }
    />
  );

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
