import { TaskTable } from "./tasktable/TaskTable";

export const MainPane = () => {
  return (
    <div className="p-4">
      <div className="pt-4">
        <TaskTable tableName="AM" />
      </div>
      <div className="pt-4">
        <TaskTable tableName="PM" />
      </div>
    </div>
  );
};
