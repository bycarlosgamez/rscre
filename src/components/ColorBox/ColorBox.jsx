import { useState } from 'react';
import './ColorBox.css';

export default function ColorBox({ color, handleClick }) {
  return (
    <div
      className='colorBox'
      style={{ background: color }}
      onClick={handleClick}
    ></div>
  );
}
