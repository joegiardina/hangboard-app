import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setUser} from '../stores/userSlice';

const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 8,
};

const InputGroup = ({children}) => <div>{children}</div>;
const CenteredColumn = ({children}) => (
  <div style={columnStyle}>{children}</div>
);

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const login = () => {
    dispatch(setUser({name: username}));
    history.push('/exercise');
  };

  return (
    <CenteredColumn>
      <InputGroup>
        <label>
          Username:{' '}
          <input
            type="text"
            onChange={event => setUsername(event.target.value)}
          />
        </label>
      </InputGroup>
      <InputGroup>
        <label>
          Password:{' '}
          <input
            type="password"
            onChange={event => setPassword(event.target.value)}
          />
        </label>
      </InputGroup>
      <button style={{width: 50, margin: 8}} onClick={login}>
        login
      </button>
    </CenteredColumn>
  );
};

export default Login;
