import CourseBuilder from './CourseBuilder'

const course_1 = new CourseBuilder('Design Pattern 1').makePaid(100).makeCampain().build()
const course_2 = new CourseBuilder('Design Pattern 2').build()

course_1.toString()
course_2.toString()