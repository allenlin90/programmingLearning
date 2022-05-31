import axios from 'axios';
import { Row } from 'react-bootstrap';
import { FC, useEffect, useState } from 'react';
import { OptionType } from 'src/types';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';
import AlertBanner from './AlertBanner';

export const Options: FC<{ optionType: string }> = ({ optionType }) => {
  const [items, setItems] = useState<OptionType[]>([]);
  const [error, setError] = useState<boolean>(false);

  // optionType is 'scoops' or 'toppings
  useEffect(() => {
    axios(`http://localhost:3030/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((err) => setError(true));
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  const ItemComponent: FC<OptionType> = ({ name, imagePath }) =>
    optionType === 'scoops' ? (
      <ScoopOption name={name} imagePath={imagePath} />
    ) : optionType === 'toppings' ? (
      <ToppingOption name={name} imagePath={imagePath} />
    ) : null;

  const optionItem = items.map(({ name, imagePath }) => (
    <ItemComponent key={name} name={name} imagePath={imagePath} />
  ));

  return (
    <>
      <Row>{optionItem}</Row>;
    </>
  );
};

export default Options;
