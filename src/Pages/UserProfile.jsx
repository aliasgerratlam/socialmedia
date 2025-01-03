import React, { useEffect, useMemo } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useTweets } from '../Features/Feed/useGetTweets';
import { useLocation, useNavigate } from 'react-router-dom';
import useGetProfiles from '../Features/Feed/useGetProfiles';
import Feed from '../Features/Feed/Feed';
import Button from '../ui/Button';
import { useUser } from '../auth/useUser';
import moment from 'moment';

const UserProfile = () => {
    const { user, isAuthenticated } = useUser();
    const { data: tweets, error, isPending } = useTweets();
    const { data: profiles } = useGetProfiles();

    const location = useLocation();
    const navigation = useNavigate();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
 
    const profile = useMemo(() => {
        const segments = location.pathname.split('/');
        return profiles?.find((user) => user?.username === segments[segments.length - 1]) || {};
    }, [profiles, location.pathname]);

    const tweetsListing = useMemo(() => {
        return tweets?.filter((tweet) => tweet?.user_id === profile?.id) || [];
    }, [tweets, profile?.id]);

    const handleBack = e => {
        e.preventDefault();
        navigation(-1);
    }

    return (
    <>
        <div className="py-3 flex justify-start items-center bg-indigo-600">
            <div className="mx-2">
                <button onClick={handleBack} className="text-lg inline-block font-medium rounded-full bg-transparent hover:bg-gray-600 w-10 h-10 text-center" type="basic"><FaArrowLeftLong className='text-gray-100 mx-auto' /></button>
            </div>
            <div className="mx-2">
                <h2 className="mb-0 text-xl font-bold text-gray-100 capitalize">{`${profile.firstname || ""} ${profile.lastname || ""}`}</h2>
                <small className='text-gray-100 text-xs font-normal lowercase'>@{profile.username || ""}</small>
            </div>
        </div>

            <hr className="border-gray-800" />

            <div className="w-full bg-cover bg-no-repeat bg-center" style={{height: '200px', background: 'url(https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200)'}}>
                <img className="opacity-0 w-full h-full" src="https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200" alt="" />
            </div>
            <div className="bg-gray-50 p-4">
                <div className="relative flex w-full">
                    <div className="flex flex-1">
                        <div className='flex flex-row items-center gap-5'>
                            <div className="rounded-full relative avatar w-32 h-32">
                                <img className="object-cover rounded-full border-4 border-gray-900 w-32 h-32" src={profile.avatar} alt="" />
                            </div>
                            <div className=''>
                                <h2 className="text-xl leading-6 font-bold text-gray-900 capitalize">{profile.firstname} {profile.lastname}</h2>
                                <p className="text-sm leading-5 text-gray-500">@{profile.username}</p>
                            </div>
                        </div>
                    </div>
                    
                    {user.id === profile.id && <div className="flex flex-col text-right">
                        <Button to={`/edit-profile/${profile?.id}`} type="outline">Edit Profile</Button>
                    </div>}
                </div>

                <div className=" w-full mt-3">
                    <div className='text-end'>
                        <p className='text-sm font-medium'>Joined in: {moment(profile.created_at).format("MMMM YYYY")}</p>
                    </div>

                    <div className="mt-3">
                        <p className="text-gray-900 leading-tight mb-2">{profile?.bio}</p>
                    </div>
                </div>
            </div>

            <div className='mx-5'>
                {tweetsListing.map((tweet, index) => <Feed key={index} tweet={tweet} />)}
            </div>
    </>
  )
}

export default UserProfile