import React from 'react';
import Character from "../../../Character";

interface Order {
  name: string;
  image: string;
  price: number;
}

interface Props {
  orders: Character[];
  order: Order[];
}
const GetTotalPrice: React.FC<Props> = (props) => {
  const totalPrice = [];

  for (let i = 0; i < props.order.length; i++) {
    const price = props.order[i].price * props.orders[i].count;
    totalPrice.push(price);
  }
  const result: number = totalPrice.reduce((acm, number) => acm + number, 0);

  for(let i = 0; i < props.orders.length; i++) {
    if (props.orders[i].count >= 1) {
      return (
        <div>
          Total price: {result} KGZ
        </div>
      )
    }
  }
};

export default GetTotalPrice;