import {useState} from 'react';
import OrderFood from './components/OrderFood/OrderFood';
import dinnerSymbol from './assets/dinnerSymbol.png';
import drinksLogo from './assets/drinksLogo.png';
import './App.css';
import type Character from '../Character';
import AddOrder from "./components/AddOrder/AddOrder";
import GetTotalPrice from "./components/GetTotalPrice/GetTotalPrice";

function App() {
  const order = [
    {name: 'Hamburger', image: dinnerSymbol, price: 80},
    {name: 'Cheeseburger', image: dinnerSymbol, price: 90},
    {name: 'Fries', image: dinnerSymbol, price: 45},
    {name: 'Coffee', image: drinksLogo, price: 70},
    {name: 'Tea', image: drinksLogo, price: 50},
    {name: 'Cola', image: drinksLogo, price: 40},
  ]

  const [orders, setOrders] = useState<Character[]>([
    {name: 'Hamburger', count: 0},
    {name: 'Cheeseburger', count: 0},
    {name: 'Fries', count: 0},
    {name: 'Coffee', count: 0},
    {name: 'Tea', count: 0},
    {name: 'Cola', count: 0},
  ]);

  const orderClick = (index: number) => {
    const copyOrders = [...orders];
    const person = copyOrders[index];
    copyOrders[index] = {...person, count: person.count + 1};

    setOrders(copyOrders);
  }

  const deleteOrder = (index: number) => {
    const copyOrders = [...orders];
    const person = copyOrders[index];
    copyOrders[index] = {...person, count: 0};

    setOrders(copyOrders);
  }

  let orderText = {display: 'block'};

  for (let i = 0; i < orders.length; i++) {
    if (orders[i].count >= 1) {
      orderText = {display: 'none'};
    }
  }

  return (
   <div className='main-block'>
     <div className='add-items'>
       {order.map((orderFood, index) => (
         <OrderFood
           name={orderFood.name}
           image={orderFood.image}
           price={orderFood.price}
           key={index}
           orderClick={() => orderClick(index)}
         ></OrderFood>
       ))}
     </div>
     <div className='order-details'>
       <div style={orderText}>
         Заказ пуст!
         Нажмите на желаемый бургер или напиток.
       </div>
       <AddOrder orders={orders} order={order} DeleteOrder={deleteOrder}></AddOrder>
       <div className='total-price'>
         <GetTotalPrice order={order} orders={orders}></GetTotalPrice>
       </div>
     </div>
   </div>
  )
}

export default App;
