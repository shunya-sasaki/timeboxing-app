export const TaskPriority = (props: {
  priority: string;
  setPriority: (priority: string) => void;
}) => {
  const {priority, setPriority} = props;
  return (
    <div>
      <select
        value={priority}
        className="hover:border-2"
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="⭐️">★</option>
        <option value="⭐️⭐️">★★</option>
        <option value="⭐️⭐️⭐️">★★★️</option>
      </select>
    </div>
  );
};
