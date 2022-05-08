import React from 'react';
import ReactDom from 'react-dom';
import {cars} from './cars';
import Car from './Car';


// function Greeting(){
//   return(
//     <React.Fragment>
//      <Person />
//       <Message />
//     </React.Fragment>
//   );
// }

// const Person = () => <h4> John Doe </h4>;
// const Message = () => {
//   return (
//     <p> This Is My Message </p>
//   );
 
// }

// const Greeting = () => {
//   return React.createElement('div',{},React.createElement('h1', {}, 'testing react component'));
// }



function CarList(){

  return (
    <React.Fragment>
      {cars.map((car) => {
        console.log(car)
        return <Car key={car.id} {...car} />
      })};
    </React.Fragment>
  )
  
}

// const clickHandler = () => {
//   alert('test');
// }

// const refrenceNumber = (title) => {
//   console.log(title)
// }



// const Image = () => {
//   return (
//     <img src = "https://imgd.aeplcdn.com/1056x594/n/cw/ec/41564/hyundai-creta-right-front-three-quarter9.jpeg?q=75&wm=1" height = "200px" width = "200px" alt = '' />
//   );  
// }

// const Title = () => {
//   return (
//     <h5>
//       Hyundai Creata
//     </h5>
//   );
// }

// const Description = () => {
//   return (
//     <p>
//       Luxarious Car, Very Comfortable
//     </p>
//   )
// }

// const newDescription = () => {
//   return (
//     <p>
//       This car is of diesel engine which is very good in quality
//     </p>
//   );
// }





ReactDom.render(<CarList />, document.getElementById('root'));