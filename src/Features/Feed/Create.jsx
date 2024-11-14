import { HiMiniUserCircle, HiMiniPlusCircle } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import {useUser} from "../../auth/useUser";

const CreateFeed = () => {
  const navigate = useNavigate();
  const {isAuthenticated} = useUser();

  return (
    <div className="border p-2 rounded-lg bg-white border-gray-300 flex items-center space-x-1 transition mx-4 mt-4">
      <HiMiniUserCircle size={25} className="fill-gray-400" />
      <p className="text-sm text-gray-500 flex-1 cursor-pointer" onClick={() => navigate(isAuthenticated ? '/create' : '/auth/signin')}>
        What's on your mind?
      </p>
      <HiMiniPlusCircle size={28} className="fill-gray-700 cursor-pointer" onClick={() => navigate(isAuthenticated ? '/create' : '/auth/signin')} />
    </div>
  );
};

export default CreateFeed;
