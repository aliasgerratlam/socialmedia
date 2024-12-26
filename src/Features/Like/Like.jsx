import React from 'react'
import { HiOutlineHandThumbUp, HiHandThumbUp } from 'react-icons/hi2';

const Like = ({like, handleSubmitLike}) => {
  console.log('like', like)

  return (
    <div className="flex items-center gap-1 py-3">
        <button onClick={handleSubmitLike} className="hover:bg-gray-100 p-1 rounded-full">
            {like.length > 0 ?  <HiHandThumbUp className="text-gray-500" size={22} /> : <HiOutlineHandThumbUp className="text-gray-500" size={22} />}
        </button>
        <span className="text-md font-semibold text-gray-500">{like.length}</span>
    </div>
  )
}

export default Like;