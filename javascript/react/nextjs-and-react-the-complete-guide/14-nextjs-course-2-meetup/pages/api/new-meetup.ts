// /api/new-meetup
// POST
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
const password = process.env.MONGOPW;

export const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      `mongodb+srv://nextjs:${password}@cluster0.3n88p.mongodb.net/nextjs-meetup?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupCollection = db.collection('meetups');

    const result = await meetupCollection.insertOne(data);

    console.log(result);

    client.close();

    return res
      .status(201)
      .json({ status: 201, message: 'Meetup inserted', data });
  }
};

export default handler;
