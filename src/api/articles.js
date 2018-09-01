import axios from 'axios'

const getArticles = resource => {

  return new Promise ((resolve, reject) => {

    axios.get(`${resource}/your-endpoint`)
      .then(resolve)
      .catch(reject);
  })
}

export default {

  getArticles
}