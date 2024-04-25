import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar_data() {
  return (
    <div>Sidebar_data</div>
  )
}


const sidebardata = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faHome} />,
    title: "Home"
  },
];

export default Sidebar_data