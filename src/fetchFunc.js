export const fetchFunc = async (data) => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  let result = await response.json();
  if (response.ok) {
    alert('Данные успешно отправлены!');
    console.log(result);
  } else {
    alert('Произошла ошибка.');
  }
};
