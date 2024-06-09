import { TaskTable } from "./tasktable/TaskTable";

export const MainPane = () => {
  return (
    <div className="p-4">
      <div className="p-4">
        <div className="text-xl font-bold">AM</div>
        <TaskTable />
      </div>
      <div className="p-4">
        <div className="text-xl font-bold">PM</div>
        <TaskTable />
      </div>
    </div>
  );
};
