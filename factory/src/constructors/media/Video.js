import Media from './Media'

export default class Video extends Media {
  constructor({ length = 0, name}) {
    super(name)
    this.length = length
  }
}