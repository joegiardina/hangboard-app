import axios from 'axios';

export const save = async data => {
  const result = await axios({
    url: '/api/v1/exercise/save',
    method: 'post',
    data,
  });
  return result.status;
};

export const fetchByUsername = async name => {
  const result = await axios({
    url: '/api/v1/exercise/fetchByUsername',
    params: {name},
    method: 'get',
  });
  return result.data;
};
