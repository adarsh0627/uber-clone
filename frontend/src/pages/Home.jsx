import React, { useRef, useState } from 'react';
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const confirRidePanelRef = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const [vehiclePanelOpen, setvehiclePanelOpen] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function() {
    if(panelOpen) {
      gsap.to(panelRef.current, {
        height:'70%',
        padding:20
      })
      gsap.to(panelCloseRef.current, {
        opacity:1
      })
    }else{
      gsap.to(panelRef.current, {
        height:'0',
        padding:0
      })
      gsap.to(panelCloseRef.current, {
        opacity:0
      })
    }
  }, [panelOpen])

  useGSAP(function() {
    if(vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current, {
        transform:'translateY(100%)'
      })
    }
  }, [vehiclePanelOpen])

  useGSAP(function() {
    if(confirmRidePanel) {
      gsap.to(confirRidePanelRef.current, {
        transform:'translateY(0)'
      })
    }else{
      gsap.to(confirRidePanelRef.current, {
        transform:'translateY(100%)'
      })
    }
  }, [confirmRidePanel])

  useGSAP(function() {
    if(vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehicleFoundRef.current, {
        transform:'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useGSAP(function() {
    if(waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform:'translateY(0)'
      })
    }else{
      gsap.to(waitingForDriverRef.current, {
        transform:'translateY(100%)'
      })
    }
  }, [waitingForDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F4%2FUber-Logo-PNG-Free-Image.png&f=1&nofb=1&ipt=2e77fe86d457403e9b271246ac4ce6ce3f2413d15d0e90c625648d04cd48560d' />

      <div className='h-screen w-screen'>
        {/* image for temporary use */}
        <img className='h-full w-full object-cover' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1280%2F0*gwMx05pqII5hbfmX.gif&f=1&nofb=1&ipt=924e5ae32ed0703b61e1a6a0b12c49e43af31fb768b975b215130a818bf081c7' />
      </div>

      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] bg-white p-5 relative'>
          <h5 
            ref={panelCloseRef} 
            onClick={() =>{setPanelOpen(false)}} 
            className='absolute opacity-0 top-4 right-6 text-2xl'
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[35%] left-10 bg-gray-700 rounded-full"></div>
            <input 
              onClick={() => {
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e) => {setPickup(e.target.value)}}
              className='bg-[#eee] py-2 px-12 text-lg rounded-lg w-full mt-5' 
              type='text' 
              placeholder='Add a pick-up location'
            />
            <input 
              onClick={() => {
                setPanelOpen(true)
              }}
              value={destination}
              onChange={(e) => {setDestination(e.target.value)}}
              className='bg-[#eee] py-2 px-12 text-lg rounded-lg w-full mt-3' 
              type='text' 
              placeholder='Enter your destination'
            />
          </form>
        </div>
        <div ref={panelRef} className='bg-white h-0'>
              <LocationSearchPanel  setPanelOpen={setPanelOpen} setvehiclePanelOpen={setvehiclePanelOpen}/>
        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-10 pt-12'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setvehiclePanelOpen={setvehiclePanelOpen}/>
      </div>
      <div ref={confirRidePanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-12'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-12'>
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div ref={waitingForDriverRef} className='fixed w-full z-10 bg-white bottom-0  px-3 py-6 pt-12'>
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  )
}

export default Home