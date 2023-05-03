import { useState } from "react";
import DropDownList from "../elements/dropDownList";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux'
import { setUserData } from '../slices/userDataSlice';
import Modal from "../elements/modal";
import WebsiteModal from "./websiteModal";

const TileSettings = ({hideMenu, website_id}) => {
  const [showEditWebiste, setShowEditWebsite] = useState(false);

  const dispatch = useDispatch();

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
        console.log(data.user)

        // TODO: remove
        dispatch(setUserData(data.user))
    }).catch(err => {
        console.log('ERROR')
        console.log(err);
    });
  };

  const handleEditWebsite = () => {
    console.log('handleEditWebsite');

    setShowEditWebsite(true);
  };

  return (
    <div className="tile-settings">
      <DropDownList hideMenu={hideMenu}>
        <div className="options">
          <div className="option" onClick={handleEditWebsite}>
            <FaEdit className="icon" />
            <span>Edit</span>
          </div>
          <div className="option delete" onClick={handleDeleteWebsite}>
            <FaTrash className="icon" />
            <span>Delete</span>
          </div>
        </div>
      </DropDownList>
      { showEditWebiste && 
          <Modal hideModal={() => setShowEditWebsite(false)}>
              <WebsiteModal website_id={website_id} />
          </Modal>
      }
    </div>
  );
};

export default TileSettings;