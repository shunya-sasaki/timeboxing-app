export const TimeButton = (props: {
  label: string;
  setTime: (hour: number, minute: number) => void;
}) => {
  const { label, setTime } = props;

  const setCurrentTime = () => {
    const currentTime = new Date();
    setTime(currentTime.getHours(), currentTime.getMinutes());
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
