export const strTimeToMinute = (strTime: string): number => {
  const [hour, minute] = strTime.split(":").map((str) => parseInt(str));
  return hour * 60 + minute;
};
