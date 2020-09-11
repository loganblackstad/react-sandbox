import React from 'react';
import FunctionalUser from './components/FunctionalUser.js';
import ClassUser from './components/ClassUser.js';
import './App.css';

function App() {
  return (
    <div className="App">

      <ClassUser />
      {/* props can be passed down through class components */}
      <ClassUser title="User 1 - John" age="20" />
      <ClassUser title="User 2 - Mary" age="30">Smith</ClassUser>

      <hr />

      <FunctionalUser />
      {/* props are automatically passed down as children in functional components */}
      <FunctionalUser>Prop1</FunctionalUser>
      <FunctionalUser age="25">Prop2</FunctionalUser>

    </div>
  );
}

export default App;
