export const save = async exercise => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(exercise),
  };
  const resp = await fetch(`/api/v1/save`, options);
  console.log(resp.status);
};
