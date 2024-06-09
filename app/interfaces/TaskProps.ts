export interface TaskProps {
  id: number;
  estimatedTimes: {} | { [key: number]: string | undefined };
  setEstimatedTimes: (object: { [key: number]: string | undefined }) => void;
  actualTimes: {} | { [key: number]: string | undefined };
  setActualTimes: (object: { [key: number]: string | undefined }) => void;
}
