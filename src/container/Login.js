import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {login, create} from '../stores/userSlice';

const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 8,
};

const buttonStyle = {width: 50, margin: 8};

const InputGroup = ({children}) => <div>{children}</div>;
const CenteredColumn = ({children}) => (
  <div style={columnStyle}>{children}</div>
);

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const error = useSelector(state => state.user.error);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();

  useEffect(() => {
    if (user) {
      history.push('/exercise');
    }
  }, [user, history]);

  const onClickLogin = () => dispatch(login({username, password}));
  const onClickCreate = () => dispatch(create({username, password}));

  return (
    <CenteredColumn>
      <InputGroup>
        <label>
          Username:{' '}
          <input
            type="text"
            value={username}
            onChange={event => setUsername(event.target.value.toLowerCase())}
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
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <button style={buttonStyle} onClick={onClickLogin}>
          login
        </button>
        <button style={buttonStyle} onClick={onClickCreate}>
          create
        </button>
      </div>
      {!!error && <p style={{color: 'red'}}>{error}</p>}
    </CenteredColumn>
  );
};

export default Login;
