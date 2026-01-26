import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center absolute w-[93%] top-0' onClick={() => props.setvehiclePanelOpen(false)}><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={() => props.setConfirmRidePanel(true)} className='flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between'>
          <img className='h-10' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.kibrispdr.org%2Fdata%2F988%2Fuber-car-png-2.png&f=1&nofb=1&ipt=43c8ab30c94d8dd60c0c44c5997ff23ebd57b23da5fa89e4eff77683a7fde125' />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-lg'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-base'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹193.20</h2>
        </div>
        <div onClick={() => props.setConfirmRidePanel(true)} className='flex border-2 mb-2 active:border-black  rounded-xl w-full p-3 items-center justify-between'>
          <img className='h-10' src='https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n' />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-lg'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-base'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹65.00</h2>
        </div>
        <div onClick={() => props.setConfirmRidePanel(true)} className='flex border-2 mb-2 active:border-black  rounded-xl w-full p-3 items-center justify-between'>
          <img className='h-10' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipart-library.com%2F2023%2FUber_Auto_312x208_pixels_Mobile.png&f=1&nofb=1&ipt=05a5d11aad88ea6e83d19e5dbf0d97af27672cb35b9bc82a017de5f9dcecd4ea' />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-lg'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-base'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹118.86</h2>
        </div>
    </div>
  )
}

export default VehiclePanel