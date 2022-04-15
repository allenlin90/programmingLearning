import { FC, MouseEventHandler } from 'react';
import { Meetup } from 'types';
import { Card } from 'components';
import { useRouter } from 'next/router';
import Image from 'next/image';
import classes from './MeetupItem.module.css';

export const MeetupItem: FC<Meetup> = ({ id, image, title, address }) => {
  const router = useRouter();
  const showDetailsHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    router.push(`/${id}`);
  };

  return (
    <li id={id} className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image
            src={image ?? ''}
            alt={title}
            height={50}
            width={100}
            layout='responsive'
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
