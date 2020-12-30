import Entity from "./Entity";

export default class Task extends Entity {
  constructor(url) {
    super(url);
    this.url = url;
  }
}