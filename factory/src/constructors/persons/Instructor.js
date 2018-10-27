import Person from './Person'

export default class Instructor extends Person {
  constructor(name, position, earnings = 0, profileImage) {
    super(name, profileImage)
    this.position = position
    this.earnings = earnings
  }
}