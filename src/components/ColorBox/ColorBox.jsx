import { useState } from 'react';
import './ColorBox.css';

export default function ColorBox({ colors }) {
  const random = (arr) => {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  };

  const [color, setColor] = useState(random(colors));

  const handleClick = () => {
    const color = random(colors);
    setColor(color);
  };

  return (
    <div
      className='colorBox'
      style={{ background: color }}
      onClick={handleClick}
    ></div>
  );
}
