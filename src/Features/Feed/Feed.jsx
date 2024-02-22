import { HiMiniUserCircle, HiOutlineHandThumbUp, HiOutlineChatBubbleBottomCenter, HiOutlineShare } from 'react-icons/hi2';

const Feed = () => {
  return (
    <div className="bg-white border rounded-2xl my-5">
      <div className="flex items-start justify-between p-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="https://doodleipsum.com/700/avatar-2?i=29a11c4444c4c0d795d3aba1c0ce37d0" alt="" className="size-14 rounded-full" />
          <div>
            <h3 className="text-lg font-semibold">John Doe</h3>
            <div className="text-xs text-gray-500">@johndoe12</div>
          </div>
        </div>
        <div className="text-sm text-gray-500 font-regular">19 Feb, 2024</div>
      </div>
      <div className="mt-2 mb-4 px-4">
        <p>
          Welcome to the Koo family 🙂 <br />
          <br />
          1. Follow people you like by clicking on the '+ Follow' button to see their posts in your feed. <br />
          2. Share your thoughts with others and gain a following.
          <br />
          <br /> Happy Koo to you!
        </p>
      </div>
      <div className="py-4">
        <img src="https://picsum.photos/seed/picsum/800" alt="Post Image" />
      </div>
      <div className="p-4 pt-0">
        <div className="border p-2 rounded-lg border-gray-300 flex items-center space-x-1">
          <HiMiniUserCircle size={25} className="fill-gray-400" />
          <p className="text-sm text-gray-500">Write your comment...</p>
        </div>
        <div className="flex justify-start pt-1 gap-5">
          <div className="flex items-center gap-1 py-3">
            <button className="hover:bg-gray-100 p-1 rounded-full">
              <HiOutlineHandThumbUp className="text-gray-500" size={22} />
            </button>
            <span className="text-md font-semibold text-gray-500">0</span>
          </div>

          <div className="flex items-center gap-1 py-3">
            <button className="hover:bg-gray-100 p-1 rounded-full">
              <HiOutlineChatBubbleBottomCenter className="text-gray-500" size={22} />
            </button>
            <span className="text-md font-semibold text-gray-500">0</span>
          </div>

          <div className="flex items-center gap-1 py-3">
            <button className="hover:bg-gray-100 p-1 rounded-full">
              <HiOutlineShare className="text-gray-500" size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
