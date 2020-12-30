import {requestURL} from "./apiConfig";

export async function createRequest(options) {
  let requestURL = options.url;
  if (options.method === 'put') {
    requestURL = `${options.url}/${options.id}`;
  }
  let response = await fetch(requestURL, {
    method: options.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: options.method === 'get' ? null : JSON.stringify(options.data)
  });
  response = await response.json();
  options.callback(response);
  return response;
}