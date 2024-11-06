import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const textStyle = {
  padding: "0",
};
const showMoreBtn = {
  cursor: "pointer",
  marginLeft: "4px",
};

// ============ type check
TextWrap.propTypes = {
  btnTextShow: PropTypes.string,
  btnTextHide: PropTypes.string,
  btnColor: PropTypes.string,
  space: PropTypes.number,
  textShortOnLoad: PropTypes.bool,
  containerBg: PropTypes.string,
  minimumText: PropTypes.number,
};

function TextWrap({
  children,
  btnTextShow = "show more",
  btnTextHide = "show less",
  btnColor = "black",
  minimumText = "15",
  space = "0",
  textShortOnLoad = true,
  containerBg = "",
}) {
  const [shortText, setShortText] = useState(textShortOnLoad);

  function shortTextHandler() {
    setShortText((prev) => !prev);
  }

  return (
    <div style={{ padding: space, backgroundColor: containerBg }}>
      <span>
        {!shortText
          ? children
          : children.split(" ").slice(0, minimumText).join(" ") + "..."}
      </span>
      <span
        onClick={shortTextHandler}
        style={{ ...showMoreBtn, color: btnColor }}
      >
        {shortText ? btnTextShow : btnTextHide}
      </span>
    </div>
  );
}

export default TextWrap;
