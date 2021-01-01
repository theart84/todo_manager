import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import {TaskForm} from "../ui/TaskForm";
import Task from "./api/Task";
import {TaskPage} from "../ui/TaskPage";

class App {
  constructor(element) {
    this.element = element;
    this.content = null;
    this.init();
  }

  init() {
    this.taskCard = new TaskForm(this.element.querySelector('#task-create'));
    this.api = new Task('/tasks');
    this.content = new TaskPage(this.element.querySelector('.content'), this.api)
  }
}

export const app = new App(document.querySelector('.app'));
