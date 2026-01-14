import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const {captain, setCaptain} = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

    if(response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
    setVehicleColor('');
    setVehicleCapacity('');
    setVehiclePlate('');
    setVehicleType('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <div className='flex flex-col items-center'>
          <img className='w-14 mb-3' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F05%2FUber-Emblem.png&f=1&nofb=1&ipt=02d1ed76d63a4a56522183b8c9e0b7dc11671056244ab35b6d553efbb8e70742' />
          <h2 className='text-xl font-bold mb-5'>Captain Signup</h2>
        </div>
        <form onSubmit={ submitHandler }>

          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-5'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
              type='text'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => { setFirstName(e.target.value) }}
            />

            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
              type='text'
              placeholder='Last name'
              value={lastName}
              onChange={(e) => { setLastName(e.target.value) }}
            />
          </div>

          <div className='flex items-center justify-between gap-4'>
            <h3 className='text-lg font-medium mb-2'>Email:</h3>
            <input
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              type='email'
              placeholder='email@example.com'
            />
          </div>

          <div className='flex items-center justify-between gap-4'>
            <h3 className='text-lg font-medium mb-2'>Password:</h3>
            <input
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base'
              required
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              type='password'
              placeholder='password'
            />
          </div>

          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-3'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg'
              type='text'
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg'
              type='text'
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-5'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg'
              type='number'
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">car</option>
              <option value="auto">auto</option>
              <option value="motorcycle">motorcycle</option>
            </select>
          </div>

          <button className='bg-[#111] text-[#fff] font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
            Create Captain Account
          </button>

        </form>
        <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className='text-xs leading-tight text-[#aaa] text-center'>
          <span className='underline text-black'> Policy</span> and <span className='underline text-black'>Terms of Service.</span>
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup