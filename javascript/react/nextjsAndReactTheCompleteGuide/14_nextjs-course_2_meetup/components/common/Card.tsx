import { FC } from 'react';
import classes from './Card.module.css';

export const Card: FC = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
