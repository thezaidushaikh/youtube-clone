import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faVideo, faBell, faSearch, faMicrophone } from "@fortawesome/free-solid-svg-icons";


function Navbar({ setSidebar }) {
  return (
    <>
      <div className="nav_bar   z-50 w-full py-2 px-5 flex items-center justify-between">
        <div className="left_nav_items flex ">
          <button 
            onClick={() =>
              setSidebar((prev) => (prev === false ? true : false))
            }
            className=" flex justify-center mr-10 items-center text-white text-xl px-3 py-3  rounded-full bg-white bg-opacity-0 hover:bg-opacity-15"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="logo flex items-center justify-center -ml-8">
            <img src="./src/assets/img/youtube.png" className="w-32" alt="" />
          </div>
        </div>
        <div className="center_nav_items flex gap-5  ">
          <div className="search_bar flex ">
            <form action="">
              <input
                type="text"
                placeholder="Search"
                className="py-2.5 px-4 w-[40vw] text-white outline-0 placeholder-zinc-400  rounded-full rounded-r-none border-[1px] border-r-0 border-zinc-700 bg-transparent backdrop-brightness-150"
              />
            </form>
            <div className="flex items-center justify-center py-0 px-5 rounded-r-full text-xl border-[1px] border-zinc-700 text-white bg-white bg-opacity-15 ">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
          <div className=" flex justify-center items-center voice_button py-3 px-4 text-xl rounded-full bg-white bg-opacity-15 hover:bg-opacity-20 cursor-pointer text-white ">
            <FontAwesomeIcon icon={faMicrophone} />
          </div>
        </div>
        <div className="right_nav-items  flex items-center justify-center  gap-2">
          <div className="icon_div flex gap-1">
            <span className="text-white text-xl py-3 px-3  rounded-full bg-white bg-opacity-0 hover:bg-opacity-15 cursor-pointer flex justify-center items-center">
              <FontAwesomeIcon icon={faVideo} />
            </span>
            <span className="text-white text-xl py-3 px-3  rounded-full bg-white bg-opacity-0 hover:bg-opacity-15 cursor-pointer flex justify-center items-center">
              <FontAwesomeIcon icon={faBell} />
            </span>
          </div>
          <div className="profile_img rounded-full  ">
            <img
              src="./src/assets/img/profile.jpeg"
              className="w-9 rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar