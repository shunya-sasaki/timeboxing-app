export const TableSummary = (props: {
  totalEstimatedTime: string;
  totalActualTime: string;
}) => {
  const { totalEstimatedTime, totalActualTime } = props;
  return (
    <div className="flex flex-row">
      <div className="w-64 min-w-64 ml-4"></div>
      <div className="w-20 min-w-20 ml-4"></div>
      <div className="w-14 min-w-14 ml-16 pl-2">{totalEstimatedTime}</div>
      <div className="w-20 min-w-20 ml-4 text-right"></div>
      <div className="w-20 min-w-20 ml-4 text-right"></div>
      <div className="w-32 min-w-32 ml-2 text-right">{totalActualTime}</div>
      <div className="w-28 min-w-28 ml-4 text-right"></div>
    </div>
  );
};
