import React from 'react';
import FunctionalUser from './components/FunctionalUser.js';
import ClassUser from './components/ClassUser.js';
import styles from './styles/style.css';


const MyInput = (props) => {
  return (
    <input type="text" ref={props.inputRef} />)
}

const CustomFuncComp = (props) => {

  let textRef = null;

  const handleClick = () => {
    alert(`yey, input val is ${textRef.value}`)
  }

  return (
    <div style={styles.myInput}>
      <MyInput inputRef={(input) => { textRef = input; }} />
      <input type="button" value="show input" onClick={handleClick} />
    </div>
  );
}

function App() {


  return (
    <div className="App">


      <div style={styles.CustomFuncComp}>
        <CustomFuncComp />
      </div>

      <ClassUser />
      {/* props can be passed down through class components */}
      <ClassUser title="User 1 - John" age="20" />
      <ClassUser title="User 2 - Mary" age="30">Smith</ClassUser>

      <hr />

      <FunctionalUser />
      {/* props are automatically passed down as children in functional components */}
      <FunctionalUser>Prop1</FunctionalUser>
      <FunctionalUser age="25">Prop2</FunctionalUser>

      <hr />

      <div>
        <span>First Name: </span>
        <input type="text" />
      </div>
      <div>
        <span>Last Name: </span>
        <input type="text" />
      </div>
      <div>
        <span>Age: </span>
        <input type="text" />
      </div>
      <div>
        {/* <button onClick={() => greetUser("John")}>Click Here</button> */}
      </div>


    </div>
  );
}
// const styles = {
//   myInput: {
//     'margin': '20px'
//   }
// }

export default App;
