export default class Person {
  constructor(name) {
    this.name = name
    this.children = []
    this.parent = null
  }
  
  addChild(child) {
    child.parent = this
    this.children.push(child)
  }
  
  traverseUp() {
    if (this.parent) {
      console.log(`${this.name} is the child of ${this.parent.name}`)
      this.parent.traverseUp()
    } else {
      console.log(`${this.name} is the root node`)
    }
  }
  
  traverseDown() {
    if (this.children.length) {
      this.children.forEach(child => {
        console.log(`${this.name} is the parent of ${child.node}`)
        child.traverseDown()
      })
    } else {
      console.log(`${this.name} is a leaf node`)
    }
  }
}