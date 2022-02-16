import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavbarSection,
  LogoText,
  Logo,
  UlList,
  Anchor,
  ListItem,
  Taggle,
} from "./style.js";
import "./style.js";

const Nav = () => {
  const [taggle, setTaggle] = useState(false);
  const clickHandler = () => {
    setTaggle(!taggle);
  };
  return (
    <React.Fragment>
      <NavbarSection>
        <div className="container">
          <Logo>
            <LogoText className="logo-text">Ultra Profile</LogoText>
          </Logo>

          <UlList theState={taggle === true ? "True" : "False"}>
            <ListItem className="list-item">
              <Link to="/" onClick={()=>setTaggle(false)}>Home</Link>
            </ListItem>
            <ListItem className="list-item">
              <Anchor href="#" onClick={()=>setTaggle(false)}>Resume</Anchor>
            </ListItem>
            <ListItem className="list-item">
              <Anchor href="#" onClick={()=>setTaggle(false)}>Portfolio</Anchor>
            </ListItem>
            <ListItem className="list-item">
              <Anchor href="#" onClick={()=>setTaggle(false)}>Work</Anchor>
            </ListItem>
            <ListItem className="list-item">
              <Anchor href="#" onClick={()=>setTaggle(false)}>About</Anchor>
            </ListItem>
            <ListItem className="list-item">
              <Link to="/contact" onClick={()=>setTaggle(false)}>Contact</Link>
            </ListItem>
          </UlList>
          <Taggle onClick={clickHandler}>
            <i className={taggle?"fa fa-times":"fa fa-bars"} aria-hidden="true"></i>
          </Taggle>
        </div>
      </NavbarSection>
    </React.Fragment>
  );
};

export default Nav;
