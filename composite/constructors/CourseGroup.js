export default class CourseGroup {
  constructor(title, composite = []) {
    this.title = title
    this.composite = composite
  }

  total() {
    return this.composite.reduce((sum, item) => sum += item.total(), 0)
  }

  print() {
    console.log(`\n********** ${this.title} **********`)
    this.composite.forEach(item => item.print())
    console.log(`**********************`)
  }
}