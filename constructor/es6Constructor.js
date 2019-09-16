export default class Task {
  constructor(name) {
    this.name = name
    this.completed = false

    this.complete = this.complete.bind(this)
  }

  complete() {
    this.completed = true
  }
}