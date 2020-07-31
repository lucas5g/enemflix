import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormFild from '../../components/FormFild';
import useForm from '../../hooks/useForm';
import Button from '../../components/Button';
import videosRepository from '../../repositories/videos'
import categoriasRepository from '../../repositories/categorias'
// import { Container } from './styles';

function VideoForm() {

  const history = useHistory()
  const [categorias, setCategorias] = useState([])

  const { handleChange, values } = useForm({
    titulo: 'Vídeo padrão',
    url: 'https://www.youtube.com/watch?v=sZu6LRb1XLQ',
    categoria: 'Front End'
  })

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categorias) => {
        setCategorias(categorias)
        console.log(categorias)
      })
  }, [])

  // console.log(categorias)
  return (
    <PageDefault>

      <h1>Cadastro de  Vídeo</h1>
      <form onSubmit={(event) => {
        event.preventDefault()
        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria
        })

        if(categoriaEscolhida === undefined){
          alert('Essa categoria não foi cadastrada')
          return 
        }

        const data = { titulo: values.titulo, url: values.url, categoriaId: categoriaEscolhida.id}

        videosRepository.create(data)
        .then(() => {
          console.log('Cadastrou com Sucesso!')
          history.push('/')
        })


      }}>
        <FormFild
          label='Título do Vídeo'
          name={'titulo'}
          value={values.titulo || ''}
          onChange={handleChange}
        />
        <FormFild
          label='URL'
          name='url'
          value={values.url || ''}
          onChange={handleChange}
        />
        <FormFild
          label='Categoria'
          name="categoria"
          value={values.categoria || ''}
          onChange={handleChange}
          suggestions={categorias}
        />

        <Button>
          Cadastrar
				</Button>
      </form>
      <Link to='/categoria/cadastro'>
        Cadastrar Categoria
            </Link>
    </PageDefault>
  )
}

export default VideoForm;