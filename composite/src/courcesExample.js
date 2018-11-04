import Course from './constructors/Course'
import CourseGroup from './constructors/CourseGroup'

const jsCourse = new Course('Js Course', 15)
const bootstrapCourse = new Course('Bootstrap Course', 10)

const photoshopCourse = new Course('Photoshop Course', 10)
const sketchCourse = new Course('Sketch Course', 10)

const designCourses = new CourseGroup('Design Courses', [photoshopCourse, sketchCourse])
const webCourses = new CourseGroup('Web Courses', [jsCourse, bootstrapCourse])

const mainNode = new CourseGroup('Main Node', [designCourses, webCourses])

jsCourse.print()
console.log(`$${jsCourse.total()}`)

designCourses.print()
console.log(`$${designCourses.total()}`)

webCourses.print()
console.log(`$${webCourses.total()}`)

mainNode.print()
console.log(`$${mainNode.total()}`)