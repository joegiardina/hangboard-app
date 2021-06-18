import {Button, Modal} from '@material-ui/core';
import ExerciseForm from './ExerciseForm';

const ExerciseFormModal = ({open, onClose, date, onSubmit, exercise}) => (
  <Modal open={open} onClose={onClose}>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div
        style={{
          flex: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: '25%',
        }}
      >
        <ExerciseForm date={date} onSubmit={onSubmit} exercise={exercise} />
      </div>
    </div>
  </Modal>
);

export default ExerciseFormModal;
