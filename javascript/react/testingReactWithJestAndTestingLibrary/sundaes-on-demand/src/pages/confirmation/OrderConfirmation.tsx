import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useOrderDetails } from '../../contexts/OrderDetails';
import AlertBanner from '../common/AlertBanner';

export default function OrderConfirmation({
  setOrderPhase,
}: {
  setOrderPhase?: Dispatch<SetStateAction<string>>;
}) {
  const [, , resetOrder] = useOrderDetails();
  const [orderNumber, setOrderNumber] = useState<number | string | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    axios
      // in a real app we would get order details from context
      // and send with POST
      .post(`http://localhost:3030/order`)
      .then((response) => {
        setOrderNumber(response.data.orderNumber);
      })
      .catch((error) => setError(true));
  }, []);

  if (error) {
    return <AlertBanner />;
  }

  function handleClick() {
    // clear the order details
    if (resetOrder) {
      resetOrder();
    }

    // send back to order page
    if (setOrderPhase) {
      setOrderPhase('inProgress');
    }
  }

  if (orderNumber) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Thank You!</h1>
        <p>Your order number is {orderNumber}</p>
        <p style={{ fontSize: '25%' }}>
          as per our terms and conditions, nothing will happen now
        </p>
        <Button onClick={handleClick}>Create new order</Button>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}
