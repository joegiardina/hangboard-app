import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../stores/userSlice';
import {clearExercises} from '../stores/exerciseSlice';
import {useHistory} from 'react-router-dom';
import Icon from './Icon';

const Navigation = ({style}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.user && state.user.user);
  const [showMenu, setShowMenu] = useState(false);

  const signOut = () => {
    dispatch(logout());
    dispatch(clearExercises());
    setShowMenu(false);
    history.push('/');
  };

  return (
    <div style={style}>
      <Icon name="bars" onClick={() => setShowMenu(!showMenu)} />
      {showMenu && (
        <div
          style={{
            position: 'absolute',
            right: 0,
            height: '50vh',
            backgroundColor: '#3e4c5e',
            borderBottomLeftRadius: '1rem',
            marginTop: '2rem',
          }}
        >
          <a className="menuOptions" href="/">
            Home
          </a>
          <a className="menuOptions" href="/exercise">
            Exercises
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
      )}
    </div>
  );
};

export default Navigation;
