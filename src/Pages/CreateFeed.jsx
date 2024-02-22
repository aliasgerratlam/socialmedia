import React from 'react';
import { HiMiniArrowLeft } from 'react-icons/hi2';
import Button from '../ui/Button';
import { BiSolidPaperPlane } from 'react-icons/bi';

const CreateFeed = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="max-w-5xl m-auto py-5">
        <div className="bg-green-50 p-5 rounded-xl">
          <div className="flex items-center justify-between">
            <button className="flex items-center space-x-1 transition active:scale-90">
              <HiMiniArrowLeft size={25} className="fill-gray-800" /> <img src="https://doodleipsum.com/700/avatar-2?i=29a11c4444c4c0d795d3aba1c0ce37d0" alt="" className="size-12 rounded-full" />
            </button>

            <Button type="primary" className="flex items-center gap-2">
              <BiSolidPaperPlane /> Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFeed;
