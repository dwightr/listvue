export default class Photo {

  constructor(data) {
    this.id = data.id.toString()
    this.title = data.title
    this.url = data.thumbnailUrl
    // this.tracks = 1 + Math.round(Math.random() * 10)
  }
}