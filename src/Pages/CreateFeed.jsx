import { HiMiniArrowLeft } from 'react-icons/hi2';
import Button from '../ui/Button';
import { BiSolidPaperPlane } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const CreateFeed = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="max-w-5xl m-auto py-5">
        <div className="bg-green-50 rounded-xl">
          <div className="flex items-center justify-between p-5">
            <button className="flex items-center space-x-1 transition active:scale-90" onClick={() => navigate(-1)}>
              <HiMiniArrowLeft size={25} className="fill-gray-800" /> <img src="https://doodleipsum.com/700/avatar-2?i=29a11c4444c4c0d795d3aba1c0ce37d0" alt="" className="size-12 rounded-full" />
            </button>

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
