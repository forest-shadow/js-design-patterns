import CourseBuilder from './CourseBuilder'
import { HotNew, BestSeller } from './decorators/courseDecorators'

import User from './constructors/User'
import { Admin, Manager } from './decorators/userDecorators'

const course_1 = new CourseBuilder('Design Pattern 1').makePaid(100).makeCampain().build()
const hotNew_1 = new HotNew(course_1)
const bestSeller_1 = new BestSeller(hotNew_1)

course_1.toString(course_1)
course_1.toString(hotNew_1)
course_1.toString(bestSeller_1)

const user = new User(3)
const manager = new Manager(user)
const admin = new Admin(user)
console.log(user)
console.log(manager)
console.log(admin)