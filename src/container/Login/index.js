import './Login.css';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../../stores/userSlice';

const InputGroup = ({children}) => <div className="inputGroup">{children}</div>;

const Login = () => {
  const [username, setUsername] = useState();
  // const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const login = () => dispatch(setUser({name: username}));

  return (
    <div className="pageContainer">
      <div className="loginContainer">
        <InputGroup>
          <label>
            Username:{' '}
            <input
              type="text"
              onChange={event => setUsername(event.target.value)}
            />
          </label>
        </InputGroup>
        {/*
        <InputGroup>
          <label>Password:{' '}
            <input type="password" onChange={event => setPassword(event.target.value)}  />
          </label>
        </InputGroup>
        */}
        <button onClick={login}>login</button>
      </div>
    </div>
  );
};

export default Login;
