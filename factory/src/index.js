import userFactory from './factory/userFactory'
import mediaFactory from './factory/mediaFactory'

const paulProfileImage = mediaFactory('Image', {
  width: 100,
  height: 100,
  name: 'Paul Avatar'
})
const johnProfileImage = mediaFactory('Image', {
  width: 100,
  height: 100,
  name: 'John Avatar'
})

const paultAttributes = {
  name: 'Paul',
  position: 'software engineer',
  earnings: 1000,
  profileImage: paulProfileImage
}
const johnAttributes = {
  name: 'John',
  level: 'Beginner',
  profileImage: johnProfileImage
}
const paul = userFactory('Instructor', paultAttributes)
const john = userFactory('Student', johnAttributes)

console.log(paul)
console.log(john)

const myImage = mediaFactory('Image', {
  width: 420,
  height: 420,
  name: 'Happy Cat'
})
const myVideo = mediaFactory('Video', {
  length: 1.2,
  name: 'The Lucky'
})

console.log(myImage)
console.log(myVideo)