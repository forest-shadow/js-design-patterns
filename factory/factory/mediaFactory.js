import Image from '../constructors/media/Image'
import Video from '../constructors/media/Video'

const mediaTypes = {
  Image, Video
}

export default (type, mediaAttributes) => {
  const MediaType = mediaTypes[type]

  return new MediaType(mediaAttributes)
}