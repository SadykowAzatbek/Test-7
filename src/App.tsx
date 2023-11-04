import {useState} from 'react';
import OrderFood from './components/OrderFood/OrderFood';
import dinnerSymbol from './assets/dinnerSymbol.png';
import drinksLogo from './assets/drinksLogo.png';
import './App.css';

function App() {
  const order = [
    {name: 'Hamburger', image: dinnerSymbol, price: 80},
    {name: 'Cheeseburger', image: dinnerSymbol, price: 90},
    {name: 'Fries', image: dinnerSymbol, price: 45},
    {name: 'Coffee', image: drinksLogo, price: 70},
    {name: 'Tea', image: drinksLogo, price: 50},
    {name: 'Cola', image: drinksLogo, price: 40},
  ]

  const [orders, setOrders] = useState([
    {name: 'Hamburger', count: 0, price: 80},
    {name: 'Cheeseburger', count: 0, price: 90},
    {name: 'Fries', count: 0, price: 45},
    {name: 'Coffee', count: 0, price: 70},
    {name: 'Tea', count: 0, price: 50},
    {name: 'Cola', count: 0, price: 40},
  ]);

  return (
   <div className='main-block'>
     <div className='add-items'>
       {order.map((orderFood, index) => (
         <OrderFood name={orderFood.name} image={orderFood.image} price={orders[index].price} key={index}></OrderFood>
       ))}
     </div>
     <div className='order-details'>

     </div>
   </div>
  )
}

export default App
