import Feed from '../Features/Feed/Feed';
import CreateFeed from '../Features/Feed/Create';
import { useTweets } from '../Features/Feed/usePosts';
import { useMemo, useState } from 'react';

const Home = () => {
  const { data, error, isPending } = useTweets();
  const [tweets, setTweets] = useState();

  // useMemo(() => {
  //   if (data) setTweets(data);
  // }, [data]);
  // console.log(data);

  return (
    <>
      <CreateFeed />
      {data?.map((tweet, i) => (
        <div key={i} className="[&>*:first-child]:mt-4">
          <Feed tweet={tweet} />
        </div>
      ))}
    </>
  );
};

export default Home;
