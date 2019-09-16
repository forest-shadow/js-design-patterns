// es5 function constructor
function Task(name) {
  this.name = name
  this.completed = false
}

Task.prototype.complete = function() {
  this.completed = true
}

export default Task