import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center absolute w-[93%] top-0' onClick={() => props.setConfirmRidePanel(false)}><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>
        
        <div className='flex gap-2 flex-col justify-between items-center'>
            <img className='h-20' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.kibrispdr.org%2Fdata%2F988%2Fuber-car-png-2.png&f=1&nofb=1&ipt=43c8ab30c94d8dd60c0c44c5997ff23ebd57b23da5fa89e4eff77683a7fde125' alt=""/>
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
            <button 
                onClick={() =>{ 
                    props.setVehicleFound(true)
                    props.setConfirmRidePanel(false)
                }}
                className='mt-5 w-full bg-green-600 text-white font-semibold p-2 rounded-lg'
            >
                Confirm
            </button>
        </div>
    </div>
  )
}

export default ConfirmRide