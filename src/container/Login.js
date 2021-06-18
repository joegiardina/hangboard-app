import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, TextField} from '@material-ui/core';
import {login, create} from '../stores/userSlice';

const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 8,
};

const buttonStyle = {width: 50, margin: 8};

const InputGroup = ({children}) => (
  <div style={{marginBottom: 16}}>{children}</div>
);
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
        <TextField
          type="text"
          label="username"
          variant="outlined"
          value={username}
          onChange={event => setUsername(event.target.value.toLowerCase())}
        />
      </InputGroup>
      <InputGroup>
        <TextField
          type="password"
          label="password"
          variant="outlined"
          onChange={event => setPassword(event.target.value)}
        />
      </InputGroup>
      <InputGroup style={{flexDirection: 'row'}}>
        <Button
          style={{marginRight: 8}}
          variant="contained"
          color="primary"
          onClick={onClickLogin}
        >
          login
        </Button>
        <Button variant="contained" onClick={onClickCreate}>
          create
        </Button>
      </InputGroup>
      {!!error && <p style={{color: 'red'}}>{error}</p>}
    </CenteredColumn>
  );
};

export default Login;
