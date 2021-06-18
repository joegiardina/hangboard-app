import axios from 'axios';

async function post(url, data) {
  const result = await axios({
    method: 'post',
    url,
    data,
  });

  if (result.status === 200) {
    return {success: true, ...result.data};
  } else {
    return {success: false};
  }
}

export const login = data => post('/api/v1/user/login', data);
export const create = data => post('/api/v1/user/create', data);
