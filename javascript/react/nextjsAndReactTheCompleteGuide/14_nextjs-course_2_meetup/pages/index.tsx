import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { MeetupList } from 'components';
import { Meetup } from 'types';
import { MongoClient } from 'mongodb';
const password = process.env.MONGOPW;

export const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://images.unsplash.com/photo-1649861672954-ac57f31a6c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    address: 'Some address 5, 12345',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://images.unsplash.com/photo-1649861672954-ac57f31a6c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    address: 'Some address 5, 12345',
    description: 'This is a second meetup!',
  },
];

// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   return { props: { meetup: DUMMY_MEETUPS } };
// };

export const getStaticProps: GetStaticProps = async (_ctx) => {
  const client = await MongoClient.connect(
    `mongodb+srv://nextjs:${password}@cluster0.3n88p.mongodb.net/nextjs-meetup?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupCollection = db.collection<Meetup>('meetups');

  const meetups = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        image: meetup.image,
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
      })),
    },
    revalidate: 1, // renew every 1 second
  };
};

export const HomePage: NextPage<{ meetups: Meetup[] }> = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React'
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
};

export default HomePage;
