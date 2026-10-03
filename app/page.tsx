"use client";
import dynamic from "next/dynamic";

// TaskTable reads its state from localStorage, which is not available during
// static export, so render it on the client only.
const TaskTable = dynamic(
  () => import("@/components/TaskTables/TaskTable").then((m) => m.TaskTable),
  { ssr: false }
);

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
