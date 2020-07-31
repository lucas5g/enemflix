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
    // .then( (response) => {response.json()})
    // .then( (response) => {
    //   console.log(response)
    //   return response
    // })
}


export default {
  getAllWithVideos,
}