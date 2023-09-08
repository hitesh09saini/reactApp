import React from 'react';

const Button = ({ name,  onClick }) => {
  const buttonStyle = {
    background: name,
  };

  return (
    <div className='w-fit p-2 rounded-xl' style={buttonStyle} onClick={onClick}>
      {name}
    </div>
  );
};

export default Button;
