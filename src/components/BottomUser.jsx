import React from "react";
import { RiLineChartLine, RiHashtag } from "react-icons/ri";
import RightBottom from "../components/RightBottom";
import LeftBottom from "./LeftBottom";
const BottomUser = () => {
  return (
    <>
      <div>
        {/* Left Bottom Side */}
        <LeftBottom/>
      </div>
      <div>
        {/* Right bottom side */}
        <RightBottom />
      </div>
    </>
  );
};

export default BottomUser;
