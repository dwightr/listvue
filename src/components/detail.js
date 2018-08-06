import AssetService from '@/api/service/asset-service'
import CartService from '@/api/service/cart-service'
import Photo from '@/api/model/photo'

export default {

  props: {
    id: { required: true, type: String }
  },

  data() {
    return {
      album: null,
      cart: [],
      test:null,
    }
  },

  computed: {
    ready() {
      return this.album != null
    }
  },

  created() {
    AssetService.getData(this.id)
      .then(albumRes => this.album = albumRes)

    
  },
  methods: {
    showMe(){
      CartService.whoAmI(this.album)
    },
    addMe(cart){
      CartService.addItem(cart)
    }
  }
}