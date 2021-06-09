import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {setUser} from '../stores/userSlice';

const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user && state.user.user);
  //menu will always load in closed because of false
  const [showMenu, setshowMenu] = useState(false);

  let menu;

  if (showMenu) {
    menu = (
      <div className="openMenu">
        <a className="menuOptions" href="/">
          Home
        </a>
        <a className="menuOptions" href="/exercise">
          My results
        </a>
        {!!user ? (
          <div className="menuOptions" onClick={() => dispatch(setUser(null))}>
            Log Out
          </div>
        ) : (
          <a className="menuOptions" href="/login">
            Login
          </a>
        )}
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
