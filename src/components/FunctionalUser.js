import React from 'react';


export const FunctionalUser = (props) => {
  //props have to be passed into a functional component
  // return (<div>Users Functional Component</div>)

  let age = props.age;

  return (
    <div>
      <b>Functional User Component</b>
      <br />
      <p>{props.children}</p>
      <p>{props.age ? props.age : 'NA'}</p>
    </div>
  )
}

export default FunctionalUser;