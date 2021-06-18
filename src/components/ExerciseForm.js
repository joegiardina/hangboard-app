import _ from 'lodash';
import moment from 'moment';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {saveExercise} from '../stores/exerciseSlice';
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';

const REQUIRED_FIELDS = ['name', 'exerciseType', 'holdSize'];
const BASE_EXERCISE = {
  exerciseType: '',
  holdSize: '',
  weight: '',
};

const Spacer = () => <div style={{margin: 8}} />;

const ExerciseForm = ({exercise, date, onSubmit = _.noop}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const [data, setData] = useState(BASE_EXERCISE);
  const [canSave, setCanSave] = useState(false);

  const updateExercise = (key, value) => {
    const newExercise = {[key]: value};
    setData({...data, ...newExercise});
  };

  const onSave = () => {
    if (!data.date) {
      data.date = new Date().toISOString();
    }
    dispatch(saveExercise(data));
    setData(BASE_EXERCISE);
    onSubmit();
  };

  // set the name field to the user from state
  useEffect(() => {
    if (user) {
      data.name = user.name;
    }
    if (exercise || date) {
      data.date = exercise ? exercise.date : date;
    }
    setData(data);
  }, [user, date, exercise]); // eslint-disable-line

  useEffect(() => {
    if (exercise) {
      setData(exercise);
    }
  }, [exercise]);

  useEffect(() => {
    if (_.every(REQUIRED_FIELDS, field => !!data[field])) {
      setCanSave(true);
    } else {
      setCanSave(false);
    }
  }, [data]); // eslint-disable-line

  return (
    <div className="ExerciseForm" style={{margin: 16}}>
      <h3 className="formHeader" style={{marginBottom: 8}}>
        {exercise ? 'Update' : 'Log'} Exercise
      </h3>
      <div
        className="UserMenuItems"
        style={{display: 'flex', flexDirection: 'column'}}
      >
        <TextField
          className="flex"
          type="text"
          label="Name"
          variant="outlined"
          value={user ? user.name : 'Your Name'}
          disabled
          onChange={event => updateExercise('name', event.target.value)}
        />
        <Spacer />
        <TextField
          className="flex"
          type="text"
          label="Date"
          variant="outlined"
          value={moment(date).format('MMMM DD YYYY')}
          disabled
        />
        <Spacer />
        <InputLabel id="holdSize">Hold Size</InputLabel>
        <Select
          value={data.holdSize}
          labelId="holdSize"
          onChange={event => updateExercise('holdSize', event.target.value)}
        >
          <MenuItem value="" disabled></MenuItem>
          <MenuItem value="20mm">20mm edge</MenuItem>
          <MenuItem value="15mm">15mm edge</MenuItem>
          <MenuItem value="10mm">10mm edge</MenuItem>
          <MenuItem value="8mm">8mm edge</MenuItem>
        </Select>
        <Spacer />
        <InputLabel id="exerciseType">Exercise Type</InputLabel>
        <Select
          value={data.exerciseType}
          labelId="exerciseType"
          onChange={event => updateExercise('exerciseType', event.target.value)}
        >
          <MenuItem value="" disabled></MenuItem>
          <MenuItem value="Power Endurance">Power Endurance</MenuItem>
          <MenuItem value="Power">Power</MenuItem>
          <MenuItem value="Edurance">Edurance</MenuItem>
        </Select>
        <Spacer />
        <TextField
          type="text"
          placeholder="Weight"
          value={data.weight}
          onChange={event =>
            updateExercise('weight', Number(event.target.value))
          }
        />
        <Spacer />
        <Button
          variant="contained"
          color="primary"
          className="submit-btn"
          onClick={onSave}
          disabled={!canSave}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ExerciseForm;
