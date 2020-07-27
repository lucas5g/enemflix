import React from 'react';

// import { Container } from './styles';

function ButtonLink({className, href, children}) {
  return (
      <a href={href} className={className}>
          {children}
      </a>
  );
}

export default ButtonLink;