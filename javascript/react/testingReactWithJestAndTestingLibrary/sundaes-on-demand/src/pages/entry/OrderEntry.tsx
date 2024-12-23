import Button from 'react-bootstrap/Button';
import { FC, Dispatch, SetStateAction } from 'react';
import { useOrderDetails } from 'src/contexts/OrderDetails';
import Options from './Options';

export const OrderEntry: FC<{
  setOrderPhase: Dispatch<SetStateAction<string>>;
}> = ({ setOrderPhase }) => {
  const [orderDetails] = useOrderDetails();

  // disable order button if there aren't any scoops in order
  const orderDisabled = orderDetails.totals.scoops === '$0.00';

  return (
    <>
      <Options optionType='scoops' />
      <Options optionType='toppings' />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <Button disabled={orderDisabled} onClick={() => setOrderPhase('review')}>
        Order Sundae!
      </Button>
    </>
  );
};

export default OrderEntry;
