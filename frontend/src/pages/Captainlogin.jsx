import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const Captainlogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {captain, setCaptain} = React.useContext(CaptainDataContext);
    const navigate = useNavigate();
    
    const submitHandler = async (e) => {
        e.preventDefault();
        const captain = {
            email:email,
            password:password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

        if(response.status === 200) {
            const data = response.data;
            
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }

        setEmail('');
        setPassword('');
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <div className='flex flex-col items-center'>
                <img className='w-16 mb-3' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F05%2FUber-Emblem.png&f=1&nofb=1&ipt=02d1ed76d63a4a56522183b8c9e0b7dc11671056244ab35b6d553efbb8e70742' />
                <h2 className='text-xl font-bold mb-5'>Captain Login</h2>
            </div>
            <form onSubmit={submitHandler}>
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