import { FC } from 'react';
import Options from './Options';

export const OrderEntry: FC = () => {
  return (
    <>
      <Options optionType='scoops' />
      <Options optionType='toppings' />
    </>
  );
};

export default OrderEntry;
