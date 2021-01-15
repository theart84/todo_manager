import {app} from "../js/App";

export default class TaskForm {
  constructor(element) {
    this.element = element;
    this.registerEvents();
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
    app.content.createTask(options);
  }
}