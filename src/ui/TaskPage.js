import {cardTemplate} from "./html_template/card_template";

export class TaskPage {
  constructor(element, api) {
    this.element = element;
    this.api = api;

    this.init();
  }

  init() {
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
    });
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
    await this.api.put({isCompleted: true}, (response) => {
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
}