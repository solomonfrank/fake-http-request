const fakeHttpRequest = ({ data, status, message }, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      error(status)
        ? reject({ status, message })
        : resolve({ data, message, status });
    }, delay);
  });
};
 export default fakeHttpRequest;