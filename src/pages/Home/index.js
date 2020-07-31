import React, { useEffect, useState } from 'react';
// import dadosInicias from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'

import categoriasRespository from '../../repositories/categorias'
import PageDefault from '../../components/PageDefault';
// import PageDefault from '../../components/PageDefault';

function Home() {
	const [dadosIniciais, setDadosIniciais] = useState([])

	useEffect(() => {
		categoriasRespository.getAllWithVideos()
			.then(categoriasComVideos => {
				setDadosIniciais(categoriasComVideos)
				// console.log(categoriasComVideos)
			})
			.catch((err) => {
				console.log(err.message)
			})

	}, [])

	if (dadosIniciais.length === 0) {
		return (
			<div>Carregando...</div>
		)
	}

	return (

		<PageDefault paddingAll={0} >

			{dadosIniciais.map((categoria, index) => {
				// console.log({ categoria })
				// console.log({ index })

				if (index === 0) {

					return (
						<div key={categoria.id}>
							<BannerMain
								videoTitle={dadosIniciais[0].videos[0].titulo}
								url={dadosIniciais[0].videos[0].url}
								videoDescription={'O que é Front-end? Trabalhando na área os termos HTML, CSS, JS fazem para da rotina das desenvolvedoras e desenvolvedores, Mas o que eles fazem, afinal? Descubra com a Vanessa!'}
							/>
							<Carousel
								ignoreFirstVideo
								category={dadosIniciais[0]}
							/>
						</div>
					)
				
				}
				return (
					<Carousel
						key={categoria.id}
						category={categoria}

					/>
				)
			})}


		</PageDefault>
	);
}

export default Home;
