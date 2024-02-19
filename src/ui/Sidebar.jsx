import Button from './Button';
import { HiOutlineGlobeAlt, HiOutlineHome, HiOutlineHashtag } from 'react-icons/hi2';

const Sidebar = () => {
  return (
    <div className="sidebar relative h-full text-right flex flex-col">
      <ul>
        <li className="my-4">
          <Button className="text-md flex justify-between items-center gap-2 ml-auto" type="secondary">
            <HiOutlineHome />
            Feed
          </Button>
        </li>
        <li className="my-4">
          <Button className="text-md flex justify-between items-center gap-2 ml-auto" type="secondary">
            <HiOutlineHashtag />
            Explore
          </Button>
        </li>
        <li className="my-4">
          <Button className="text-md flex justify-between items-center gap-2 ml-auto" type="secondary">
            <HiOutlineGlobeAlt />
            Language
          </Button>
        </li>
        <li className="mt-4 mb-1">
          <Button className="text-md min-w-48" type="primary">
            Create
          </Button>
        </li>
      </ul>

      <div className="mt-auto">
        <Button className="min-w-48" type="primary">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
