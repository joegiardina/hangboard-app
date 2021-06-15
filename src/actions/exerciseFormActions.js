export const save = async exercise => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(exercise),
  };
  const resp = await fetch(`/api/v1/exercise/save`, options);
  return resp.status;
};

export const getExercisesByName = async name => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  return new Promise(resolve =>
    fetch(`/api/v1/exercise/fetchByName?name=${name}`, options).then(result =>
      resolve(result.json()),
    ),
  );
};
