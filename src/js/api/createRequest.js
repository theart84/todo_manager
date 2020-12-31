export async function createRequest(options) {
  if (!Object.keys(options).length) {
    console.log('Передайте параметры!');
    return;
  }
  let requestURL = options.url;
  if (options.method === 'put' || options.method === 'delete') {
    requestURL = `${options.url}/${options.params}`;
  }
  let response = await fetch(requestURL, {
    method: options.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: checkMethod(options.method, options.data),
  });
  response = await response.json();
  options.callback(response);
  return response;
}

function checkMethod(method, data) {
  switch(method) {
    case 'get':
    return null;

    case 'post':
    return JSON.stringify(data);

    case 'put':
      return JSON.stringify(data);

    case 'delete':
      return null;
  }
}
