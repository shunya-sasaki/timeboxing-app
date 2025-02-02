import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="h-full text-xl font-bold p-2 bg-primary text-white">
      <FontAwesomeIcon icon={faClock}/> Time Boxing
    </div>
  );
};
