"use client";
import { TaskTable } from "@/app/components/TaskTables/TaskTable";

export default function Home() {
  return (
    <div className="px-2 min-h-full h-full overflow-y-scroll">
      <div className="pt-4">
        <TaskTable tableName="AM" />
      </div>
      <div className="pt-4">
        <TaskTable tableName="PM" />
      </div>
    </div>
  );
}
