import { HiMiniArrowLeft } from 'react-icons/hi2';
import Button from '../ui/Button';
import { BiSolidPaperPlane } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import BackButton from '../ui/BackButton';

const CreateFeed = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="max-w-5xl m-auto py-5">
        <div className="bg-green-50 rounded-xl">
          <div className="flex items-center justify-between p-5">
            <BackButton type="image" />
            <Button type="primary" className="flex items-center gap-2">
              <BiSolidPaperPlane /> Post
            </Button>
          </div>

          <div className="mt-5 bg-white rounded-t-3xl overflow-hidden min-h-[60vh]">
            <textarea placeholder="What is on your mind?" className="w-full p-5 outline-none resize-none text-lg font-regular min-h-[60vh] no-scrollbar"></textarea>
          </div>
        </div>
        <div className="bg-green-50 rounded-b-3xl p-5">
          <div className="text-right">
            <p className="text-md font-semibold text-green-600 tracking-wide">5000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFeed;
