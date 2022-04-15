import { MeetupDetail } from 'components';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Meetup } from 'types';
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
const password = process.env.MONGOPW;

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://nextjs:${password}@cluster0.3n88p.mongodb.net/nextjs-meetup?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupCollection = db.collection<Meetup>('meetups');

  const meetups = await meetupCollection.find().toArray();

  client.close();

  return {
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: 'blocking',
  };
};

interface MeetupParam extends ParsedUrlQuery {
  meetupId: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { meetupId } = params as MeetupParam;

  const client = await MongoClient.connect(
    `mongodb+srv://nextjs:${password}@cluster0.3n88p.mongodb.net/nextjs-meetup?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupCollection = db.collection('meetups');

  const meetup = await meetupCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      ...(meetup && {
        meetup: {
          id: meetup._id.toString(),
          image: meetup.image,
          title: meetup.title,
          address: meetup.address,
          description: meetup.description,
        },
      }),
    },
  };
};

interface MeetupDetailsPageProps {
  meetup: Meetup;
}

export const MeetupDetailsPage: NextPage<MeetupDetailsPageProps> = ({
  meetup,
}) => {
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta name='description' content={meetup.description} />
      </Head>
      <MeetupDetail {...meetup} />
    </>
  );
};

export default MeetupDetailsPage;
