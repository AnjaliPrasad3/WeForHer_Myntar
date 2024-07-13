import React, { Fragment, useState } from 'react';
import img from '../images/login.webp';
import './Login.css';

const Login = () => {
  const [mobileno, setMobileno] = useState('');
  const [loading, setLoading] = useState(false); // Define loading state

  const continueHandler = () => {
    setLoading(true); // Set loading to true when continue button is clicked

    // Perform your logic here (e.g., validate mobile number, make API calls)

    // For demo purposes, simulate a delay using setTimeout
    setTimeout(() => {
      setLoading(false); // Reset loading state after the operation completes
    }, 2000); // Adjust delay as needed
  };

  return (
    <Fragment>
      <div className='w-full h-screen bg-[#fcecf4] py-10'>
        <div className='h-[500px] bg-white mx-auto w-[100vw] sm:w-[430px] md:w-[430px] lg:w-[430px] xl:w-[430px] 2xl:w-[430px]'>
          <img src={img} alt="login" className='w-auto min-h-[150px]' />
          <div className='mx-auto w-[330px] my-8'>
            <h1 className='font1 text-2xl font-medium mb-5'>Login <span className='text-lg'>or</span> Singup</h1>

            <input
              type="number"
              name="phonenumber"
              className='w-full h-10 border-[1px] focus:border-[#353535] focus:border-[1px] focus:outline-none border-[#6a696993] p-2 web appearance-none'
              onChange={(e) => setMobileno(e.target.value)}
              placeholder='+91 | Mobile Number*'
            />
            <p id='error' className='text-xs text-red-500'></p>

            <h1 className='font1 text-sm mt-5'>
              By Continuing, I agree to the <span className='text-[#ee5f73]'>Terms of Use</span> &{' '}
              <span className='text-[#ee5f73]'> Privacy Policy</span>
            </h1>
            <button
              type='submit'
              onClick={continueHandler}
              className='bg-[#ee5f73] text-white w-full font-semibold text-lg py-[6px] my-5'
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Loading...' : 'CONTINUE'}
            </button>
            <h1 className='font1 text-sm'>
              Have trouble logging in? <span className='text-[#ee5f73]'>Get help</span>
            </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
