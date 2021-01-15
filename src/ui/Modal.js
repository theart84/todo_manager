export default class Modal {
  constructor(element, api) {
    this.element = element;
    this.api = api;

    this.registerEvents();
    this.init()
  }
  init() {
    this.titleInput = this.element.querySelector('#inputTitle');
    this.descriptionInput = this.element.querySelector('#inputDescription');
  }

  registerEvents() {
    const closeElements = [...this.element.querySelectorAll('button[data-dismiss="modal"]')];
    closeElements.forEach((el) => el.addEventListener('click', (e) => {
      e.preventDefault();
      this.close();
    }));
  }
  addDataset(id) {
    this.element.dataset.id = id;
  }

  open() {
    this.element.style.display = 'block';
  }

  close() {
    this.element.style.display = 'none';
  }
}