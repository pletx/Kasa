import React, { useState } from 'react';
import "./collapse.css"
import arrowdown from "./arrowdown.png"
import arrowup from "./arrowup.png"

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowIcon, setArrowIcon] = useState(arrowdown);

  const ClickCollapse = () => {
    setIsOpen(!isOpen);
    setArrowIcon(isOpen ? arrowdown : arrowup);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={ClickCollapse}>
        <div className="title">{title}</div>
        <img src={arrowIcon} alt="arrow icon"></img>
      </div>
      {isOpen && <div className="collapsetxt">{children}</div>}
    </div>
  );
};

export default Collapse;
