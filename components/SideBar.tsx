"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

export const SideBar = () => {
  const menuItems = [
    { name: "Home", icon: faHouse, href: "/" },
    { name: "Config", icon: faGear, href: "/config" },
  ];
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsSidebarHovered(true)}
      onMouseLeave={() => setIsSidebarHovered(false)}
      className="sticky z-0 bg-white w-auto min-w-8 h-full border-r-2"
    >
      <div className="p-2">
        {menuItems.map((menuItem, index) => {
          return isSidebarHovered ? (
            <Link href={menuItem.href}>
              <div
                key={"menuItem-" + index}
                className="text-xl font-bold hover:text-accent pt-4 hover:cursor-pointer"
              >
                <FontAwesomeIcon icon={menuItem.icon} /> {menuItem.name}
              </div>
            </Link>
          ) : (
            <div
              key={"menuItem-" + index}
              className="text-xl font-bold hover:text-accent pt-4"
            >
              <FontAwesomeIcon icon={menuItem.icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
