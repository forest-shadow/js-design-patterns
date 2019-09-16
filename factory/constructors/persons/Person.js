import mediaFactory from '../../factory/mediaFactory'

export default class Person {
  constructor(name, profileImage = null) {
    this.name = name
    this.profileImage = profileImage
  }

  toString() {
    return JSON.stringify(this)
  }
}