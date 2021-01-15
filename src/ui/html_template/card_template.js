export function cardTemplate({_id, date, title, message, isCompleted}) {
  return `
  <div class="card mt-3${isCompleted ? ' completed': ''}" data-id="${_id}" data-is-completed="${isCompleted}">
    <div class="card-header">${title}</div>
    <div class="card-body">
      <p class="card-text date">${date}</p>
      <p class="card-text message">${message}</p>
      <div class="row d-flex justify-content-between ml-1 mr-1">
        <div>
          <button class="btn btn-success btn-sm" ${isCompleted ? 'disabled': ''}>Done</button>
          <button class="btn btn-danger btn-sm">Delete</button>
        </div>
        <div>
        <button class="btn btn-primary btn-sm edit" ${isCompleted ? 'disabled': ''}>Edit</button>
        </div>
      </div>
    </div>
  </div>
`;
}