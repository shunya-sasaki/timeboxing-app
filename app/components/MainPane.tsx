import { TaskTable } from "./tasktable/TaskTable";

export const MainPane = () => {
  return (
    <div className="pl-4">
      <div className="p-4">
        <div className="text-xl font-bold">AM</div>
        <TaskTable tableName="AM" />
      </div>
      <div className="p-4">
        <div className="text-xl font-bold">PM</div>
        <TaskTable tableName="PM" />
      </div>
    </div>
  );
};
