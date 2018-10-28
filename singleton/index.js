const Singleton = (() => {
  let course

  const assignCourse = () => {
    return new Object('Javascript')
  }

  return {
    getInstance: () => {
      if (!course) {
        course = assignCourse()
      }
      return course
    }
  }
})()

const buyFirstTime = Singleton.getInstance()
const buySecondTime = Singleton.getInstance()

if (buyFirstTime === buySecondTime) {
  console.log('Go to course')
}