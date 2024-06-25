import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const TableHader = () => {
  return (
    <div className="flex flex-row w-full border-b-2">
      <div className="w-64 min-w-64 font-bold text-center ml-4">
        <FontAwesomeIcon icon={faPen} /> Task
      </div>
      <div className="w-20 min-w-20 font-bold text-center ml-4">
        <FontAwesomeIcon icon={faStar} /> Priority
      </div>
      <div className=" w-28 min-w-28 font-bold text-center ml-4">
        <FontAwesomeIcon icon={faStopwatch} /> Estimated
      </div>
      <div className=" w-20 min-w-20 font-bold text-center ml-4">
        <FontAwesomeIcon icon={faHourglassStart} /> Start
      </div>
      <div className=" w-20 min-w-20 font-bold text-center ml-4">
        <FontAwesomeIcon icon={faHourglassEnd} /> End
      </div>
      <div className=" w-28 min-w-28 font-bold text-center ml-4">
        <FontAwesomeIcon icon={faStopwatch} /> Actual
      </div>
      <div className=" w-28 min-w-28 font-bold text-center ml-4">
        <FontAwesomeIcon icon={faCheck} /> Status
      </div>
    </div>
  );
};
