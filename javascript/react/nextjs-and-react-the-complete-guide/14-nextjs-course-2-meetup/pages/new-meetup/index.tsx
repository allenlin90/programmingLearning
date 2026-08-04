import { NewMeetupForm } from 'components';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Meetup } from 'types';

export const NewMeetupPage: NextPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetup: Meetup) => {
    const data = await fetch('/api/new-meetup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(meetup),
    }).then((res) => res.json());

    router.replace('/');
  };

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name='description'
          content='Add your own meetups and create amazing networking opportunities.'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
