import React, { useEffect, useRef } from 'react';
import gmail from "../assets/img/quicklinks/gmail.png";
import gCal from "../assets/img/quicklinks/google_calendar.png";

const QuickLinks = () => {
  const handleLinkTo = (e, url) => {
    e.stopPropagation();
    window.location.href = url;
  };

  return (
    <div className="quick-links">
      <div className="link" onClick={(e) => handleLinkTo(e, "https://gmail.com")}>
        <img  src={gmail} alt="gmail"/>
        <div className='link-text'>Gmail</div>
      </div>
      <div className="link" onClick={(e) => handleLinkTo(e, "https://calendar.google.com")}>
        <img  src={gCal} alt="gCal" />
        <div className='link-text'>Calendar</div>
      </div>
    </div>
  );
}

export default QuickLinks;