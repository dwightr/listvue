import AssetService from '@/api/service/asset-service'
import CartService from '@/api/service/cart-service'

export default {

  data() {
    return {
      cart: []
    }
  },

  computed: {
    ready() {
      return this.cart != null
    }
  },

  created() {
    this.cart = CartService.showCart()
    console.log(this.cart)
  }
}