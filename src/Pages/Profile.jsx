import React, { useMemo, useRef, useState } from 'react'
import BackButton from '../ui/BackButton'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { useUser } from '../auth/useUser'

const Profile = () => {
    const noImg = "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg";
    const [image, setImage] = useState(noImg);
    const imageInput = useRef(null);

    const {user, isPending} = useUser();
    const {email, firstname, lastname} = user?.user_metadata || {};

    const [userData, setUserData] = useState({
        firstname: user?.user_metadata.firstname || "",
        lastname: user?.user_metadata.lastname || "",
        dob: "",
        profession: "",
        bio: "",
        gender: "",
    });

    useMemo(() => {
        if(user) {
            setUserData({
                firstname: user?.user_metadata.firstname || "",
                lastname: user?.user_metadata.lastname || "",
                dob: "",
                profession: "",
                bio: "",
                gender: "",
            })
        }
    }, [user]);

    const handleImageChange = (e) => {
        let image = e.target.files[0];
        if (!image) setImage(noImg);
        else setImage(URL.createObjectURL(image));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!userData.firstname || !userData.lastname || !userData.dob || !userData.profession || !userData.bio || !userData.gender) return;
        console.log('userData', userData, image)
    }

    if(isPending) return <p>Loading...</p>

  return (
    <div className="bg-gray-200 min-h-screen">
        <div className="max-w-5xl m-auto py-5">
            <div className="bg-green-50 rounded-xl">
                <div className="p-5">
                    <BackButton type="text" />
                    
                    <form className='mt-8' onSubmit={handleSubmit}>
                        <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                            <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500" src={image} alt="Bordered avatar" />

                            <div className="flex flex-col space-y-5 sm:ml-8">
                                <input className='hidden' ref={imageInput} type='file' accept="image/*" onChange={handleImageChange} />
                                <button type="button" className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200" onClick={() => imageInput.current.click()}>
                                    Change picture
                                </button>
                                <button type="button" className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200">
                                    Delete picture
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 items-center mt-8 sm:mt-14 text-[#202142]">
                            <Input label="First name" type="text" placeholder="John" defaultValue={userData.firstname || ""} onChange={e => setUserData({ ...userData, firstname: e.target.value })} />
                            <Input label="Last name" type="text" placeholder="Doe" defaultValue={userData.lastname || ""} onChange={e => setUserData({ ...userData, lastname: e.target.value })} />
                            <Input label="Email" type="email" placeholder="Johndoe@example.com" defaultValue={email} disabled />
                            <Input label="Date of Birth" type="date" value={userData.dob} onChange={e => setUserData({ ...userData, dob: e.target.value })} />
                            <Input label="Profession" type="text" placeholder="Software Developer" value={userData.profession} onChange={e => setUserData({ ...userData, profession: e.target.value })} />
                            <Input label="Gender" type="select" value={userData.gender} onChange={e => setUserData({ ...userData, gender: e.target.value })}>
                                <option value="">Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Input>
                            <Input label="Bio" type="textarea" placeholder="Write something about yourself" className="col-span-2" value={userData.bio} onChange={e => setUserData({ ...userData, bio: e.target.value })} />

                            <div className="flex justify-end">
                                <Button type="primary">Save</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile