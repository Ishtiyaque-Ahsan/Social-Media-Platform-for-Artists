import React from 'react';
import './App.css';
import Menu__bar from './comp/Menu__bar';
import Mess__bar from './comp/Mess__bar';

function App() {
  return (
    <div className="mess_container">
      
      <Menu__bar/>
      <Mess__bar/>
      <div className="Other_box">Other</div>
    </div>
  );
}

export default App;
