import PropTypes from "prop-types";
import React from "react";

function SectionHeader({ title, rotate }) {
  let className =
    "bg-transparent inline-block overflow-visible border border-grey-light p-3";
  let shadow = false;
  switch (rotate) {
    case "left":
      className += " -r-90 absolute pin-l";
      break;
    case "right":
      className += " r-90 absolute pin-r";
      break;
    default:
      className += " relative";
      shadow = true;
  }
  return (
    <div className={className}>
      <div
        className={`${shadow ? "" : "hidden"}
        w-full h-full absolute pin-t pin-l mt-4 ml-4 g-transparent-white`}
      >
        &nbsp;
      </div>
      <span className="text-xl font-semibold uppercase">{title}</span>
    </div>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string
};

SectionHeader.defaultProps = {
  title: ``
};

export default SectionHeader;
