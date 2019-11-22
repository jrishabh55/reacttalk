import React, { useState, useCallback } from 'react';
import _colors from './colors';
import ListItem from './components/ListItem';

import './reset.css';
import './App.css';

function App() {

  const [ colors, setColors ] = useState(_colors);

  // Example useCallback
  const onClick = useCallback((index) => {
    const cols = colors.slice();
    cols.splice(index, 1);
    setColors(cols);
  }, [colors]);

  return (
    <div className="App">
      {colors.map((color, index) => {
        const key = color.id;
        return (
          <ListItem
            onClick={onClick}
            key={key}
            color={color.code.hex}
            id={key}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default App;
