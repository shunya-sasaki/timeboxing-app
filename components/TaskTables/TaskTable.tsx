import { useEffect, useState } from "react";
import { Task } from "./Task";
import { TableHader } from "./TableHeader";
import { TableSummary } from "./TableSummary";
import { TableState, TaskState } from "@/interfaces/TableState";
import { calcTotalHourMinute } from "../../utils/calcTotalHourMinute";
import { calcTaskActualTime } from "../../utils/calcTaskActualTime";
import { formatHourMinute } from "../../utils/formatHourMinute";

const defaultTaskState: TaskState = {
  name: "",
  priority: "★️",
  estimatedTime: "00:00",
  startHour: undefined,
  startMinute: undefined,
  endHour: undefined,
  endMinute: undefined,
  status: "Not Started",
};

// Reads localStorage, so the table must be rendered on the client only.
const loadTableState = (name: string): TableState => {
  const storedData = localStorage.getItem(name);
  if (storedData === null) {
    return { tasks: {} };
  }
  return JSON.parse(storedData).state;
};

export const TaskTable = (props: { tableName: string }) => {
  const name = props.tableName;
  const numTasks = 8;
  const [tableState, setTableState] = useState<TableState>(() =>
    loadTableState(name)
  );

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify({ state: tableState }));
  }, [name, tableState]);

  const updateTask = (id: number, changes: Partial<TaskState>) => {
    setTableState((prev) => ({
      tasks: {
        ...prev.tasks,
        [id]: { ...defaultTaskState, ...prev.tasks[id], ...changes },
      },
    }));
  };

  const clearTableStates = () => {
    setTableState({ tasks: {} });
  };

  const tasks = Object.values(tableState.tasks);
  const estimatedTotal = calcTotalHourMinute(
    tasks.map((task) => task.estimatedTime)
  );
  const actualTotal = calcTotalHourMinute(
    tasks.map((task) => {
      const actualTime = calcTaskActualTime(task);
      return actualTime === undefined
        ? "00:00"
        : formatHourMinute(actualTime.diffHour, actualTime.diffMinute);
    })
  );

  return (
    <div>
      <div className="flex">
        <div className="text-xl font-bold">{name}</div>
        <button
          onClick={clearTableStates}
          className="pl-2 pr-2 ml-4 rounded-lg text-white bg-primary hover:bg-secondary"
        >
          Clear
        </button>
      </div>
      <div className="flex flex-col">
        <TableHader />
        <div className="w-max min-w-max border-b-2">
          {Array(numTasks)
            .fill(0)
            .map((_, index) => {
              return (
                <Task
                  key={"task-" + index}
                  task={tableState.tasks[index] ?? defaultTaskState}
                  updateTask={(changes) => updateTask(index, changes)}
                />
              );
            })}
        </div>
        <TableSummary
          totalEstimatedTime={formatHourMinute(
            estimatedTotal.hour,
            estimatedTotal.minute
          )}
          totalActualTime={formatHourMinute(
            actualTotal.hour,
            actualTotal.minute
          )}
        />
      </div>
    </div>
  );
};
