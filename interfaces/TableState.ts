export interface TaskState {
  name: string;
  priority: string;
  estimatedTime: string | undefined;
  startHour: number | undefined;
  startMinute: number | undefined;
  endHour: number | undefined;
  endMinute: number | undefined;
  status: string;
}

export interface TableState {
  tasks: {
    [key: number]: TaskState;
  };
}
