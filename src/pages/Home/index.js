import React from 'react';
import Menu from '../../components/Menu';
import dadosInicias from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'

function Home() {
	return (
		<div style={{ background: "#141414" }}>
			<Menu />
			<BannerMain
				videoTitle={dadosInicias.categorias[0].videos[0].titulo}
				url={dadosInicias.categorias[0].videos[0].url}
				videoDescription={'O que é Front-end? Trabalhando na área os termos HTML, CSS, JS fazem para da rotina das desenvolvedoras e desenvolvedores, Mas o que eles fazem, afinal? Descubra com a Vanessa!'}

			/>

			{console.log(dadosInicias.categorias)}
			{dadosInicias.categorias.map( categoria => (

				<Carousel
					key={Math.random()}
					ignoreFirstVideo
					category={categoria}
				/>
			))}
			<Carousel
				ignoreFirstVideo
				category={dadosInicias.categorias[1]}
			/>
		</div>
	);
}

export default Home;
