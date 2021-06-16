import axios from 'axios';

export const save = async data => {
  const result = await axios({
    url: '/api/v1/exercise/save',
    method: 'post',
    data,
  });
  return result.status;
};

export const getExercisesByName = async name => {
  const result = await axios({
    url: '/api/v1/exercise/fetchByName',
    params: {name},
    method: 'get',
  });
  return result.data;
};
