import React from 'react';

type Props = {
}


function Logo(props: Props) {
  return (
    <img
      alt="Logo"
      src="/static/logo.svg"
      {...props}
    />
  );
}

export default Logo;
