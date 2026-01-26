import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null)

    useGSAP(function() {
    if(finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform:'translateY(0)'
      })
    }else{
      gsap.to(finishRidePanelRef.current, {
        transform:'translateY(100%)'
      })
    }
  }, [finishRidePanel])


  return (
      <div className='h-screen relative'>
          <div className='fixed w-screen p-6 top-0 flex items-center justify-between'>
              <img className='w-16' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F4%2FUber-Logo-PNG-Free-Image.png&f=1&nofb=1&ipt=2e77fe86d457403e9b271246ac4ce6ce3f2413d15d0e90c625648d04cd48560d" alt="" />
              <Link to='/captain-login' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                  <i className="ri-logout-box-r-line"></i>
              </Link>
          </div>

          <div className='h-4/5'>
              <img className='h-full w-full object-cover' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1280%2F0*gwMx05pqII5hbfmX.gif&f=1&nofb=1&ipt=924e5ae32ed0703b61e1a6a0b12c49e43af31fb768b975b215130a818bf081c7' />
          </div>

          <div 
            className='h-1/5 p-6 flex items-center justify-between bg-yellow-400 relative'
            onClick={() => {setFinishRidePanel(true)}}
          >
              <h5 onClick={() => { }} className='p-1 text-center absolute w-[95%] top-0'><i className="text-3xl text-gray-800 ri-arrow-up-wide-fill"></i></h5>
              <h4 className='text-xl font-semibold'>4 KM away</h4>
              <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
          </div>
          <div ref={finishRidePanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-12'>
            <FinishRide setFinishRidePanel={setFinishRidePanel} />
        </div>
      </div>
  )
}

export default CaptainRiding