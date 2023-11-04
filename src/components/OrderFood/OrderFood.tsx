import React from 'react';

interface Props {
  key: number;
  name: string;
  price: number;
  image: string;
}

const OrderFood: React.FC<Props> = ({name, price, image}) => {
  return (
    <div className='orderBtn'>
      <img src={image} alt='food, drinks'/>
      <div>
        <h3>{name}</h3>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default OrderFood;