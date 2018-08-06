import AssetService from '@/api/service/asset-service'
import CartService from '@/api/service/cart-service'

export default {

  data() {
    return {
      albums: null,
    }
  },

  computed: {
    ready() {
      return this.albums != null
    }
  },

  created() {
    AssetService.getData()
      .then(albumResp => this.albums = albumResp)
      .then(this.albums.length = 10)
  },

  methods: {
    addMe(cart){
      CartService.addItem(cart)
    },
    showMe(photo){
      CartService.whoAmI(photo)
    }
  }
}