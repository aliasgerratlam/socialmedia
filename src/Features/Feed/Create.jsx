import { HiMiniUserCircle, HiMiniPlusCircle } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const CreateFeed = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="border p-2 rounded-lg bg-white border-gray-300 flex items-center space-x-1 transition ">
        <HiMiniUserCircle size={25} className="fill-gray-400" />
        <p className="text-sm text-gray-500 flex-1 cursor-pointer" onClick={() => navigate('/create')}>
          What's on your mind?
        </p>
        <HiMiniPlusCircle size={28} className="fill-gray-700 cursor-pointer" onClick={() => navigate('/create')} />
      </div>
    </>
  );
};

export default CreateFeed;
