import React from 'react'
import Button from './Button';
import { useState } from 'react';


const ColorChanger = () => {
  const [color, setColor] = useState("#E9F302");

  // Function to handle button clicks and update the color state
  const handleButtonClick = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className='flex justify-center relative  h-screen ' style={{ background: color }}>
      <p className='self-center absolute text-2xl text-[#fff]'>{color}</p>
      <div className='flex border max-md:flex-wrap select-none border-2 p-2 self-end w-fit m-4 gap-4 rounded-xl bg-[#fff]'>
        <Button name='#E9F302' onClick={() => handleButtonClick("#E9F302")} />
        <Button name='#F32002' onClick={() => handleButtonClick("#F32002")} />
        <Button name='#0243F3' onClick={() => handleButtonClick("#0243F3")} />
        <Button name='#2F9C05' onClick={() => handleButtonClick("#2F9C05")} />
        <Button name='#EF20FF' onClick={() => handleButtonClick("#EF20FF")} />
        <Button name='#581845' onClick={() => handleButtonClick("#581845")} />
        <Button name='#01FA93' onClick={() => handleButtonClick("#01FA93")} />
        <Button name='#A13BC0' onClick={() => handleButtonClick("#A13BC0")} />
      </div>
    </div>
  )
}

export default ColorChanger
