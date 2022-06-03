import { FC, Dispatch, SetStateAction } from 'react';
import Options from './Options';

export const OrderEntry: FC<{
  setOrderPhase?: Dispatch<SetStateAction<string>>;
}> = () => {
  return (
    <>
      <Options optionType='scoops' />
      <Options optionType='toppings' />
    </>
  );
};

export default OrderEntry;
