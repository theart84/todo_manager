import {cardTemplate} from "./html_template/card_template";

export class TaskPage {
  constructor(element, api, modal) {
    this.element = element;
    this.api = api;
    this.modal = modal;

    this.init();
  }

  init() {
    this.editElement = this.modal.element.querySelector('.edit');
    this.registerEvents();
    this.loadTaskFromDB();

  }

  render(template) {
    this.element.innerHTML = '';
    this.element.insertAdjacentHTML('afterbegin', template)
  }

  registerEvents() {
    this.element.addEventListener('click', (e) => {
      const currentTarget = e.target;
      if (currentTarget.classList.contains('btn-success')) {
        this.taskCompleted(currentTarget);
      }
      if (currentTarget.classList.contains('btn-danger')) {
        this.deleteTask(currentTarget);
      }
      if (currentTarget.classList.contains('edit')) {
        this.getTaskData(currentTarget);
      }
    });
    this.editElement.addEventListener('click', (e) => {
      const currentTarget = e.target;
      this.editTask(currentTarget)
    })
  }

  async createTask(task) {
    await this.api.post(task, (response) => {
          const template = cardTemplate(response.data);
          this.render(template);
          this.loadTaskFromDB();
        }
    );
  }

  async loadTaskFromDB() {
    await this.api.list(null, (response) => {
      const template = response.data.sort((prev, next) => next.create_at - prev.create_at).map((task) => cardTemplate(task)).join(' ');
      this.render(template)
    });
  }

  async taskCompleted(element) {
    const parent = element.closest('.card');
    const taskId = parent.dataset.id;
    const data = {isCompleted: true}
    await this.api.put(data, (response) => {
      parent.dataset.isCompleted = 'true';
      parent.classList.add('completed');
      element.setAttribute('disabled', 'disabled');
    }, taskId);
  }

  async deleteTask(element) {
    const parent = element.closest('.card');
    const taskId = parent.dataset.id;
    await this.api.delete(null, (response) => {
      parent.remove();
    }, taskId)
  }
  async getTaskData(element) {
    const parent = element.closest('.card');
    const taskId = parent.dataset.id;
    this.modal.addDataset(taskId);
    await this.api.list(null, (response) => {
      this.modal.titleInput.value = response.data.title;
      this.modal.descriptionInput.value = response.data.message;
      this.modal.open();
    }, taskId)
  }

  async editTask(element) {
    const parent = element.closest('.modal');
    const taskId = parent.dataset.id;
    const data = {
      title: this.modal.titleInput.value,
      message: this.modal.descriptionInput.value
    }
    await this.api.put(data, (response) => {
      if (response.success) {
        const cardElement = this.element.querySelector(`.card[data-id="${taskId}"]`);
        cardElement.querySelector('.card-header').innerHTML = this.modal.titleInput.value;
        cardElement.querySelector('.message').innerHTML = this.modal.descriptionInput.value;
      }
    }, taskId);

    this.modal.close();
  }
}