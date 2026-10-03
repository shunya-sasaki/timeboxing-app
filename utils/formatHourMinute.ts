export const formatHourMinute = (hour: number, minute: number): string => {
  return hour.toString().padStart(2, "0") + ":" + minute.toString().padStart(2, "0");
};
