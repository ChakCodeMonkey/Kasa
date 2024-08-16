import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Collapse({ data }) {
  return (
    <div className="collapse-list">
      {data.map((item) => (
        <CollapseItem key={item.id} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

function CollapseItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-item">
      <button className="collapse-title" onClick={toggleCollapse}>
        {title}
        <FontAwesomeIcon
          icon={isOpen ? faChevronDown : faChevronUp}
          className="collapse-icon"
          style={{ marginLeft: '10px' }}
        />
      </button>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};
