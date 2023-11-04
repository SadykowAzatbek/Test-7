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
  DeleteOrder: (id: number) => void;
}

const AddOrder: React.FC<Props> = (props) => {
  const addOrders: React.ReactElement[] = [];

  props.orders.map((elem, index) => {
    const getPrice = elem.count * props.order[index].price;

    if (props.orders[index].count >= 1) {
      addOrders.push(
        <div className='info' key={index}>
          {elem.name} {elem.count}x {getPrice} KGZ <span onClick={() => props.DeleteOrder(index)}>X</span>
        </div>
      )
    }
  });
  return addOrders;
};

export default AddOrder;