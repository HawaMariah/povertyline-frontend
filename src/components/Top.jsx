// import React from "react";
// import { Link } from "react-router-dom";

// import { AiOutlineClose } from "react-icons/ai";
// import { HiMenuAlt1 } from "react-icons/hi";
// import { useState } from "react";

// function Top() {
//   const [toggle, setToggle] = useState(false);

//   function openMenu() {
//     setToggle(true);
//   }
//   function closeMenu() {
//     setToggle(false);
//   }
//   return (
//     <>
//       <div className="flex items-center justify-between p-10 lg:flex-row bg-[#bad9d8] shadow-xl ">
//         <div className="space-x-4">
//           <div className=" hidden  lg:block space-x-2">
//             <Link
//               to="/"
//               className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
//             >
//               Find job
//             </Link>
//             <Link
//               to="/donate"
//               className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
//             >
//               Messages
//             </Link>
//             <Link
//               to="/events"
//               className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
//             >
//               Community
//             </Link>

//             <Link
//               to="/faqs"
//               className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
//             >
//               FAQs
//             </Link>
//             <Link
//               to="/signup"
//               className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
//             >
//               SignUp
//             </Link>
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
//                 <Link to="/">Find job</Link>
//               </li>
//               <li className="text-xl mb-2 cursor-pointer">
//                 <Link to="/donate">Messages</Link>
//               </li>
//               <li className="text-xl mb-2 cursor-pointer">
//                 <Link to="/events">Community</Link>
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
import { Link } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

function Top() {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }
  function closeMenu() {
    setToggle(false);
  }
  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row bg-[#bad9d8] shadow-xl ">
        <div className="text-3xl uppercase" >
        <h1>Gighunt</h1>
        </div>
        <div className="space-x-4">
          <div className=" hidden  lg:block space-x-2">
            <Link
              to="/"
              className="hover:text-white  px-5 py-2 text-xl"
            >
              Find job
            </Link>
            <Link
              to="/donate"
              className="hover:text-white  px-5 py-2 text-xl"
            >
              Messages
            </Link>
            <Link
              to="/community"
              className="hover:text-white  px-5 py-2 text-xl"
            >
              Community
            </Link>

            <Link
              to="/faqs"
              className="hover:text-white  px-5 py-2 text-xl"
            >
              FAQs
            </Link>
            <Link
              to="/signup"
              className="hover:text-white  px-5 py-2 text-xl"
            >
              SignUp
            </Link>
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
                <Link to="/">Find job</Link>
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
