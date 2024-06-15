export interface TableState {
    tasks: {
        [key:number]: {
            name: string;
            priority: string;
            estimatedTime: string | undefined;
            startHour: number | undefined;
            startMinute: number | undefined;
            endHour: number | undefined;
            endMinute: number | undefined;
            status: string;
        }
    },
}