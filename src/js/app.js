import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import {TaskForm} from "../ui/TaskForm";
import {createRequest} from "./api/createRequest";
import {cardTemplate} from "../ui/html_template/card_template";
import Task from "./api/Task";

class App {
  constructor(element) {
    this.element = element;
    this.content = null;
    this.init();
    this.registerEvents();
    this.loadTaskFromDB();
  }

  init() {
    this.content = this.element.querySelector('.content');
    this.taskCard = new TaskForm(this.element.querySelector('#task-create'));
    this.api = new Task('/tasks');
  }

  registerEvents() {
    this.content.addEventListener('click', (e) => {
      const currentTarget = e.target;
      if (currentTarget.classList.contains('btn-success')) {
        this.taskCompleted(currentTarget);
      }
      if (currentTarget.classList.contains('btn-danger')) {
        this.deleteTask(currentTarget);
      }
    });
  }

  render(template) {
    this.content.innerHTML = '';
    this.content.insertAdjacentHTML('afterbegin', template)
  }

  async createTask(task) {
    await this.api.post(task, (response) => {
          const template = cardTemplate(response.data);
          this.render(template);
          this.loadTaskFromDB();
        }
    );
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

  async loadTaskFromDB() {
    await this.api.list(null, (response) => {
      const template = response.data.sort((prev, next) => next.create_at - prev.create_at).map((task) => cardTemplate(task)).join(' ');
      this.render(template)
    });
  }

  async deleteTask(element) {
    const parent = element.closest('.card');
    const taskId = parent.dataset.id;
    console.log(parent, taskId)
    await this.api.delete(null, (response) => {
      parent.remove();
    }, taskId)
  }

}

export const app = new App(document.querySelector('.app'));
