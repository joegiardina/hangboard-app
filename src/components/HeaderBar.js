import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import {logout} from '../stores/userSlice';
import {useHistory} from 'react-router-dom';
import {clearExercises} from '../stores/exerciseSlice';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import SignOutIcon from '@material-ui/icons/ExitToApp';
import ExerciseIcon from '@material-ui/icons/FitnessCenter';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

const HeaderBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.user.user);
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const signOut = () => {
    dispatch(logout());
    dispatch(clearExercises());
    closeDrawer();
    goTo('/');
  };

  const goTo = path => {
    closeDrawer();
    history.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar style={{backgroundColor: '#3e4c5e'}}>
        <Typography style={{flex: 1}} variant="h6">
          Hangboarding App
        </Typography>
        {!user ? (
          <Button color="inherit" onClick={() => goTo('/login')}>
            Login
          </Button>
        ) : (
          <Typography variant="buttonText">Hello, {user.name}</Typography>
        )}
        <IconButton color="inherit">
          <MenuIcon onClick={openDrawer} />
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <List>
          <ListItem button key="home" onClick={() => goTo('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          {!!user && (
            <>
              <ListItem button key="exercise" onClick={() => goTo('/exercise')}>
                <ListItemIcon>
                  <ExerciseIcon />
                </ListItemIcon>
                <ListItemText primary="Exercises" />
              </ListItem>
              <ListItem button key="logout" onClick={signOut}>
                <ListItemIcon>
                  <SignOutIcon />
                </ListItemIcon>
                <ListItemText primary="Log out" />
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default HeaderBar;
