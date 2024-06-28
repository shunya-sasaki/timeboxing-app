import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export const SideBar = (props: {isHovered: boolean}) => {

  const isHovered = props.isHovered;

  const menuItems = [
    { name: "Home", icon: faHouse },
    { name: "Config", icon: faGear },
  ];

  return (
    <div className="p-2">
      {menuItems.map((menuItem, index) => {
        return (
          isHovered ?
          <div key={"menuItem-" + index} className="text-xl font-bold hover:text-accent pt-4">
            <FontAwesomeIcon icon={menuItem.icon} /> {menuItem.name}
          </div>
          :
          <div key={"menuItem-" + index} className="text-xl font-bold hover:text-accent pt-4">
            <FontAwesomeIcon icon={menuItem.icon} />
          </div>

        );
      })}
    </div>
  );
};
