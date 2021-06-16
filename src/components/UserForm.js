import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {save, getExercisesByName} from '../actions/exerciseFormActions';

const UserForm = () => {
  const user = useSelector(state => state.user.user);
  const [exercise, setExercise] = useState({});
  const [exercises, setExercises] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState();

  const updateExercise = (key, value) => {
    const newExercise = {[key]: value};
    setExercise({...exercise, ...newExercise});
  };

  useEffect(() => {
    if (user) {
      exercise.name = user.name;
    }
  }, [user]); // eslint-disable-line

  useEffect(() => {
    if (exercise) {
      console.log('exercise', exercise);
    }
  }, [exercise]);

  useEffect(() => {
    const updateExercises = async name => {
      const result = await getExercisesByName(name);
      if (result) {
        setExercises(result);
      }
      setShouldRefresh(false);
    };
    if (exercise.name || shouldRefresh) {
      updateExercises(exercise.name);
    }
  }, [exercise.name, shouldRefresh]);

  return (
    <div className="UserForm" style={{margin: 16}}>
      <h3 className="formHeader">Hangs</h3>
      <div className="UserOptions">
        <form action="submit" className="form">
          <input
            className="flex"
            type="text"
            placeholder={user ? user.name : 'Your Name'}
            disabled
            onChange={event => updateExercise('name', event.target.value)}
          />
          <select
            className="flex"
            defaultValue=""
            name="holdSize"
            id="HoldSize"
            onChange={event => updateExercise('holdSize', event.target.value)}
          >
            <option value="" disabled hidden>
              Hold Size
            </option>
            <option value="20mm">20mm edge</option>
            <option value="15mm">15mm edge</option>
            <option value="10mm">10mm edge</option>
            <option value="8mm">8mm edge</option>
          </select>
          <select
            className="flex"
            defaultValue=""
            name="exerciseType"
            id="exerciseType"
            onChange={event =>
              updateExercise('exerciseType', event.target.value)
            }
          >
            <option value="" disabled hidden>
              Exercise Type
            </option>
            <option value="Power Endurance">Power Endurance</option>
            <option value="Power">Power</option>
            <option value="Edurance">Edurance</option>
          </select>
          <input
            className="flex"
            type="text"
            placeholder="Enter Your Weight"
            onChange={event =>
              updateExercise('weight', Number(event.target.value))
            }
          />
        </form>
        <button
          className="submit-btn"
          type="submit"
          onClick={async () => {
            await save(exercise);
            setShouldRefresh(true);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserForm;
