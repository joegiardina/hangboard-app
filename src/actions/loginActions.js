async function post(path, data) {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(data),
  };

  return new Promise(resolve =>
    fetch(path, options).then(async resp => {
      if (resp.status === 200) {
        const body = await resp.json();
        resolve({success: true, ...body});
      } else {
        resolve({success: false});
      }
    }),
  );
}

export const login = data => post('/api/v1/user/login', data);
export const create = data => post('/api/v1/user/create', data);
