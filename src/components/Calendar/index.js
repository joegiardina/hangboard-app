import _ from 'lodash';
import {useState, useEffect, useCallback} from 'react';
import {useSelector} from 'react-redux';
import ReactCalendar from 'react-calendar';
import moment from 'moment';
import './Calendar.css';
import Icon from '../Icon';
import ExerciseFormModal from '../ExerciseFormModal';
import {Button, Modal} from '@material-ui/core';

const Container = ({children}) => (
  <div
    style={{
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      margin: 24,
    }}
  >
    {children}
  </div>
);

const Exercise = ({exercise, onClick}) => (
  <div>
    <Button
      style={{
        height: 100,
        width: 250,
        marginTop: 8,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}
      variant="outlined"
      onClick={onClick}
    >
      <div
        style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}
      >
        <p>Type: {exercise.exerciseType}</p>
        <p>Hold Size: {exercise.holdSize}</p>
        {!!exercise.weight && <p>Weight: {exercise.weight} lb</p>}
      </div>
    </Button>
  </div>
);

const Calendar = () => {
  const allExercises = useSelector(state => state.exercise.all);
  const exercisesLoading = useSelector(state => state.exercise.loading);
  const [selectedExercises, setSelectedExercises] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [editingExercise, setEditingExercise] = useState(null);

  const findExercises = useCallback(
    date =>
      allExercises.filter(
        exercise => exercise.date && moment(exercise.date).isSame(date, 'day'),
      ),
    [allExercises],
  );

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setEditingExercise(null);
    setShowModal(false);
  };

  useEffect(() => {
    const selected = findExercises(selectedDate);
    setSelectedExercises(selected);
  }, [allExercises, selectedDate, findExercises]);

  const TileContent = ({date}) => {
    const found = findExercises(date);
    return <div>{!!found.length && <Icon name="dumbbell" />}</div>;
  };

  if (!allExercises.length && exercisesLoading) {
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <Container>
      <ExerciseFormModal
        open={showModal}
        onClose={closeModal}
        onSubmit={closeModal}
        date={selectedDate.toISOString()}
        exercise={editingExercise}
      />
      <ReactCalendar
        minDate={new Date('01-01-2021')}
        tileContent={TileContent}
        onChange={setSelectedDate}
        value={selectedDate}
      />
      <div style={{margin: 16, alignSelf: 'flex-start', width: 500}}>
        <h2>{moment(selectedDate).format('MMMM DD YYYY')}</h2>
        {!!selectedExercises.length && (
          <>
            <h4 style={{marginTop: 16}}>Exercises</h4>
            <div
              style={{
                marginBottom: 16,
                flexDirection: 'column',
                display: 'flex',
              }}
            >
              {_.map(selectedExercises, exercise => (
                <Exercise
                  onClick={() => {
                    setEditingExercise(exercise);
                    openModal();
                  }}
                  key={`exercise_${exercise.id}`}
                  exercise={exercise}
                />
              ))}
            </div>
          </>
        )}
        <Button variant="contained" color="secondary" onClick={openModal}>
          {moment().isBefore(selectedDate) ? 'Schedule' : 'Log'} Workout
        </Button>
      </div>
    </Container>
  );
};

export default Calendar;
