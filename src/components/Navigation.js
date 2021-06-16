import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../stores/userSlice';
import {useHistory} from 'react-router-dom';
import Icon from './Icon';

const Navigation = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.user && state.user.user);
  //menu will always load in closed because of false
  const [showMenu, setShowMenu] = useState(false);

  const signOut = () => {
    dispatch(setUser(null));
    setShowMenu(false);
    history.push('/');
  };

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
          <div className="menuOptions" onClick={signOut}>
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
        <Icon
          className="closedMenu"
          name="bars"
          onClick={() => setShowMenu(!showMenu)}
        />
      </span>
      {menu}
    </nav>
  );
};

export default Navigation;
