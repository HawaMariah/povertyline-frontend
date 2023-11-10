// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setLoggedInUser } from "../features/job/jobSlice";
// import img from "../assets/talk.jpg";


// function Profile() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const loggedInUser = useSelector((state) => state.jobs.loggedInUser);

//   const logout = () => {
//     dispatch(setLoggedInUser(null));
//     localStorage.setItem('user', null);
//     navigate("/");
//   };

//   useEffect(() => {
//     if (loggedInUser === null) {  
//       navigate("/login");
//     }

//     fetch(`https://skillhunter-sj7f.onrender.com//employees/${loggedInUser.id}`)
//       .then((res) => res.json())
//       .then((response) => {
//         console.log(response);
//       });
//   }, [loggedInUser, navigate]);

//   if (!loggedInUser) {
//     return null; // Or render a loading state if needed
//   }

//   return (
//     <>
//       <div className="relative mb-5">
//         <img
//           src={img}
//           alt=""
//           className="w-full h-[30vh] object-cover max-w-full"
//         />
       
       
//       </div>
//       <div className=" bg-white flex flex-row justify-center ">
//         <div className="w-full px-10 lg:w-[50vw]">
//           <div className="bg-[#d9d9d9] rounded-[20px] p-10 mb-10">
//             <div className="text-center">
//               <div className="text-2xl font-bold text-black ">
//                 Hello <br />
//                  {loggedInUser.username} !!
//               </div>
//               <div className="" />

//               <div className=" rounded-full w-16 h-16 mx-auto mb-4relative inline-flex items-center justify-center overflow-hidden  dark:bg-gray-600">
//                 <span className="font-medium text-gray-600 dark:text-gray-300">
//                   {" "}
//                   {loggedInUser.username
//                     ? loggedInUser.username.slice(0, 2).toUpperCase()
//                     : ""}
//                 </span>
//               </div>
//             </div>

//             <div className="mt-6 text-lg font-normal text-black pt-10">
//               <div className="mb-3">
//                 <span className="font-semibold"> Name:</span>
//                 {loggedInUser.username}
//               </div>

//               <div>
//                 <span className="font-semibold">Email:</span>{" "}
//                 {loggedInUser.email}
//               </div>
//             </div>
//             <div className=" text-center">
//                 <h1 className="pt-5 text-lg font-bold text-black ">Bio:</h1>
//                 <p>
//                 Passionate web developer with a love for creating elegant, user-friendly interfaces. Skilled in HTML, CSS, and JavaScript. Always eager to learn and stay up-to-date with the latest technologies. Enthusiastic about building robust and scalable web applications   
//                 </p>
//             </div>
//             <div className="mt-10 text-center">
//               <Link
//                 to="/#"
//                 onClick={logout}
//                 className=" px-5 py-2 text-xl bg-red-500 rounded-full text-white "
//               >
//                 Logout
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
   
//     </>
//   );
// }

// export default Profile;


import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../features/job/jobSlice";
import img from "../assets/talk.jpg";


function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const baseUrl = useSelector(state => state.jobs.baseUrl)
  const loggedInUser = useSelector((state) => state.jobs.loggedInUser);

  const logout = () => {
    dispatch(setLoggedInUser(null));
    localStorage.setItem('user', null);
    navigate("/");
  };

  useEffect(() => {
    if (loggedInUser === null) {  
      navigate("/login");
    }

    fetch(`${baseUrl}/employees/${loggedInUser.id}`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      });

    fetch(`${baseUrl}/employees/${loggedInUser.id}/applications`)
      .then(res => res.json())
      .then(response => {
        console.log(response)
      })
  }, [loggedInUser, navigate]);

  if (!loggedInUser) {
    return null; // Or render a loading state if needed
  }

  return (
    <>
      <div className="relative mb-5">
        <img
          src={img}
          alt=""
          className="w-full h-[30vh] object-cover max-w-full"
        />
       
       
      </div>
      <div className=" bg-white flex flex-row justify-center ">
        <div className="w-full px-10 lg:w-[50vw]">
          <div className="bg-[#d9d9d9] rounded-[20px] p-10 mb-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-black ">
                Hello <br />
                 {loggedInUser.username} !!
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
            <div className=" text-center">
                <h1 className="pt-5 text-lg font-bold text-black ">Bio:</h1>
                <p>
                Passionate web developer with a love for creating elegant, user-friendly interfaces. Skilled in HTML, CSS, and JavaScript. Always eager to learn and stay up-to-date with the latest technologies. Enthusiastic about building robust and scalable web applications   
                </p>
            </div>

            <br/>

<div className="w-full flex items-center justify-center my-8"><h2 className="font-bold text-xl">Job Applications</h2></div>


            <div class="mx-6 relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-md text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 bg-gray-200 dark:bg-gray-800">
                    Job Title
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-200 dark:bg-gray-800">
                    Company
                </th>
            </tr>
        </thead>
        <tbody className="">
            <tr class="border-b text-md border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Devops Engineer
                </th>

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Amazon
                </th>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Systems analyst
                </th>

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Microsoft Inc.
                </th>
            </tr>
           
        </tbody>
    </table>
</div>




            <div className="mt-14 text-center">
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
