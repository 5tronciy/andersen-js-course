function parseJSON(jsonStr, successCb, failureCb) {
  try {
    const result = JSON.parse(jsonStr);
    return successCb(result);
  } catch (error) {
    return failureCb(error);
  }
}

function successCb(result) {
  return console.log('Seccess parse!', result);
}

function failureCb(error) {
  return console.log('Failure parse!', error);
}
