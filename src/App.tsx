import { useState } from 'react';
import './App.css';

function Draggable() {
  const [dragging, setDragging] = useState(false);
  return (
    <div
      draggable
      onDragEnd={() => setDragging(false)}
      onDragStart={() => setDragging(true)}
      onMouseOver={() => console.log('mouseOver')}
      onDragOver={() => console.log('dragOver')}
      style={{
        opacity: dragging ? 0.1 : 1,
      }}
      className="Draggable"
    ></div>
  );
}

function App() {
  return (
    <div className="App">
      {Array.from({ length: 20 }).map(() => (
        <Draggable />
      ))}
    </div>
  );
}

export default App;
