import React from 'react';
import './App.css';
// import Objects from './Components/Objects/objects';
import Object from './Components/Object/object';
import { ObjectCtxProvider } from './store/objects-ctx';

function App() {



  return (
    <ObjectCtxProvider>
      <Object/>
    </ObjectCtxProvider>
  );
}

export default App;
