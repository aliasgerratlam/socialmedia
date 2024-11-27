import React from 'react'
import { HiOutlineHandThumbUp } from 'react-icons/hi2';

const Like = () => {
  return (
    <div className="flex items-center gap-1 py-3">
        <button className="hover:bg-gray-100 p-1 rounded-full">
            <HiOutlineHandThumbUp className="text-gray-500" size={22} />
        </button>
        <span className="text-md font-semibold text-gray-500">0</span>
    </div>
  )
}

export default Like;