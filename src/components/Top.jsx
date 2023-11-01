
import React from "react";

function Top() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-[#bad9d8] z-10 shadow">
        <div className="container mx-auto py-10">
          <div className="flex justify-between items-center">
            <div className="space-x-10">
              <a
                href=""
                className="text-gray-900"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '24px',
                }}
              >
                Find job
              </a>
              <a
                href=""
                className="text-gray-900"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '24px',
                }}
              >
                Messages
              </a>
              <a
                href=""
                className="text-gray-900"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '24px',
                }}
              >
                Community
              </a>
              <a
                href=""
                className="text-gray-900"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '24px',
                }}
              >
                FAQ
              </a>
            </div>
            <div className="">
              <button className="bg-[#235F97] text-white px-6 py-2 rounded-full hover:bg-blue-500">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Top;
