import URL_BACKEND from '../config'

const URL_VIDEOS = `${URL_BACKEND}/videos`

const create = (objetoDoVideo) => {

  return fetch(URL_VIDEOS, {
    method: 'POST',
      headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(objetoDoVideo)
  })
  .then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json()
      return resposta
    }
    throw new Error('Não foi possível pegar os dados: (')


  })
  
}


export default {
  create,
}