/**
 * Represents a component that displays and allows selection of task status.
 *
 * @component
 * @param {Object} props - The properties for the TaskStatus component.
 * @param {string} props.status - The current status of the task.
 * @param {Function} props.setStatus - A function to update the status of the task.
 * @returns {JSX.Element} The rendered TaskStatus component.
 */
export const TaskStatus = (props: {
  status: string;
  setStatus: (status: string) => void;
}) => {
  const { status, setStatus } = props;
  return (
    <div>
      <select
        value={status}
        className="hover:border-2"
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};
