import React, { useState } from "react";
import { generateRandomLogo } from "../utils/general";
import { FaEllipsisH, FaCopy } from 'react-icons/fa';
import TileSettings from "./tileSettings";


const Tile = ({website}) => {
  const [showTileSettings, setShowTileSettings] = useState(false);

  return (
    <div className="tile-wrapper">
        <div className="tile-content">
            <div className="tile-actions">
              <FaCopy className="icon" />
              <FaEllipsisH className="icon" onClick={() => setShowTileSettings(true)}/>
            </div>
            {
              showTileSettings && <TileSettings website_id={website.website_id} hideMenu={() => setShowTileSettings(false)}/>
            }
            {
              website.img ? (
                <img ref={website.img} alt="tile" /> 
              ) : (
                <div className='tile-logo-wrapper'
                    style={{backgroundColor: generateRandomLogo(website.name)}} 
                >
                    <span>{website.name.charAt(0).toUpperCase()}</span>
                </div>
              )
            }
            <div className="tile-name">{website.name}</div>
            <div className="tile-username text-small">{website.username}</div>
        </div>
    </div>
  );
}

export default Tile;