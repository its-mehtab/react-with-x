import React, { useState } from "react";
import Star from "../assets/star.png";
import StarActive from "../assets/star-active.png";

function Rating() {
  const [activeStar, setActiveStar] = useState(3);
  const [tempActiveStar, setTempActiveStar] = useState(0);

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => {
        const isActive = tempActiveStar
          ? tempActiveStar >= index + 1
          : activeStar >= index + 1;
        // const tempIsActive = tempActiveStar >= index + 1;

        return (
          <span
            onClick={() => setActiveStar(index + 1)}
            onMouseEnter={() => setTempActiveStar(index + 1)}
            onMouseLeave={() => setTempActiveStar(0)}
            key={index}
          >
            <img src={isActive ? StarActive : Star} alt="" />
          </span>
        );
      })}
    </div>
  );
}

export default Rating;
