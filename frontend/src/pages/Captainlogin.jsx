import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Captainlogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setCaptainData] = useState({})
    
    const submitHandler = (e) => {
        e.preventDefault();
        setCaptainData({
            email:email,
            password:password
        })
        setEmail('');
        setPassword('');
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-16 mb-7' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F05%2FUber-Emblem.png&f=1&nofb=1&ipt=02d1ed76d63a4a56522183b8c9e0b7dc11671056244ab35b6d553efbb8e70742' />
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
            <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
        </div>
        <div>
            <Link to='/login' className='bg-[#d5622d] flex items-center justify-center text-[#fff] font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                Sign in as User
            </Link>
        </div>
    </div>
  )
}

export default Captainlogin