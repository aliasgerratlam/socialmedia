import React from 'react'
import { HiOutlineHandThumbUp, HiHandThumbUp } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import useGetProfiles from '../Feed/useGetProfiles';

const Like = ({like, tweetId, user, handleSubmitLike}) => {
  const { data } = useGetProfiles();
  // console.log('first', like, tweetId, data)
  const isLike = like.some(like => like?.user_id === user?.id && like?.tweet_id === tweetId);
  const [isOpen, setIsOpen] = React.useState(false);
  const likedUsers = like?.filter(like => like.tweet_id === tweetId).map(profile => data?.find(user => user.id === profile.user_id));
  
  return (
    <div className="flex items-center gap-1 py-3">
        <button onClick={handleSubmitLike} className="hover:bg-gray-100 p-1 rounded-full">
          {isLike ?  <HiHandThumbUp className="text-gray-500" size={22} /> : <HiOutlineHandThumbUp className="text-gray-500" size={22} />}
        </button>
        <span onClick={() => setIsOpen(true)} className="text-md font-semibold text-gray-500 cursor-pointer">{like.length}</span>

        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          {
            likedUsers.length > 0 ? (
              <div className='p-4 bg-white'>
                <div className='mb-8'>
                  <h2 className='text-lg font-bold text-gray-900'>Who Likes this tweet</h2>
                </div>
                
                <div className='space-y-7 h-[500px] overflow-y-auto'>
                  {likedUsers?.map((item, i) => <div key={i} className='flex items-center gap-2'>
                    <div className=''>
                      <img src={item?.avatar} alt={item?.username} className="size-12 rounded-full object-cover" />
                    </div>
                    <div className=''>
                      <p className='leading-tight font-medium text-lg text-slate-800'>{item?.firstname} {item?.lastname}</p>
                      <p className='text-xs text-slate-600'>@{item?.username}</p>
                    </div>
                  </div>)}
                </div>
              </div>
            ) : (
              <div className='p-4 bg-white'>
                <h2 className='text-lg font-bold text-gray-800 text-center capitalize'>No one likes this tweet yet</h2>
              </div>
            )
          }
        </Modal>
    </div>
  )
}

export default Like;