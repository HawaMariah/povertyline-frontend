// import React from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";

// import { AiOutlineClose } from "react-icons/ai";
// import { HiMenuAlt1 } from "react-icons/hi";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setLoggedInUser } from "../features/job/jobSlice"

// function Top() {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const [toggle, setToggle] = useState(false);
//   const loggedInUser = useSelector(state => state.jobs.loggedInUser)

//   const logout = () => {
//     dispatch(setLoggedInUser(null))
//     navigate("/")
//   }

//   function openMenu() {
//     setToggle(true);
//   }
//   function closeMenu() {
//     setToggle(false);
//   }
//   return (
//     <>
//       <div className="flex items-center justify-between p-5 lg:flex-row bg-[#bad9d8] shadow-xl ">
//         <div className="text-3xl uppercase" >
//         <NavLink to="/">Gighunt</NavLink>
//         </div>
//         <div className="space-x-4">
//           <div className=" hidden  lg:block space-x-2">
//             <Link
//               to="/findjobs"
//               className="hover:text-white  px-5 py-2 text-xl"
//             >
//               Find job
//             </Link>

//             <Link
//               to="/admin"
//               className="hover:text-white  px-5 py-2 text-xl"
//             >
//               Admin
//             </Link>

//             <Link
//               to="/contactus"
//               className="hover:text-white  px-5 py-2 text-xl"
//             >
//               Contact us
//             </Link>
//             <Link
//               to="/community"
//               className="hover:text-white  px-5 py-2 text-xl"
//             >
//               Community
//             </Link>

//             <Link
//               to="/faqs"
//               className="hover:text-white  px-5 py-2 text-xl"
//             >
//               FAQs
//             </Link>

//             {loggedInUser !== null && loggedInUser.email ?
//               (
//               <>
//                   <Link
//                       to="/userprofile"
//                       className="hover:text-white  px-5 py-2 text-xl"
//                   >
//                     {loggedInUser.email}
//                   </Link>

//                   <Link to="/#" onClick={logout}>
//                     logout
//                   </Link>
//               </>):
//               (<>
//                 <Link
//                   to="/signup"
//                   className="hover:text-white  px-5 py-2 text-xl"
//                 >
//                   Sign Up
//                 </Link>

//                 <Link
//                   to="/login"
//                   className="hover:text-white  px-5 py-2 text-xl"
//                 >
//                   Log in
//                 </Link>
//               </>)
//             }
//           </div>
//           <div className="ssm:block lg:hidden">
//             {toggle ? (
//               <AiOutlineClose
//                 onClick={closeMenu}
//                 size={30}
//                 className="cursor-pointer"
//               />
//             ) : (
//               <HiMenuAlt1 onClick={openMenu} size={30} />
//             )}
//           </div>
//         </div>
//       </div>
//       <div>
//         {toggle ? (
//           <div className="lg:hidden flex justify-between ml-10">
//             <ul>
//               <li className="text-xl mb-2 cursor-pointer">
//                 <Link to="/findjobs">Find job</Link>
//               </li>
//               <li className="text-xl mb-2 cursor-pointer">
//                 <Link to="/donate">Messages</Link>
//               </li>
//               <li className="text-xl mb-2 cursor-pointer">
//                 <Link to="/community">Community</Link>
//               </li>

//               <li className="text-xl mb-2 cursor-pointer">
//                 <Link to="/faqs">FAQs</Link>
//               </li>
//               <li className="text-xl mb-2 cursor-pointer">
//                 <Link to="/signup">SignUp</Link>
//               </li>
//             </ul>
//           </div>
//         ) : (
//           <div></div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Top;

import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInUser } from "../features/job/jobSlice";

function Top() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);
  const loggedInUser = useSelector((state) => state.jobs.loggedInUser);

  const logout = () => {
    dispatch(setLoggedInUser(null));


    navigate("/");
  };

  function openMenu() {
    setToggle(true);
  }
  function closeMenu() {
    setToggle(false);
  }
  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row bg-[#bad9d8] shadow-xl ">
        <div className="text-3xl uppercase">
          <NavLink to="/">Gighunt</NavLink>
        </div>
        <div className="space-x-4">
          <div className=" hidden  lg:block space-x-2">
            <Link
              to="/findjobs"
              className="hover:text-white  px-5 py-2 text-xl"
            >
              Find job
            </Link>

          {
            loggedInUser !== null && loggedInUser.usertype === "employer" ? 
            (
              <Link to="/admin" className="hover:text-white  px-5 py-2 text-xl">
              Admin
            </Link>
            ): 
            ("")
          }
            

            <Link
              to="/contactus"
              className="hover:text-white  px-5 py-2 text-xl"
            >
              Contact us
            </Link>
            <Link
              to="/community"
              className="hover:text-white  px-5 py-2 text-xl"
            >
              Community
            </Link>

            <Link to="/faqs" className="hover:text-white  px-5 py-2 text-xl">
              FAQs
            </Link>

            
            {loggedInUser !== null && loggedInUser.username ? (
              <>
                <Link to="/userprofile" className="inline-block px-5 py-2 text-xl">
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg
                      className="absolute w-12 h-12 text-gray-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </Link>
                

                {/* <Link to="/#" onClick={logout}>
                  logout
                </Link> */}
              </>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="hover:text-white  px-5 py-2 text-xl"
                >
                  Sign Up
                </Link>

                <Link
                  to="/login"
                  className="hover:text-white  px-5 py-2 text-xl"
                >
                  Log in
                </Link>
              </>
            )}
          </div>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <AiOutlineClose
                onClick={closeMenu}
                size={30}
                className="cursor-pointer"
              />
            ) : (
              <HiMenuAlt1 onClick={openMenu} size={30} />
            )}
          </div>
        </div>
      </div>
      <div>
        {toggle ? (
          <div className="lg:hidden flex justify-between ml-10">
            <ul>
              <li className="text-xl mb-2 cursor-pointer">
                <Link to="/findjobs">Find job</Link>
              </li>
              <li className="text-xl mb-2 cursor-pointer">
                <Link to="/donate">Messages</Link>
              </li>
              <li className="text-xl mb-2 cursor-pointer">
                <Link to="/community">Community</Link>
              </li>

              <li className="text-xl mb-2 cursor-pointer">
                <Link to="/faqs">FAQs</Link>
              </li>
              <li className="text-xl mb-2 cursor-pointer">
                <Link to="/signup">SignUp</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default Top;
