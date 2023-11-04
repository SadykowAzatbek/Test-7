import React from 'react';

interface Props {
  key: number;
  name: string;
  price: number;
  image: string;
  orderClick: React.MouseEventHandler;
}

const OrderFood: React.FC<Props> = ({name, price, image, orderClick}) => {
  return (
    <div className='orderBtn' onClick={orderClick}>
      <img src={image} alt='food, drinks'/>
      <div>
        <h3>{name}</h3>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default OrderFood;