import URL_BACKEND from '../config'

const URL_CATEGORIES = `${URL_BACKEND}/categorias`

const getAllWithVideos = () => {

  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if(response.ok){
        const data =  response.json()
        return data
      }

      throw new Error('Não foi possível pegar os dados: (')
    })
}
const getAll = () => {

  return fetch(URL_CATEGORIES)
    .then(async (response) => {
      if(response.ok){
        const data =  response.json()
        return data
      }

      throw new Error('Não foi possível pegar os dados: (')
    })
}

export default {
  getAllWithVideos,
  getAll,
}