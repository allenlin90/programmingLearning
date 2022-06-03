import React, { Dispatch, SetStateAction } from 'react';
import SummaryForm from './SummaryForm';
import { useOrderDetails } from '../../contexts/OrderDetails';

export default function OrderSummary({
  setOrderPhase,
}: {
  setOrderPhase?: Dispatch<SetStateAction<string>>;
}) {
  const [orderDetails] = useOrderDetails();

  const scoopArray = Array.from(orderDetails.scoops.entries());
  const scoopList = scoopArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  // only display toppings if the toppings total is nonzero
  const hasToppings = orderDetails.totals.toppings !== '$0.00';
  let toppingsDisplay = null;

  if (hasToppings) {
    const toppingsArray = Array.from(orderDetails.toppings.keys());
    const toppingList = toppingsArray.map((key: string) => (
      <li key={key}>{key}</li>
    ));
    toppingsDisplay = (
      <>
        <h2>Toppings: {orderDetails.totals.toppings}</h2>
        <ul>{toppingList}</ul>
      </>
    );
  }

  return (
    <div>
      <h1>Order Summary</h1>
      <h2>Scoops: {orderDetails.totals.scoops}</h2>
      <ul>{scoopList}</ul>
      {toppingsDisplay}
      <SummaryForm setOrderPhase={setOrderPhase} />
    </div>
  );
}
