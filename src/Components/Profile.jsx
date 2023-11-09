import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../features/job/jobSlice";
import img from "../assets/talk.jpg";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
