import { strTimeToMinute } from "./strTimeToMinute";

export const calcTotalHourMinute = (
  times: {} | { [key: number]: string | undefined }
) => {
  let totalMinute = 0;
  Object.values(times).map((actualTime) => {
    if (actualTime !== undefined) {
      const tmpMinute = strTimeToMinute(actualTime);
      totalMinute += tmpMinute;
    }
  });
  const hour = Math.floor(totalMinute / 60);
  const minute = totalMinute % 60;
  return { hour, minute };
};
