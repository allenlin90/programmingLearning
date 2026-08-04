import { NextPage } from 'next';
import { useRouter } from 'next/router';

export const NewsPage: NextPage = () => {
  const router = useRouter();

  return <h1>The News Page</h1>;
};

export default NewsPage;
