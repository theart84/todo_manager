import {taskFormTemplate} from "./html_template/taskFormTemplate";
import {cardTemplate} from "./html_template/card_template";
import {app} from "../js/app";

export class TaskForm {
  constructor(container) {
    this.container = container;
    this.init();
    this.registerEvents();
  }
  init() {
    this.createTaskCard();
  }

  createTaskCard() {
    const template = taskFormTemplate();
    this.container.insertAdjacentHTML('afterbegin', template);
  }

  registerEvents() {
    const addTaskButtonElement = this.container.querySelector('.btn');
    addTaskButtonElement.addEventListener('click', (e) => {
      e.preventDefault();
      this.submit();
    })
  }
  submit() {
    const form = this.container.querySelector('form');
    const data = {
      id: this.getIdForTask(),
      title: form.querySelector('#InputTitleTask').value,
      message: form.querySelector('#validationTextarea').value,
      date: this.formatDate(),
    }
    this.onSubmit(data);
    form.reset()
  }

  formatDate() {
    return new Date(Date.now()).toLocaleString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  }

  getIdForTask() {
    return `msg_${Date.now()}`;
  }

  onSubmit(options) {
    this.task = cardTemplate(options);
    app.render()
  }
}