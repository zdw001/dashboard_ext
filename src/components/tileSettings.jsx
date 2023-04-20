import DropDownList from "../elements/dropDownList";
import { FaEdit, FaTrash } from 'react-icons/fa';

const TileSettings = ({hideMenu, website_id, setUserData}) => {

  const handleDeleteWebsite = () => {
      // TODO: "are you sure?";
        
      // Save to DB
      fetch('http://localhost:8080/delete-website', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            website_id: website_id
        })
    }).then(function(response) {
        return response.json();
    }).then(data => {
        // SUCCESS
        console.log('SUCCESS');

        // TODO: remove
        setUserData(data.user)
    }).catch(err => {
        console.log('ERROR')
        console.log(err);
    });
  };

  return (
    <div className="tile-settings">
      <DropDownList hideMenu={hideMenu}>
        <div className="options">
          <div className="option">
            <FaEdit className="icon" />
            <span>Edit</span>
          </div>
          <div className="option delete" onClick={handleDeleteWebsite}>
            <FaTrash className="icon" />
            <span>Delete</span>
          </div>
        </div>
      </DropDownList>
    </div>
  );
};

export default TileSettings;