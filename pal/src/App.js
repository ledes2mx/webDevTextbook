import { useState } from 'react';
import './App.css';
import {Swatch} from './Swatch';
import {Picker} from './Picker';

const initialColors = [
  {hex: '#FF0000', name: 'red'},
  {hex: '#FF9900', name: 'pumpkin'},
  {hex: '#6495ED', name: 'cornflower'},
  {hex: '#008080', name: 'teal'},
  {hex: '#CD853F', name: 'peru'},
  {hex: '010101F', name: 'POOP'},
];

/*function addBlue() {
  initialColors.add({hex: '#0000FF', name: 'blue'});
  console.log(initialColors);
}
*/

function App() {
  const [colors, setColors] = useState(initialColors);

  /*const swatches = initialColors.map(color =>
    <Swatch name={color.name} hex={color.hex} />
  );
  */

  const addBlue = () => {
    setColors([...colors, {hex: '#0000FF', name: 'blue'}]);
  };

  const removeColor = name => {
    setColors(colors.filter(color => color.name !== name));
  };

  const addColor = newColor => {
    setColors([newColor, ...colors.filter(color => color.name !== newColor.name)]);
  };

  //{swatches} inside of "App"
  return (
    <div className="App">
      <Picker add={addColor} />

      {
        colors.map(color =>
          <Swatch
            key={color.name}
            name={color.name}
            hex={color.hex}
            remove={removeColor}
          />
        )
      }

      <button onClick={addBlue}>Add Blue</button>
    </div>
  );
}

export default App;
