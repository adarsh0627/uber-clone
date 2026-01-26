import React from 'react'

const LocationSearchPanel = (props) => {
    //sample array for location
    const locations = [
        "24B, Near Kappor's cafe, Sheryians Coding School, Bhopal",
        "22C, Near Malholtra's cafe, Sheryians Coding School, Bhopal",
        "20B, Near Singhai's cafe, Sheryians Coding School, Bhopal",
        "28A, Near Sharma's cafe, Sheryians Coding School, Bhopal",
    ]

  return (
    <div>
        {/* this is just a sample data */}
        {
            locations.map(function(element,idx) {
                return <div 
                            key={idx}
                            onClick={() => {
                                props.setvehiclePanelOpen(true)
                                props.setPanelOpen(false)
                            }} 
                            className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'
                        >
                        <h2 className='bg-[#eee] h-8 w-12 rounded-full flex items-center justify-center'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{element}</h4>
                    </div>
            })
        }
        
    </div>
  )
}

export default LocationSearchPanel