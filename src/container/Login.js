import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setUser} from '../stores/userSlice';
import {login, create} from '../actions/loginActions';

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
  const [error, setError] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const onSuccess = resp => {
    dispatch(setUser({name: resp.username}));
    history.push('/exercise');
  };

  const onClickLogin = async () => {
    const resp = await login({username, password});
    if (resp.success) {
      onSuccess(resp);
    } else {
      setError('Incorrect username or password.');
    }
  };

  const onClickCreate = async () => {
    const resp = await create({username, password});
    if (resp.success) {
      onSuccess(resp);
    } else {
      setError(
        'Error creating user. Choose another username or try again later.',
      );
    }
  };

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
