import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({})
  
  const submitHandler = (e) => {
      e.preventDefault();
      setUserData({
        fullName:{
          firstName:firstName,
          lastName:lastName,
        },
          email:email,
          password:password
      })
      setEmail('');
      setFirstName('');
      setLastName('');
      setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F4%2FUber-Logo-PNG-Free-Image.png&f=1&nofb=1&ipt=2e77fe86d457403e9b271246ac4ce6ce3f2413d15d0e90c625648d04cd48560d' />
        <form onSubmit={(e) => { submitHandler }}>

          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
              type='text'
              placeholder='First Name'
              value={firstName}
              onChange={(e)=> {setFirstName(e.target.value)}}
            />

            <input
            required
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
            type='text'
            placeholder='Last name'
            value={lastName}
            onChange={(e)=> {setLastName(e.target.value)}}
            />
          </div>

          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            value={email}
            onChange={(e)=> {setEmail(e.target.value)}}
            type='email'
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-base'
            required
            value={password}
            onChange={(e)=> {setPassword(e.target.value)}}
            type='password'
            placeholder='password'
          />

          <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
            Signup
          </button>

        </form>
        <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className='text-xs leading-tight text-[#aaa]'>
          By proceeding, you consent to get calls, 
          WhatsApp or SMS messages, including by automated means, 
          form Uber and its affiliates to the number provided.
        </p>
      </div>
    </div>
  )
}

export default UserSignup