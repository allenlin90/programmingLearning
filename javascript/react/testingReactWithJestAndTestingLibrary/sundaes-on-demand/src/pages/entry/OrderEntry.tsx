import { FC, Dispatch, SetStateAction } from 'react';
import { useOrderDetails } from 'src/contexts/OrderDetails';
import Options from './Options';

export const OrderEntry: FC<{
  setOrderPhase?: Dispatch<SetStateAction<string>>;
}> = () => {
  const [orderDetails] = useOrderDetails();

  return (
    <>
      <Options optionType='scoops' />
      <Options optionType='toppings' />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
    </>
  );
};

export default OrderEntry;
