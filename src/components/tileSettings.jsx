import DropDownList from "../elements/dropDownList";
import { FaEdit, FaTrash } from 'react-icons/fa';

const TileSettings = ({hideMenu}) => {
  return (
    <div className="tile-settings">
      <DropDownList hideMenu={hideMenu}>
        <div className="options">
          <div className="option">
            <FaEdit className="icon" />
            <span>Edit</span>
          </div>
          <div className="option delete">
            <FaTrash className="icon" />
            <span>Delete</span>
          </div>
        </div>
      </DropDownList>
    </div>
  );
};

export default TileSettings;