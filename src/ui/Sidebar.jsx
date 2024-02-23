import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { HiOutlineGlobeAlt, HiOutlineHome, HiOutlineHashtag } from 'react-icons/hi2';

const Sidebar = ({ side }) => {
  const navigate = useNavigate();

  if (side === 'left') {
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
            <Button className="text-md min-w-48" type="primary" onClick={() => navigate('/create')}>
              Create
            </Button>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <>
        <div className="sidebar relative h-full text-left flex flex-col w-3/6">
          <ul>
            {/* <li className="mb-2">
              <div className="mt-auto">
                <Button className="min-w-full" type="primary">
                  Sign up
                </Button>
              </div>
            </li> */}
            <li>
              <div className="mt-auto">
                <Button className="min-w-full" type="primary" onClick={() => navigate('/auth/signup')}>
                  Sign In
                </Button>
              </div>
            </li>
            <li className="my-4 mt-5">
              <div className="relative ">
                <label htmlFor="Search" className="sr-only">
                  Search
                </label>

                <input type="text" id="Search" placeholder="Search for..." className="bg-slate-100 border border-gray-300 w-full p-4 rounded-full py-2.5 pe-10 shadow-sm sm:text-sm " />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                  <button type="button" className="text-gray-600 hover:text-gray-700">
                    <span className="sr-only">Search</span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </button>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  }
};

export default Sidebar;
