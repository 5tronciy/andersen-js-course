function getResolvedPromise(value) {
  return Promise.resolve(value);
}

getResolvedPromise(500)
  .then(res => {
    if (res > 300) {
      throw new Error('Ошибка');
    }
  })
  .catch(error => console.log(error))
  .finally(() => console.log('This is Finally!'));
