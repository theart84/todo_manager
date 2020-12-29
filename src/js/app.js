import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import {TaskForm} from "../ui/TaskForm";

class App {
  constructor(element) {
    this.element = element;
    this.content = null;
    this.init();
    this.registerEvents();
  }

  init() {
    this.content = this.element.querySelector('.content');
    this.taskCard = new TaskForm(this.element.querySelector('.form-container'))
  }
  registerEvents() {
    this.content.addEventListener('click', (e) => {
      const currentTarget = e.target;
      if (currentTarget.classList.contains('btn-success')) {
        console.log('success')
      }
      if (currentTarget.classList.contains('btn-danger')) {
        console.log('delete')
      }
    });
  }
  render() {
    this.content.insertAdjacentHTML('afterbegin', this.taskCard.task)
  }

}

export const app = new App(document.querySelector('.app'));
