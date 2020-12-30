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
    console.log(this.api)
  }

  registerEvents() {
    this.content.addEventListener('click', (e) => {
      const currentTarget = e.target;
      if (currentTarget.classList.contains('btn-success')) {
        this.taskCompleted(currentTarget);
      }
      if (currentTarget.classList.contains('btn-danger')) {
        console.log('delete')
      }
    });
  }

  render(template) {
    this.content.innerHTML = '';
    this.content.insertAdjacentHTML('afterbegin', template)
  }

  async taskCompleted(element) {
    const parent = element.closest('.card');
    const taskId = parent.dataset.id;
    // parent.dataset.isCompleted = true;

    await createRequest({
      url: 'http://localhost:3000/api',
      id: taskId,
      method: 'put',
      data: {
        isCompleted: true
      },
      callback: (response) => {
        console.log(response.data)
        this.loadTaskFromDB()

      }
    });
  }

  async loadTaskFromDB() {
    await createRequest({
      url: 'http://localhost:3000/api', method: 'get', callback: (response) => {
        const template = response.data.map((task) => cardTemplate(task)).join(' ');
        this.render(template);
      }
    });
  }

}

export const app = new App(document.querySelector('.app'));
