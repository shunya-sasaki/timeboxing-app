import { useState } from "react";
import { useEffect } from "react";

export const ActualTime = (props: {
  hour: number | undefined;
  minute: number | undefined;
}) => {
  const { hour, minute } = props;
  return (
    <div>
      {hour !== undefined && minute !== undefined ? (
        <div>
          {hour.toString().padStart(2, "0")}:
          {minute.toString().padStart(2, "0")}
        </div>
      ) : (
        <div>
          -
        </div>
      )}
    </div>
  );
};
