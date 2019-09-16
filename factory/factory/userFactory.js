import Instructor from '../constructors/persons/Instructor'
import Student from '../constructors/persons/Student'

export default (type, personAttributes) => {
  if (type === 'Instructor') {
    const { name, position, earnings, profileImage } = personAttributes
    return new Instructor(name, position, earnings, profileImage)
  }
  if (type === 'Student') {
    const { name, level, profileImage } = personAttributes
    return new Student(name, level, profileImage)
  }
}