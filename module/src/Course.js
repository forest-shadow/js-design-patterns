import CourseProvider from './CourseProvider'

export default class Course {
  constructor({ id, title, author }) {
    this.id = id
    this.title = title
    this.author = author
  }

  getInfo() {
    return CourseProvider.getInfo({
      id: this.id,
      title: this.title,
      author: this.author
    })
  }
}