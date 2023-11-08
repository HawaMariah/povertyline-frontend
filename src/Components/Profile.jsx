import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate()
    const loggedInUser = useSelector(state => state.jobs.loggedInUser)
    console.log(loggedInUser)
    useEffect(() => {
        if (loggedInUser === null) {
            navigate('/login')
        }

        fetch(`https://skillhunter-sj7f.onrender.com//employees/${loggedInUser.id}`)
            .then(res => res.json())
            .then((response) => {
                console.log(response)
            })
    }, [loggedInUser])

    return (
        <div className="bg-white flex flex-row justify-center w-full ">
            <div className="w-full px-10">
                <img className=" left-0  object-cover" alt="Line" src="line-1.svg" />
                
                <img className="  object-cover" alt="Line" src="line-3.svg" />
                <div className=" bg-[#d9d9d9] rounded-[20px]">

                    <div className="p-10 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[60px] tracking-[0] leading-[normal]">
                        {loggedInUser.username}
                    </div>
                    <div className=" bg-[#786868] rounded-[88.5px/90.5px]" />

                </div>

                <div className="mt-10 bg-[#d9d9d9] rounded-[20px] p-10 space-y-7">
                    <div className=" [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
                        First name: {loggedInUser.username}
                    </div>
                    <div className=" [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
                        Last name: {loggedInUser.username}
                    </div>
                    <div className=" [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
                        Email: {loggedInUser.email}
                    </div>
                </div>
                
            </div>
        </div>
    );
};
export default Profile;
