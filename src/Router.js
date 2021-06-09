import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Login from './container/Login';
import Home from './container/Home';
import YourExerciseContainer from './container/YourExerciseContainer';

const Router = ({children}) => {
  const user = useSelector(state => state.user && state.user.user);

  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/exercise">
          {!!user ? <YourExerciseContainer /> : <Redirect to="/login" />}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
