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

  return (
    <div style={{display: 'flex'}}>
      <div style={{flex: 1, display: 'flex', alignItems: 'flex-start'}}>
        <Calendar />
      </div>
    </div>
  );
};

export default YourExerciseContainer;
