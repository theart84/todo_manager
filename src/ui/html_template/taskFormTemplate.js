export function taskFormTemplate() {
  return `
  <div class="card mx-auto mt-3 mb-5">
    <div class="card-body">
      <form name="task-create" id="task-create">
        <div class="form-group">
          <label for="InputTitleTask">Title</label>
          <input type="text" class="form-control" id="InputTitleTask" aria-describedby="titleHelp">
          <small id="titleHelp" class="form-text text-muted">Input title your task.</small>
        </div>
        <div class="form-group">
          <label for="validationTextarea">Description</label>
          <textarea class="form-control " id="validationTextarea" placeholder="Please input description your task..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Add task</button>
      </form>
    </div>
  </div>
  `;
}