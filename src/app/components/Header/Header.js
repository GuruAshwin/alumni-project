import React from "react";
import "./Header.css"
import { ButtonGroup, Dropdown, DropdownButton} from "react-bootstrap";

export default function HeaderTem() {


  return (
    <div className="Header">
      <div className="containerStyles" >
        <div className="logo">
              <div>
                <img src="/logo.png" alt="logo" className="logoImg"></img>
              </div>
              <div className="logo-text">
                <h1>SATHYABAMA</h1>
                <div className="subtitle">
                  <h4>INSTITUTE OF SCIENCE AND TECHNOLOGY</h4>
                  <h4>(DEEMED TO BE UNIVERSITY)</h4>
                  <h4>CATEGORY-1 UNIVERSITY BY UGC</h4>
                </div>
              </div>
        </div>
      <div className="buttoncontainer">
        <button className="buttonStyles">
          LOGIN
        </button>
      </div>
    </div>
    <div className="menuBar">
        <div>
        <>
          {['HOME', 'AWARDS', 'GALLERY', 'EVENTS', 'ABOUT US', 'CONTACT'].map(
            (variant) => (
              <DropdownButton
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toLowerCase()}
                title={variant}
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                  Active Item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton>
            ),
          )}
        </>
        </div>
    </div>

    </div>
    
  );



}