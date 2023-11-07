// import React from "react";

// function Profile() {
//     return (
//         <div className="bg-white flex flex-row justify-center w-full">
//             <div className="bg-white w-[1728px] h-[2189px] relative">
//                 <img className="w-[1728px] h-px top-[192px] left-0 absolute object-cover" alt="Line" src="line-1.svg" />
//                 <div className="absolute w-[101px] top-[84px] left-[446px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#1a1a1a] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
//                     Find job
//                 </div>
//                 <div className="absolute w-[101px] top-[84px] left-[666px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#272626] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
//                     Messages
//                 </div>
//                 <div className="absolute w-[124px] top-[84px] left-[950px] [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-950 text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
//                     Community
//                 </div>
//                 <div className="absolute w-[101px] top-[87px] left-[1243px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#050505] text-[20px] tracking-[0] leading-[normal]">
//                     FAQ
//                 </div>
//                 <img className="w-px h-[1366px] top-[299px] left-[293px] absolute object-cover" alt="Line" src="line-2.svg" />
//                 <div className="absolute top-[340px] left-[136px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
//                     My info
//                 </div>
//                 <div className="absolute top-[314px] left-[321px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
//                     My info
//                 </div>
//                 <img className="w-[68px] h-px top-[375px] left-[136px] absolute object-cover" alt="Line" src="line-3.svg" />
//                 <div className="absolute w-[1073px] h-[368px] top-[414px] left-[327px] bg-[#d9d9d9] rounded-[20px]">
//                     <div className="absolute top-[68px] left-[915px] [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-600 text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
//                         Edit profile
//                     </div>
//                     <div className="absolute top-[73px] left-[340px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[96px] tracking-[0] leading-[normal]">
//                         John Doe
//                     </div>
//                     <div className="absolute w-[177px] h-[181px] top-[69px] left-[50px] bg-[#786868] rounded-[88.5px/90.5px]" />
//                     <div className="absolute top-[257px] left-[340px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
//                         Nairobi, Kenya
//                     </div>
//                     <div className="absolute top-[193px] left-[340px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
//                         UI/ UX Designer
//                     </div>
//                 </div>
//                 <div className="absolute w-[1728px] h-[340px] top-[1849px] left-0 bg-[#0b0b0b]">
//                     <div className="absolute top-[53px] left-[716px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[30px] tracking-[0] leading-[normal] whitespace-nowrap">
//                         Company
//                     </div>
//                     <div className="absolute top-[49px] left-[92px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[36px] tracking-[0] leading-[normal]">
//                         SKILLHUNTER
//                     </div>
//                     <div className="absolute top-[53px] left-[1099px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[30px] tracking-[0] leading-[normal] whitespace-nowrap">
//                         Product
//                     </div>
//                     <div className="absolute top-[53px] left-[1439px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[30px] tracking-[0] leading-[normal] whitespace-nowrap">
//                         Contacts
//                     </div>
//                     <img
//                         className="w-[56px] h-[52px] top-[203px] left-[92px] absolute object-cover"
//                         alt="Image"
//                         src="image-2.png"
//                     />
//                     <img
//                         className="w-[47px] h-[47px] top-[208px] left-[167px] absolute object-cover"
//                         alt="Image"
//                         src="image-3.png"
//                     />
//                     <img
//                         className="w-[50px] h-[50px] top-[205px] left-[233px] absolute object-cover"
//                         alt="Image"
//                         src="image-4.png"
//                     />
//                     <img
//                         className="w-[47px] h-[47px] top-[208px] left-[327px] absolute object-cover"
//                         alt="Image"
//                         src="image-5.png"
//                     />
//                     <p className="absolute top-[117px] left-[92px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[23px] tracking-[0] leading-[normal]">
//                         Skillhunter Inc is a&nbsp;&nbsp;licenced <br />
//                         platform in&nbsp;&nbsp;the Republic of Kenya
//                     </p>
//                     <div className="absolute top-[115px] left-[716px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[normal]">
//                         Home
//                     </div>
//                     <div className="absolute top-[173px] left-[716px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[normal]">
//                         About
//                     </div>
//                     <div className="absolute top-[231px] left-[716px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[normal]">
//                         Community
//                     </div>
//                     <div className="absolute top-[115px] left-[1099px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[normal]">
//                         Log in
//                     </div>
//                     <div className="absolute top-[173px] left-[1099px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[normal]">
//                         Sign up
//                     </div>
//                     <div className="absolute top-[231px] left-[1099px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[normal]">
//                         Home
//                     </div>
//                     <div className="absolute top-[115px] left-[1439px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[normal]">
//                         +2547123456
//                     </div>
//                     <div className="absolute w-[240px] top-[173px] left-[1439px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[normal]">
//                         info@skillhunter.com
//                     </div>
//                 </div>
//                 <div className="absolute w-[1054px] h-[453px] top-[850px] left-[337px] bg-[#d9d9d9] rounded-[20px]">
//                     <div className="absolute top-[116px] left-[78px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
//                         First name
//                     </div>
//                     <div className="absolute top-[45px] left-[55px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
//                         Personal information
//                     </div>
//                     <div className="absolute top-[116px] left-[422px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
//                         Last name
//                     </div>
//                     <div className="absolute top-[202px] left-[78px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
//                         Email
//                     </div>
//                     <div className="absolute top-[202px] left-[422px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
//                         Phone
//                     </div>
//                     <div className="absolute top-[288px] left-[78px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
//                         Bio
//                     </div>
//                 </div>
//                 <div className="absolute w-[1054px] h-[345px] top-[1374px] left-[337px] bg-[#d9d9d9] rounded-[20px]">
//                     <div className="absolute top-[45px] left-[55px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
//                         Address
//                     </div>
//                     <div className="absolute top-[142px] left-[55px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
//                         Country
//                     </div>
//                     <div className="absolute top-[142px] left-[446px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
//                         City
//                     </div>
//                     <div className="absolute top-[228px] left-[55px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
//                         Postal code
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Profile;
