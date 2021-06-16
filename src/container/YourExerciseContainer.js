import UserForm from '../components/UserForm';
import Calendar from '../components/Calendar';

const YourExerciseContainer = () => {
  return (
    <div style={{display: 'flex', alignItems: 'flex-start'}}>
      <UserForm />
      <Calendar />
    </div>
  );
};

export default YourExerciseContainer;
