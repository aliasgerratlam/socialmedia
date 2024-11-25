import Button from '../ui/Button';
import { BiSolidPaperPlane } from 'react-icons/bi';
import BackButton from '../ui/BackButton';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useCreateTweets } from '../Features/Feed/useCreateTweets';
import {useUser} from "../auth/useUser";
import Spinner from '../ui/Spinner';
import { IoImageOutline, IoCloseOutline } from "react-icons/io5";


const CreateFeed = () => {
  const limit = 1000;
  const {user} = useUser();
  const [tweets, setTweets] = useState({user_id: null, captions: '', images: null, modified_at: null});
  const {postTweet, isPending} = useCreateTweets();
  const [selectedImage, setSelectedImage] = useState(null);
  const imageInput = useRef(null);

  const remainingWordLimit = useMemo(() => {
    return limit - tweets.captions.length;
  }, [tweets.captions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tweets.captions || remainingWordLimit < 0) return;
    const newTweet = {...tweets, user_id: user ? user.id : null,};
    setTweets(newTweet);
    postTweet(newTweet);
    setTweets({ user_id: null, captions: '', images: null, modified_at: null });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setTweets({...tweets, images: file});
    }
  };

  const handleRemoveImage = e => {
    e.preventDefault();
    imageInput.current.value = null; 
    setSelectedImage(null);
    setTweets({...tweets, images: null});
  }

  if(isPending) return <Spinner />;
  
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="max-w-5xl m-auto py-5">
        <form onSubmit={handleSubmit}>
          {/* <input type="hidden" value={tweets.user_id} onChange={() => setTweets({...tweets, user_id: user.id})} /> */}
          <div className="bg-green-50 rounded-xl">
            <div className="flex items-center justify-between p-5">
              <BackButton type="image" />
              <Button type="primary" className="flex items-center gap-2">
                <BiSolidPaperPlane /> Post
              </Button>
            </div>

            <div className="mt-5 bg-white rounded-t-3xl overflow-hidden min-h-[60vh]">
              <textarea placeholder="What is on your mind?" value={tweets.captions} onChange={(e) => setTweets({...tweets, captions: e.target.value})} className="w-full p-5 outline-none resize-none text-lg font-regular min-h-[60vh] no-scrollbar"></textarea>
            </div>
          </div>
          <div className="bg-green-50 rounded-b-3xl p-5 flex items-center justify-between">
            <div className='flex items-center gap-5'>
              <input type="file" ref={imageInput} accept="image/*" onChange={handleImageChange} className='hidden' />
              <button onClick={e => {e.preventDefault(); imageInput.current.click()}} className='inline-block text-xl rounded-full p-2 hover:bg-green-200 active:scale-95'><IoImageOutline /></button>
              
              {selectedImage && (
                <div className='relative'>
                  <span className='inline-block cursor-pointer absolute -top-3 -right-3' onClick={handleRemoveImage}><IoCloseOutline /></span>
                  <img src={selectedImage} alt="Selected" className='w-12 h-12 rounded-lg object-cover' />
                </div>
              )}
            </div>
            <div className="text-right">
              <p className={`text-md font-semibold tracking-wide ${remainingWordLimit < 0 ? "text-yellow-400" : remainingWordLimit < 100 ? "text-red-600" : "text-green-600"}`}>{remainingWordLimit}</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFeed;
