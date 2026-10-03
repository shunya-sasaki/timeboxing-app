import { TaskState } from "../interfaces/TableState";
import { calcActualTime } from "./calcActualTime";

export const calcTaskActualTime = (task: TaskState) => {
  const { startHour, startMinute, endHour, endMinute } = task;
  if (
    startHour === undefined ||
    startMinute === undefined ||
    endHour === undefined ||
    endMinute === undefined
  ) {
    return undefined;
  }
  return calcActualTime(startHour, startMinute, endHour, endMinute);
};
