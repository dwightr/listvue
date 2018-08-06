import AssetService from '@/api/service/asset-service'

let cart = []

class CartService {
    addItem(item){
        var temp = {}
        temp = item

        cart.push(temp)

        console.log(cart)
    }

    showCart(){
        return cart
    }
    
    whoAmI(me){
        var d = {}
        d = me
        console.log(me)
    }
}

export default new CartService()