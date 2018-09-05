import axios from 'axios'

const getArticles = resource => {

  return new Promise ((resolve, reject) => {

    axios.get(`${resource}`, { 'headers': {"Access-Control-Allow-Origin": "*"} })
      .then(resolve)
      .catch(reject);
  })
}

export default {

  getArticles
}