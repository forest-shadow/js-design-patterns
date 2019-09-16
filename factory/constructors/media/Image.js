import Media from './Media'

export default class Image extends Media {
  constructor({ width = 0, height = 0, name}) {
    super(name)
    this.width = width
    this.height = height
  }
}