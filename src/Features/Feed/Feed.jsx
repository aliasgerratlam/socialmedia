import moment from 'moment';
import { HiMiniUserCircle, HiOutlineChatBubbleBottomCenter, HiOutlineShare } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import Like from '../Like/Like';
import { useMemo, useState } from 'react';
import { useGetLike } from '../Like/useGetLike';
import { useUser } from '../../auth/useUser';
import { removeLike } from '../../services/apiLikes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const Feed = ({tweet: {id, captions, images, created_at, profiles: {avatar, firstname, lastname, username}}, likesData}) => {
  const postDate = moment().diff(moment(created_at), 'hours') < 24 ? moment(created_at).fromNow() : moment(created_at).format("MMMM Do YYYY, h:mm A");
  const { handleGetLike } = useGetLike();
  const { user } = useUser();
  
  const queryClient = useQueryClient();

  const { mutate: handleRemoveLike, isPending } = useMutation({
    mutationFn: (likeId) => removeLike(likeId),
    onSuccess: () => {
        // queryClient.setQueryData(["likes"], likes.likes);
        queryClient.invalidateQueries({queryKey: ["likes"]})
    },
    onError: err => console.error(err.message)
  });

  const like = useMemo(() => {
    return (likesData || []).filter((likeData) => likeData.tweet_id === id);
  }, [likesData, id]);


  const handleSubmitLike = e => {
    e.preventDefault();

    const isLike = likesData.some(like => {
      return like.user_id === user.id && like.tweet_id === id
    });
    
    if(!isLike) {
      handleGetLike({userId: user.id, id});
    } else {
      handleRemoveLike({userId: user.id, tweet_id: id});
    }
  }

  return (
    <div className="bg-white border rounded-2xl my-5">
      <div className="flex items-start justify-between p-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={avatar} alt={username} className="size-14 rounded-full object-cover" />
          <div>
            <h3 className="text-lg font-semibold capitalize"><Link to={`/profile/${username}`}>{`${firstname} ${lastname}`}</Link></h3>
            <Link to={`/profile/${username}`} className="text-xs text-gray-500">@{`${username}`}</Link>
          </div>
        </div>
        <div className="text-sm text-gray-500 font-regular">{postDate}</div>
      </div>
      <div className="mt-2 mb-4 px-4">
        {captions}
      </div>
      {images && <div className="py-4">
        <img src={images} alt="" />
      </div>}
      <div className="p-4 pt-0">
        <div className="border p-2 rounded-lg border-gray-300 flex items-center space-x-1">
          <HiMiniUserCircle size={25} className="fill-gray-400" />
          <p className="text-sm text-gray-500">Write your comment...</p>
        </div>
        <div className="flex justify-start pt-1 gap-5">
          <Like like={like} user={user} tweetId={id} handleSubmitLike={handleSubmitLike} />

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
