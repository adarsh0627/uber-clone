import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
      <div>
          <h5 className='p-1 text-center absolute w-[93%] top-0' onClick={() => props.setFinishRidePanel(false)}><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
          <h3 className='text-2xl font-semibold mb-5'>Finish this Ride</h3>

          <div className='flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4'>
              <div className='flex items-center gap-3'>
                  <img className='h-12 w-12 rounded-full object-cover' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe7%2Ffe%2F0e%2Fe7fe0ec1ebaa54beb56b49d78f304414.jpg&f=1&nofb=1&ipt=373ed28ce1af03f4aa5a0eaea0c4a0aa588c77114098bedce922d1d077399b8e' alt='' />
                  <h2 className='text-lg font-medium'>Tokyo</h2>
              </div>
              <h5 className='text-lg font-semibold'>2.2 KM</h5>
          </div>

          <div className='flex gap-2 flex-col justify-between items-center'>
              <div className='w-full mt-5'>
                  <div className='flex items-center gap-5 p-3 border-b-2'>
                      <i className="text-lg ri-map-pin-line"></i>
                      <div>
                          <h3 className='text-lg font-medium'>562/11-A</h3>
                          <p className='text-sm text-gray-600 -mt-1'>Kankariya Talab, Bhopal</p>
                      </div>
                  </div>
                  <div className='flex items-center gap-5 p-3 border-b-2'>
                      <i className="ri-map-pin-user-fill"></i>
                      <div>
                          <h3 className='text-lg font-medium'>562/11-A</h3>
                          <p className='text-sm text-gray-600 -mt-1'>Kankariya Talab, Bhopal</p>
                      </div>
                  </div>
                  <div className='flex items-center gap-5 p-3'>
                      <i className="ri-money-rupee-circle-line"></i>
                      <div>
                          <h3 className='text-lg font-medium'>₹193.20</h3>
                          <p className='text-sm text-gray-600 -mt-1'>Cash Cash</p>
                      </div>
                  </div>
              </div>

              <div className='mt-6 w-full'>
                <Link to='/captain-home' className='mt-10 w-full flex text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>
                    Finish Ride
                </Link>
                
              </div>
          </div>
      </div>
  )
}

export default FinishRide