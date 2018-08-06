import axios from 'axios'
import Photo from '@/api/model/photo'

var baseAPI = 'http://jsonplaceholder.typicode.com/photos/'

class AssetService {


  // getPhotos() {
  //   return axios.get(baseAPI)
  //     .then(response => response.data)
  //     .then(items => items.map(item => new Photo(item)))
  // }

  // getPhoto(id) {
  //   return axios.get(baseAPI+id)
  //     .then(response => response.data)
  //     .then(item => new Photo(item))
  // }

  getData(id) {
    if (typeof id != 'undefined'){
      return axios.get(baseAPI+id)
        .then(response => response.data)
        .then(item => new Photo(item))
    } else {
        return axios.get(baseAPI)
          .then(response => response.data)
          .then(items => items.map(item => new Photo(item)))  
    }
  }

}

export default new AssetService()