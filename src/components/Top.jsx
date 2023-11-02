import React from "react";
import { Link } from "react-router-dom";
function Top() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-[#bad9d8] shadow-xl">
        <div className="container mx-auto py-6">
          <div className="flex justify-between items-center">
            <div className="space-x-20">
              <Link
                to=""
                className="text-gray-900"
                style={{
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                Find job
              </Link>
              <Link
                to=""
                className="text-gray-900"
                style={{
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                Messages
              </Link>
              <Link
                to=""
                className="text-gray-900"
                style={{
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                Community
              </Link>
              <Link
                to=""
                className="text-gray-900"
                style={{
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                FAQ
              </Link>
            </div>
            <div className="">
              <Link to="/signup">
                <button className="bg-[#235F97] text-white px-6 py-2 rounded-full hover:bg-blue-500">
                  SignUp
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Top;
