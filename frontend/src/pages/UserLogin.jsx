import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            email:email,
            password:password
        })
        setEmail('');
        setPassword('');
    }


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-16 mb-10' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F4%2FUber-Logo-PNG-Free-Image.png&f=1&nofb=1&ipt=2e77fe86d457403e9b271246ac4ce6ce3f2413d15d0e90c625648d04cd48560d' />
            <form onSubmit={(e)=> {submitHandler}}>
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
                    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                    required
                    value={password}
                    onChange={(e)=> {setPassword(e.target.value)}}
                    type='password' 
                    placeholder='password' 
                />

                <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                    Login
                </button>

            </form>
            <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
        </div>
        <div>
            <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-[#fff] font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                Sign in as Captain
            </Link>
        </div>
    </div>
  )
}

export default UserLogin