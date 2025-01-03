import React from 'react'
import { BsGenderMale } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { LiaPhoneSolid } from "react-icons/lia";
import { IoMailOutline } from "react-icons/io5";
import { TbLocation } from 'react-icons/tb';
function OwnerDetails({owner}) {
  return (
    <div className='container mt-48'>
      <div className='flex flex-col relative gap-4 items-center justify-center rounded-xl border dark:border-gray-600 px-12 py-16 '>
          <div className="lg:top-[-80px] top-[-60px]  lg:left-24  flex flex-col items-center gap-2  absolute">
            <img src={owner.image} className="rounded-full object-cover  lg:w-40 lg:h-40 w-28 h-28" alt="Profile Picture" />
            <span className="font-semibold ">
            {owner.lastname}  {owner.name}
            </span>
          </div>
         <div className='flex flex-col gap-12 w-full mx-8 mt-16  md:p-8'>
         <div className='grid md:grid-cols-2  grid-cols-1 gap-12  md:gap-0'>
           <div className='flex gap-4'>
             <div className='text-primary dark:text-primary  pt-1'><IoMailOutline size={22}/></div>
             <div>
              <span className='font-semibold lg:text-lg '>Email</span>
               <span className='text-secondary darktxt lg:text-base text-sm block mt-1 mb-2 leading-6'>{owner.email}</span>
             </div>
           </div>
           <div className='flex gap-4  lg:ml-28 md:ml-20'>
             <div className='text-primary dark:text-primary   pt-1'><BsGenderMale size={22}/></div>
             <div>
              <span className='font-semibold lg:text-lg '>Gender</span>
               <span className='text-secondary darktxt lg:text-base text-sm block mt-1 mb-2 leading-6'>{owner.gender}</span>
             </div>
           </div>
         </div>
         <div className='grid md:grid-cols-2 grid-cols-1 gap-12 md:gap-0'>
           <div className='flex gap-4'>
             <div className='text-primary dark:text-primary  pt-1'><TbLocation size={22}/></div>
             <div>
              <span className='font-semibold lg:text-lg '>Lives in</span>
               <span className='text-secondary darktxt lg:text-base text-sm block mt-1 mb-2 leading-6'>{owner.adress}</span>
             </div>
           </div>
           <div className='flex gap-4 lg:ml-28  md:ml-20'>
             <div className='text-primary dark:text-primary   pt-1'><LiaPhoneSolid size={22}/></div>
             <div>
              <span className='font-semibold lg:text-lg'>Phone number</span>
               <span className='text-secondary darktxt lg:text-base text-sm block mt-1 mb-2 leading-6'>{owner.phonenumber}</span>
             </div>
           </div>  
         </div>
        </div>
        <div className='border rounded-xl dark:border-gray-600 lg:p-9 p-6 lg:mx-8 '>
          <h1 className='font-semibold lg:text-[17px] mb-4 '>Biographie</h1>
          <span className='lg:text-[15px]  text-sm font-medium darktxt '>Hi there! I'm Benachour Ahmed, a dedicated property owner in Algiers. With years of experience in real estate, I strive to offer top-notch rental experiences. From cozy apartments to spacious homes, I take pride in providing quality living spaces. Looking forward to welcoming you to one of my properties!</span>
        </div>
      </div>
    </div>
  )
}

export default OwnerDetails
