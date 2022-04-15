import { FC } from 'react';
import { Meetup } from 'types';
import { MeetupItem } from './MeetupItem';
import classes from './MeetupList.module.css';

export const MeetupList: FC<{ meetups: Meetup[] }> = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          address={meetup.address}
          title={meetup.title}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
