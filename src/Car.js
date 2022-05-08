import React from 'react'

function Car(props){
    console.log(props);
    const { image,title,description,children } = props;
    return (
      <React.Fragment>
      <img src = {image} height = "200px" width = "200px" alt = '' />
      <h5>
        {title}
      </h5>
      <p>
        {description}
      </p>
      <p>
        {children}
      </p>
      {/* <button type = "button" onClick={clickHandler}>
        New button
      </button>
      <button type = "button" onClick={() => refrenceNumber(title)}>
        Author 
      </button> */}
      </React.Fragment>
    )
  }

export default Car
