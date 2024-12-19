import Feed from '../Features/Feed/Feed';
import CreateFeed from '../Features/Feed/Create';
import { useTweets } from '../Features/Feed/useGetTweets';
import Spinner from '../ui/Spinner'
import useDisplayLike from '../Features/Like/useDisplayLikes';

const Home = () => {
  const { data, error, isPending } = useTweets();
  const fetchData = data ? [...data].reverse() : [];
  const { likesData } = useDisplayLike();
  if(isPending) <Spinner />
  return (
    <>
      <CreateFeed />
      
      {fetchData?.map((tweet, i) => (
        <div key={i} className="[&>*:first-child]:mt-4 mx-4">
          <Feed tweet={tweet} likesData={likesData} />
        </div> 
      ))}
    </>
  );
};

export default Home;