import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  //menu will always load in closed because of false
  const [showMenu, setshowMenu] = useState(false);

  let menu;

  if (showMenu) {
    menu = (
      <div className="openMenu">
        <a className="menuOptions" href="#">
          Login
        </a>
        <a className="menuOptions" href="#">
          Blog
        </a>
        <a className="menuOptions" href="#">
          My results
        </a>
      </div>
    );
  }
  return (
    <nav>
      <span className="navText">
        <FontAwesomeIcon
          className="closedMenu"
          icon={faBars}
          onClick={() => setshowMenu(!showMenu)}
        />
      </span>
      {menu}
    </nav>
  );
};

export default Navigation;
