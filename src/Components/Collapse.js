import React, { useState } from 'react';
import "../Components/collapse.css"
const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="title">{title}</div>
      </div>
      {isOpen && <div className="collapsetxt">{children}</div>}
    </div>
  );
};

export default Collapse;
