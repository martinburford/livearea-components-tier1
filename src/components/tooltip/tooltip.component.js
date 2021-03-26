import Classnames from "classnames/bind";
import PropTypes from "prop-types";
import React from "react";


// Styles
import styles from "./tooltip.module.scss";

export default function Tooltip({ children, style }){
  // Bind classnames to the components CSS module object in order to access its modular styles
  const cx = Classnames.bind(styles);
  const classnames = cx({
    "style-default": style === "default",
    "style-error": style === "error",
    "style-success": style === "success",
    tooltip: true
  });

  return (
    <div className={classnames} data-selector="tooltip">
      {children}
    </div>
  );
};

Tooltip.propTypes = {
  /** Children description */
  children: PropTypes.element,
  /** Style description */
  style: PropTypes.oneOf(["default","error","success"])
};
