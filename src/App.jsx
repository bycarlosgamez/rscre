import colors from './assets/colors';
import ColorBox from './components/ColorBox/ColorBox';

import './App.css';

function App() {
  const boxes = [];

  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox colors={colors} key={i} />);
  }

  return <div className='BoxesGrid'>{boxes}</div>;
}

export default App;
