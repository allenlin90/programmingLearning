import axios from 'axios';
import { Row } from 'react-bootstrap';
import { FC, useEffect, useState } from 'react';
import { OptionType } from 'src/types';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';
import AlertBanner from '../common/AlertBanner';
import { pricePerItem } from '../../constants';
import { useOrderDetails } from '../../contexts/OrderDetails';
import { formatCurrency } from '../../utilities';

export const Options: FC<{ optionType: string }> = ({ optionType }) => {
  const [items, setItems] = useState<OptionType[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [orderDetails, updateItemCount] = useOrderDetails();

  // optionType is 'scoops' or 'toppings
  useEffect(() => {
    axios(`http://localhost:3030/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((err) => setError(true));
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(
          itemName,
          newItemCount as string,
          optionType as 'scoops' | 'toppings'
        )
      }
    />
  ));

  return (
    <>
      <h2>{title}</h2>
      <p>
        {formatCurrency(pricePerItem[optionType as 'scoops' | 'toppings'])} each
      </p>
      <p>
        {title} total:{' '}
        {orderDetails.totals[optionType as 'toppings' | 'scoops']}
      </p>
      <Row>{optionItems}</Row>
    </>
  );
};

export default Options;
