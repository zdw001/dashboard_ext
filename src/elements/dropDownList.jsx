import React from "react";

const DropDownList = ({hideMenu, children}) => {
    const renderChildren = () => {
        return React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            // force props here...
          });
        });
      };
    

    return (
        <>
          <div className="drop-down-list-background" onClick={hideMenu}/>
          <div className="drop-down-list-container">
            <div className="drop-down-list-content">
              { renderChildren() }
            </div>
          </div>
        </>
    );
}

export default DropDownList;