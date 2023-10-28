
import React from "react";

function Top() {
  return (
    <>
    
    <div className="flex justify-around py-10 border-b border-blue-300 shadow-lg">
      <div className="space-x-10">
        <a
          href=""
          className="pl-10 text-gray-900 "
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
          className="pl-10 text-gray-900"
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
          className="pl-10 text-gray-900"
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
          className="pl-10 text-gray-900"
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
 
    </>
  );
}

export default Top;
