import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {getExercisesByName} from '../../actions/exerciseFormActions';
import ReactCalendar from 'react-calendar';
import moment from 'moment';
import './Calendar.css';
import Icon from '../Icon';

const Container = ({children}) => (
  <div
    style={{
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 24,
    }}
  >
    {children}
  </div>
);

const Exercise = ({exercise}) => (
  <div>
    <p>Type: {exercise.exerciseType}</p>
    <p>Hold Size: {exercise.holdSize}</p>
    <p>Weight: {exercise.weight} lb</p>
  </div>
);

const Calendar = () => {
  const user = useSelector(state => state.user.user);
  const [exercise, setExercise] = useState({});
  const [exercises, setExercises] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const findExercise = date =>
    exercises.find(
      exercise =>
        exercise.created_at && moment(exercise.created_at).isSame(date, 'day'),
    );

  const onClickScheduleWorkout = () => alert('Not yet supported.');

  useEffect(() => {
    const updateExercises = async name => {
      const result = await getExercisesByName(name);
      if (result) {
        setExercises(result);
      }
    };
    updateExercises(user.name);
  }, [user]);

  useEffect(() => {
    const found = findExercise(selectedDate);
    setExercise(found);
  }, [exercises, selectedDate]);

  const TileContent = ({date}) => {
    const found = findExercise(date);
    return <div>{found && <Icon name="dumbbell" />}</div>;
  };

  return (
    <Container>
      <ReactCalendar
        minDate={new Date('01-01-2020')}
        tileContent={TileContent}
        onChange={setSelectedDate}
        value={selectedDate}
      />
      <div style={{margin: 16}}>
        <p>{moment(selectedDate).format('MMMM DD YYYY')}</p>
        {moment().isBefore(selectedDate) && (
          <button onClick={onClickScheduleWorkout}>Schedule Workout</button>
        )}
        {!!exercise && <Exercise exercise={exercise} />}
      </div>
    </Container>
  );
};

export default Calendar;
