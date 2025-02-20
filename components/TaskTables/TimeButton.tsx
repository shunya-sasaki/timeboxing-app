export const TimeButton = (props: {
  label: string;
  setHour: (value: string) => void;
  setMinute: (value: string) => void;
  setStatus: (value: string) => void;
  pushedStatus: string;
}) => {
  const { label, setHour, setMinute, setStatus, pushedStatus } = props;

  const setCurrentTime = () => {
    const currentTime = new Date();
    setHour(currentTime.getHours().toString().padStart(2, "0"));
    setMinute(currentTime.getMinutes().toString().padStart(2, "0"));
    setStatus(pushedStatus);
  };
  return (
    <button
      className=" px-2  rounded bg-primary hover:bg-secondary text-white"
      onClick={() => {
        setCurrentTime();
      }}
    >
      {label}
    </button>
  );
};
