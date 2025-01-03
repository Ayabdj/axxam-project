import React from 'react';

function BookingCard({ cards }) {
  return (
    <div className='container mb-16'>
      <h1 className=" pb-12 pt-20 md:pb-15 font-bold text-xl md:text-left text-center">All bookings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {cards.map((element) => (
          <div key={element.id} className="flex flex-wrap cursor-pointer mb-4 px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-2xl">
            <div className="w-full h-[140px] lg:h-[170px] mb-4 relative overflow-hidden rounded-xl">
              <img src={element.image} className="h-full w-full" alt={element.location} />
            </div>
            <h1 className='font-semibold darktxt pb-3'>{element.location}</h1>
            <div className="flex justify-between w-full">
              <div>
                <span className="text-secondary darktxt text-[14px] font-normal block mb-2 leading-6">
                  Check-in
                  <br />
                  Checkout
                </span>
              </div>
              <div>
                <span className="darktxt text-[14px] font-normal block mb-2 leading-6">
                  {element.checkin}
                  <br />
                  {element.checkout}
                </span>
              </div>
            </div>
            <div className='flex justify-between w-full'>
              <span className='text-secondary darktxt text-[14px] font-normal block mb-2 leading-6'>Payment</span>
              <span className='font-semibold text-[14px] darktxt'>{element.Payment}</span>
            </div>
            <div className='w-[90%] pt-2 '>
              {element.Payment === "Completed" ? (
                <button className='BookingButton border relative before:absolute dark:border-gray-600'>
                  <span className='w-[12px] h-[12px] rounded-full border bg-green-600 ' />
                  Completed
                </button>
              ) : element.Payment === "Cancelled" ? (
                <button className=' BookingButton border dark:border-gray-600'>
                  <span className='w-[12px] h-[12px] rounded-full border bg-red-600 ' />
                  Cancelled
                </button>
              ) : element.Payment === "Upcoming" ? (
                <button className='BookingButton border dark:border-gray-600'>
                  <span className='w-[12px] h-[12px] rounded-full border bg-orange-600 ' />
                  Upcoming
                </button>
              ) : element.Payment === "inprogress" ? (
                <button className='BookingButton border dark:border-gray-600'>
                  <span className='w-[12px] h-[12px] rounded-full border bg-primary ' />
                  In progress
                </button>
              ) : (<></>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingCard;
