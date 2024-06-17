import { TaskTable } from "./tasktable/TaskTable";

export const MainPane = () => {
  return (
    <div className="pl-4">
      <div className="p-4">
        <TaskTable tableName="AM" />
      </div>
      <div className="p-4">
        <TaskTable tableName="PM" />
      </div>
    </div>
  );
};
