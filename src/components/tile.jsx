import React from "react";
import { generateRandomLogo } from "../utils/general";

const Tile = ({website}) => {
    return (
      <div className="tile-wrapper">
          <div className="tile-content">
              {
                website.img ? (
                  <img ref={website.img} alt="tile" /> 
                ) : (
                  <div className='website-logo-wrapper'
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