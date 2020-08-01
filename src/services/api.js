import axios from 'axios'

const hostname = () => {
  const api =   window.location.hostname
  console.log(api)
  return api === 'localhost' ? 'http://localhost:8000' : 'https://enemflix.herokuapp.com/'


}

const api = axios.create({
  baseURL: hostname() 
})


export default api