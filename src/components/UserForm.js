import {useState, useEffect} from 'react';
import {save} from '../actions/exerciseFormActions';

const UserForm = () => {
  const [exercise, setExercise] = useState({});
  const updateExercise = (key, value) => {
    const newExercise = {[key]: value};
    setExercise({...exercise, ...newExercise});
  };

  useEffect(() => {
    console.log(exercise);
  }, [exercise]);

  return (
    <div className="UserForm">
      <div className="UserOptions">
        <form action="submit" className="form">
          <input
            className="flex"
            type="text"
            placeholder="Your Name"
            onChange={event => updateExercise('name', event.target.value)}
          />
          <select
            className="flex"
            name="holdSize"
            id="HoldSize"
            onChange={event => updateExercise('holdSize', event.target.value)}
          >
            <option value="" disabled selected hidden>
              Hold Size
            </option>
            <option value="20mm">20mm edge</option>
            <option value="15mm">15mm edge</option>
            <option value="10mm">10mm edge</option>
            <option value="8mm">8mm edge</option>
          </select>
          <select
            className="flex"
            name="exerciseType"
            id="exerciseType"
            onChange={event =>
              updateExercise('exerciseType', event.target.value)
            }
          >
            <option value="" disabled selected hidden>
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
        <button type="submit" onClick={() => save(exercise)}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserForm;
