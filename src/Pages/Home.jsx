import Feed from '../Features/Feed/Feed';
import CreateFeed from '../Features/Feed/Create';

const Home = () => {
  return (
    <>
      <CreateFeed />
      {Array.from({ length: 2 }).map(() => (
        <div className="[&>*:first-child]:mt-4">
          <Feed />
        </div>
      ))}
    </>
  );
};

export default Home;
