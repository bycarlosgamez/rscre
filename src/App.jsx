import { useId, useState } from 'react';
import colors from './assets/colors';
import ColorBox from './components/ColorBox/ColorBox';

import './App.css';

function App() {
  const id = useId;
  const random = (arr) => {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  };
  const [color, setColor] = useState(random(colors));

  const handleClick = (id) => {
    boxes.map((box, i) => {
      return box[i] === id ? setColor(random(colors)) : box;
    });
  };

  const boxes = [];
  for (let i = 0; i < 26; i++) {
    boxes.push(<ColorBox color={color} handleClick={handleClick} key={i} />);
  }

  return <div className='BoxesGrid'>{boxes}</div>;
}

export default App;
