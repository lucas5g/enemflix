import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/logoenem.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/lucas5g" target="_blanket">
        {/* <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" /> */}
        <img src={Logo} alt="Logo Enemflix"/>
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/" target="_blanket">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
