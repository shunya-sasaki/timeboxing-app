import { useTask } from "@/app/hooks/useTask";

export const Task = () => {
  const {
    jsxTaskName,
    jsxTaskPriority,
    jsxEstimatedTime,
    jsxStartTime,
    jsxEndTime,
    jsxActualTime,
    jsxTaskStatus,
  } = useTask();

  return (
    <div className="flex flex-row pt-2">
      <div className="w-64 ml-4">{jsxTaskName}</div>
      <div className="w-20 ml-4 text-left">{jsxTaskPriority}</div>
      <div className="w-28 ml-4 text-right">{jsxEstimatedTime}</div>
      <div className="w-20 ml-4 text-right">{jsxStartTime}</div>
      <div className="w-20 ml-4 text-right">{jsxEndTime}</div>
      <div className="w-28 ml-4 text-right">{jsxActualTime}</div>
      <div className="w-28 ml-4 text-right">{jsxTaskStatus}</div>
    </div>
  );
};
