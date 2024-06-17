import { useEffect, useState } from "react";
import { Task } from "./Task";
import { strTimeToMinute } from "@/app/utils/strTimeToMinute";
import { TableHader } from "./TableHeader";
import { TableSummary } from "./TableSummary";
import { TableState } from "@/app/interfaces/TableState";

export const TaskTable = (props: { tableName: string }) => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const name = props.tableName;
  const numTasks = 8;
  const [estimatedTimes, setEstimatedTimes] = useState<{} | { string: string }>(
    {}
  );
  const [totalEstimatedTime, setTotalEstimatedTime] = useState<string>("00:00");

  const [actualTimes, setActualTimes] = useState<{} | { string: string }>({});
  const [totalActualTime, setTotalActualTime] = useState<string>("00:00");

  const [tableState, setTableState] = useState<TableState>({ tasks: {} });

  const clearTableStates = () => {
    setIsInitialized(false);
    setEstimatedTimes({});
    setActualTimes({});
    setTableState({ tasks: {} });
  };

  useEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true);
    }
  }, [isInitialized]);

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

  useEffect(() => {
    if (isInitialized && Object.keys(tableState.tasks).length > 0) {
      localStorage.setItem(
        name,
        JSON.stringify({
          state: tableState,
        })
      );
    }
  }, [isInitialized, name, tableState]);

  useEffect(() => {
    const storedData = localStorage.getItem(name);
    if (storedData !== null) {
      const parsedData = JSON.parse(storedData);
      setTableState(parsedData.state);
    }
    setIsInitialized(true);
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="text-xl font-bold">{name}</div>
        <button onClick={clearTableStates}
        className="pl-2 pr-2 ml-4 rounded-lg text-white bg-primary hover:bg-secondary">Clear</button>
      </div>
      <div className="flex flex-col">
        <TableHader />
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
                  actualTimes={actualTimes}
                  setActualTimes={setActualTimes}
                  tableState={tableState}
                  setTableState={setTableState}
                  tableIsInitialized={isInitialized}
                />
              );
            })}
        </div>
        <TableSummary
          totalEstimatedTime={totalEstimatedTime}
          totalActualTime={totalActualTime}
        />
      </div>
    </div>
  );
};
