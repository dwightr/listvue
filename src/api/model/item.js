export default class CartItem {
    
      constructor(data) {
        this.id = data.id.toString()
        this.title = data.title
        this.url = data.thumbnailUrl
      }
    }