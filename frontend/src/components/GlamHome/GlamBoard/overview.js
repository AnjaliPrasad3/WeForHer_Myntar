import React, { useState, Fragment } from 'react';
import Footer from '../../Footer/Footer';
import Sidebar from './sidebar';
import DatePicker from "react-datepicker";
import SalesChart from "../../Charts/SalesChart";

const Overview = () => {
  const [startDate, setStartDate] = useState(new Date().setDate(1));
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Fragment>
      <div>
        <div className='py-4 border-b-[1px] mx-auto w-[90%] mt-5 2xl:w-[70%] xl:w-[70%] lg:w-[70%]'>
          <h1 className='font-semibold text-lg font1'>Account</h1>
          <p className='text-xs'>User Name</p>
        </div>
        <div className='flex w-[90%] h-auto mx-auto 2xl:w-[70%] xl:w-[70%] lg:w-[70%]'>
          <div className='w-[30%] border-r-2 2xl:w-[20%] xl:w-[20%] lg:w-[20%]'>
            <Sidebar />
          </div>
          <div className='w-[70%] h-full 2xl:w-[80%] xl:w-[80%] lg:w-[80%]'>
            <div className='w-[100%] mx-auto text-xs 2xl:w-[60%] xl:w-[60%] lg:w-[60%] 2xl:text-base xl:text-base lg:text-base'>
              <h1 className='font-semibold text-lg font1 border-b-[1px] my-4 py-4'>Profile Details</h1>
              <div className="flex justify-between items-center mb-4">
                <div className="p-3 border rounded">
                  <label className="block mb-2">Start Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    className="form-control"
                  />
                </div>
                <div className="p-3 border rounded">
                  <label className="block mb-2">End Date</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    className="form-control"
                  />
                </div>
                <button className="btn fetch-btn px-5 py-2 bg-blue-500 text-white rounded">
                  Fetch
                </button>
              </div>
              <div className="flex justify-between my-5">
                <div className="w-[48%] p-4 rounded text-white" style={{ backgroundColor: '#0db7af' }}>
                  <div className="text-center">
                    <h2 className="text-xl mb-2">Contacts</h2>
                    <b className="text-2xl">343</b>
                  </div>
                </div>
                <div className="w-[48%] p-4 rounded text-white" style={{ backgroundColor: '#ee5f73' }}>
                  <div className="text-center">
                    <h2 className="text-xl mb-2">Likes</h2>
                    <b className="text-2xl">345</b>
                  </div>
                </div>
              </div>
              <SalesChart />
              <div className="mb-5"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Overview;