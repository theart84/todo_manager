export function cardTemplate({id, date, title, message}) {
  return `
  <div class="card mt-3" data-id="${id}">
    <div class="card-header">${title}</div>
    <div class="card-body">
      <p class="card-text">${date}</p>
      <p class="card-text">${message}</p>
      <button class="btn btn-success">Done</button>
      <button class="btn btn-danger">Delete</button>
    </div>
  </div>
`;
}