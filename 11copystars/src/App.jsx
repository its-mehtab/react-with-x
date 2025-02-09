import { useState } from "react";
import starIcon from "./assets/star.png";
import starIconActive from "./assets/star-active.png";

const starsWrap = {
  display: "flex",
  alignItems: "center",
  gap: "4px",
};

function App() {
  const [activeStar, setActiveStar] = useState(3);
  const [tempActiveStar, setTempActiveStar] = useState(null);
  return (
    <>
      <div style={starsWrap}>
        {Array.from({ length: 5 }, (_, i) => {
          return (
            <Star
              key={i}
              onActiveStar={activeStar}
              onSetActiveStar={setActiveStar}
              currIndex={i}
              tempActiveStar={tempActiveStar}
              setTempActiveStar={setTempActiveStar}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;

function Star({
  onActiveStar,
  onSetActiveStar,
  currIndex,
  tempActiveStar,
  setTempActiveStar,
}) {
  const isActive = tempActiveStar
    ? tempActiveStar <= currIndex
    : onActiveStar <= currIndex;

  return (
    <img
      onClick={() => onSetActiveStar(currIndex + 1)}
      onMouseEnter={() => setTempActiveStar(currIndex + 1)}
      onMouseLeave={() => setTempActiveStar(null)}
      src={isActive ? starIcon : starIconActive}
      alt=""
      width={40}
    />
  );
}
