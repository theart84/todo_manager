import {taskFormTemplate} from "./html_template/taskFormTemplate";
import {cardTemplate} from "./html_template/card_template";
import {app} from "../js/app";
import {createRequest} from "../js/api/createRequest";

export class TaskForm {
  constructor(element) {
    this.element = element;
    this.registerEvents();
  }

  init() {

  }

  registerEvents() {
    const addTaskButtonElement = this.element.querySelector('.btn');
    addTaskButtonElement.addEventListener('click', (e) => {
      e.preventDefault();
      this.submit();
    })
  }

  submit() {
    const data = {
      title: this.element.querySelector('#InputTitleTask').value,
      message: this.element.querySelector('#validationTextarea').value,
      isCompleted: false,
      date: this.formatDate(),
    }
    this.onSubmit(data);
    this.element.reset()
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

  onSubmit(options) {
    app.createTask(options);
  }
}