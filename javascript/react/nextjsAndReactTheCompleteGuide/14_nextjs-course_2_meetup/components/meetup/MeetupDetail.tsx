import { FC } from 'react';
import Image from 'next/image';
import { Meetup } from 'types';
import classes from './MeetupDetail.module.css';

export const MeetupDetail: FC<Meetup> = ({
  id,
  image,
  title,
  address,
  description,
}) => {
  return (
    <section id={id} className={classes.detail}>
      <Image
        src={image ?? '/vercel.svg'}
        alt={title}
        layout='responsive'
        width={100}
        height={50}
      />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
