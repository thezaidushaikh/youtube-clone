import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome, faVideoCamera, faHouseFloodWaterCircleArrowRight
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({ sidebar }) {
  return (
    <div className={` w-44 h-screen  p-2 ${sidebar ? "" : "w-[5.5%]"}`}>
      {sidebardata.map((sbdata, index) => (
        <div key={sbdata.id} className="main_div  flex flex-col gap-1">
          <div className="iner_main_div   hover:bg-white hover:bg-opacity-20 grid grid-flow-col items-center gap-2 ml-2 px-3 py-2 rounded-xl cursor-pointer">
            <div className="icon_div   text-xl text-white">{sbdata.icon}</div>
            <div
              className={`text_div  text-white col-span-6 ${
                sidebar ? "" : "hidden"
              }`}
            >
              {sbdata.title}
            </div>
          </div>
        </div>
      ))}
      <hr className={`mt-4 border-gray-600 ${sidebar ? "" : "hidden"}`} />
    </div>
  );
}


const sidebardata = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faHome} />,
    title: "Home",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faVideoCamera} />,
    title: "Shorts",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faHouseFloodWaterCircleArrowRight} />,
    title: "Subscription",
  },
];

export default Sidebar;

