import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Login from './container/Login/index';
import Home from './container/Home';
import YourExerciseContainer from './container/YourExerciseContainer';

const Router = () => {
  const user = useSelector(state => state.user && state.user.user);

  return (
    <BrowserRouter>
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
