import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {setUser} from '../stores/userSlice';

const Header = () => {
  const user = useSelector(state => state.user.user);
  const [username, setUsername] = useState();

  useEffect(() => {
    if (user) {
      setUsername(user.name);
    }
  }, [user]);

  return (
    <div className="headerContainer">
      <h1 className="headerText">Handboarding Log</h1>
      <div className="headerRight flex">
        {!!username && <h2 className="username">Hello, {username}</h2>}
      </div>
    </div>
  );
};

export default Header;
