// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// function Profile() {
//     const navigate = useNavigate()
//     const loggedInUser = useSelector(state => state.jobs.loggedInUser)
//     console.log(loggedInUser)
//     useEffect(() => {
//         if (loggedInUser === null) {
//             navigate('/login')
//         }

//         fetch(`https://skillhunter-sj7f.onrender.com//employees/${loggedInUser.id}`)
//             .then(res => res.json())
//             .then((response) => {
//                 console.log(response)
//             })
//     }, [loggedInUser])

//     return (
//         <div className="bg-white flex flex-row justify-center w-full ">
//             <div className="w-full px-10">
//                 <img className=" left-0  object-cover" alt="Line" src="line-1.svg" />

//                 <img className="  object-cover" alt="Line" src="line-3.svg" />
//                 <div className=" bg-[#d9d9d9] rounded-[20px]">

//                     <div className="p-10 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[60px] tracking-[0] leading-[normal]">
//                         {loggedInUser.username}
//                     </div>
//                     <div className=" bg-[#786868] rounded-[88.5px/90.5px]" />

//                 </div>

//                 <div className="mt-10 bg-[#d9d9d9] rounded-[20px] p-10 space-y-7">
//                     <div className=" [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
//                         First name: {loggedInUser.username}
//                     </div>
//                     <div className=" [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
//                         Last name: {loggedInUser.username}
//                     </div>
//                     <div className=" [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
//                         Email: {loggedInUser.email}
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };
// export default Profile;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.jobs.loggedInUser);

  const logout = () => {
    dispatch(setLoggedInUser(null));
    navigate("/");
  };

  useEffect(() => {
    if (loggedInUser === null) {
      navigate("/login");
    }

    fetch(`https://skillhunter-sj7f.onrender.com//employees/${loggedInUser.id}`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      });
  }, [loggedInUser, navigate]);

  if (!loggedInUser) {
    return null; // Or render a loading state if needed
  }

  return (
    <>
      <div className="bg-white flex flex-row justify-center   pt-10">
        <div className="w-full px-10 lg:w-[50vw]">
          <div className="bg-[#d9d9d9] rounded-[20px] p-10 mb-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-black ">
                {loggedInUser.username}
              </div>
              <div className="" />

              <div className=" rounded-full w-16 h-16 mx-auto mb-4relative inline-flex items-center justify-center overflow-hidden  dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {" "}
                  {loggedInUser.username
                    ? loggedInUser.username.slice(0, 2).toUpperCase()
                    : ""}
                </span>
              </div>
            </div>

            <div className="mt-6 text-lg font-normal text-black pt-10">
              <div className="mb-3">
                <span className="font-semibold"> Name:</span>
                {loggedInUser.username}
              </div>

              <div>
                <span className="font-semibold">Email:</span>{" "}
                {loggedInUser.email}
              </div>
            </div>
            <div className="mt-10 text-center">
              <Link
                to="/#"
                onClick={logout}
                className=" px-5 py-2 text-xl bg-red-500 rounded-full text-white "
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
