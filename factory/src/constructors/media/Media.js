export default class Media {
  constructor(name = '') {
    this.name = name
  }

  toString() {
    return JSON.stringify(this)
  }
}