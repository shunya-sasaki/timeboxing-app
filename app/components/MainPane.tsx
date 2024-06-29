/**
 * Renders the main pane component.
 * @returns The JSX element representing the main pane.
 */

import { TaskTable } from "./tasktable/TaskTable";

export const MainPane = () => {
  return (
    <div className="p-2">
      <div className="pt-4">
        <TaskTable tableName="AM" />
      </div>
      <div className="pt-4">
        <TaskTable tableName="PM" />
      </div>
    </div>
  );
};
