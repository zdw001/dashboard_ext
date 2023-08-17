import React, { useState } from "react";
import { generateRandomLogo } from "../utils/general";
import { FaEllipsisH, FaCopy } from 'react-icons/fa';
import TileSettings from "./tileSettings";
import Modal from "../elements/modal";
import WebsiteModal from "./websiteModal";

const Tile = ({website}) => {
  const [showTileSettings, setShowTileSettings] = useState(false);
  const [showEditWebiste, setShowEditWebsite] = useState(false);

  const handleHideEditWebsite = () => {
    setShowEditWebsite(false);
  }; 

  const handleLaunchTile = () => {
    window.location.href = website.link;
  };
  
  return (
    <>
      <div className="tile-wrapper" onClick={handleLaunchTile}>
        <div className="tile-content">
            <div className="tile-actions">
              <FaCopy className="icon" />
              <FaEllipsisH className="icon" onClick={e => {e.stopPropagation(); setShowTileSettings(true)}}/>
            </div>
            {
              showTileSettings && 
              <TileSettings 
                website_id={website.website_id} 
                hideMenu={e => {e.stopPropagation(); setShowTileSettings(false)}}
                showEditWebsite={() => setShowEditWebsite(true)}
                hideEditWesite={() => setShowEditWebsite(false)}
              />
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
      { showEditWebiste && 
          <Modal hideModal={handleHideEditWebsite}>
              <WebsiteModal website={website} />
          </Modal>
      }
    </>
  );
}

export default Tile;