import React from 'react'
import { HiMiniArrowLeft } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom'

const BackButton = ({type}) => {
    const navigate = useNavigate();

    if(type === "text") return (
        <button className="flex items-center space-x-5 font-medium transition text-lg active:scale-90" onClick={() => navigate(-1)}>
            <HiMiniArrowLeft size={25} className="fill-gray-800 align-middle" /> <span>Back</span>
        </button>
    )
    else if(type === "image") return (
        <button className="flex items-center space-x-1 transition active:scale-90" onClick={() => navigate(-1)}>
            <HiMiniArrowLeft size={25} className="fill-gray-800" /> <img src="https://doodleipsum.com/700/avatar-2?i=29a11c4444c4c0d795d3aba1c0ce37d0" alt="" className="size-12 rounded-full" />
        </button>
    )
}

export default BackButton