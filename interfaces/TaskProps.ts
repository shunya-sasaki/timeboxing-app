import { TaskState } from "./TableState";

export interface TaskProps {
  task: TaskState;
  updateTask: (changes: Partial<TaskState>) => void;
}
