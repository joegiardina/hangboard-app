import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Login from './container/Login/index';
import Home from './container/Home';
import YourExerciseContainer from './container/YourExerciseContainer';

const Router = () => {
  const user = useSelector(state => state.user.user);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">{user ? <YourExerciseContainer /> : <Login />}</Route>
        {/*
        <Route path="/exercise">
          <YourExerciseContainer />
        </Route>
      */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
