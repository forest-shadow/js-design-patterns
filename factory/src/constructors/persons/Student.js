import Person from './Person'

export default class Student extends Person {
  constructor(name, level = 'Beginner', profileImage) {
    super(name, profileImage)
    this.level = level
  }
}