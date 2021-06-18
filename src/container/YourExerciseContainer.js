import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchExercisesByUsername} from '../stores/exerciseSlice';
import ExerciseForm from '../components/ExerciseForm';
import Calendar from '../components/Calendar';

const YourExerciseContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    dispatch(fetchExercisesByUsername(user.name));
  }, [user, dispatch]);

  return <Calendar />;
};

export default YourExerciseContainer;
