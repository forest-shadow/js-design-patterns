import Course from './Course'

const course = new Course({
  id: 1,
  title: 'Bootstrap 4: Professional Development',
  author: 'Paul'
})
console.log(course.getInfo())