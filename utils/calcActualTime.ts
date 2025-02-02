export const calcActualTime = (
  startHour: number,
  startMinute: number,
  endHour: number,
  endMinute: number
) => {
  let diffHour = endHour - startHour;
  let diffMinute = endMinute - startMinute;
  if (diffMinute < 0) {
    diffMinute += 60;
    diffHour -= 1;
  }

  return { diffHour, diffMinute };
};
