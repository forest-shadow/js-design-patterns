import Es5Task from './es5Constructor'
import Es6Task from './es6Constructor'

let newTask = {
  name: 'New task',
  completed: false
}

describe('es5 Task constructor', () => {
  let task

  beforeEach(() => {
    task = new Es5Task('New task')
  })

  it('should create new Task Object instance', function () {
    expect(task.name).toBe(newTask.name)
    expect(task.completed).toBe(newTask.completed)
  });

  it('should create new Task instance with `complete` method', function () {
    let completeMethod = task.complete
    completeMethod.call(task)

    expect(task.completed).toBe(true)
  });
})

describe('es6 Task constructor', () => {
  let task

  beforeEach(() => {
    task = new Es6Task('New task')
  })

  it('should create new Task Object instance', function () {
    expect(task.name).toBe(newTask.name)
    expect(task.completed).toBe(newTask.completed)
  });

  it('should create new Task instance with `complete` method', function () {
    let completeMethod = task.complete
    completeMethod()
    expect(task.completed).toBe(true)
  });
})