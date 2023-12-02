import React from 'react'
import Table from './Table'
import Charts from './Charts'

import placementPdf from '../assets/placement.pdf';

function Placement() {
  
  return (
    <div className='container-fluid '>
        <div className="container lg:p-5 p-1">
                <div className="container lg:mt-10 mt-5">
                    <span className="lg:text-5xl text-2xl font-bold" >Annual Placement Records</span>
                </div>
                <div className='container mt-5 overflow-x-scroll lg:overflow-x-hidden'>
                   <Table/> 
                </div>
        </div>

        <div className="container lg:p-5 p-1">
                <div className="container lg:mt-10 mt-5">
                    <span className="lg:text-5xl text-2xl font-bold" >150+ Placement in A.Y. 2020-21</span>
                </div>
                <div className='container mt-5  lg:overflow-x-hidden'>
                   <Charts/> 
                </div>
        </div>
        <div className="container lg:p-5 p-1 hidden lg:block" >
               
                <div className='container mt-5  lg:overflow-x-hidden  lg:p-5'>
                  <div className='flex flex-col gap-3 text-gray-600'>
                          <span>
                            MGMs COE had a successfully placement sessison during 2018-2023.
                          </span>
                          <span>
                            Students got offer from on-campus  and  onl;ine/off-campus selection process.
                          </span>
                          <span>
                            Some students even qualified GATE ,  CAT , and BARC and some have went to pursue post-graduation in IITs.
                          </span>
                  </div>
                </div>
        </div>
        <hr className='mt-3 container'/>
        <div className="container lg:p-5 p-1 " >
               
                <div className='container items-center flex flex-col gap-3 mt-5 w-100  lg:overflow-x-hidden  lg:p-5'>
                  <div className='flex lg:flex-row flex-col gap-3 text-gray-600 w-100 justify-center '>
                          <button className="btn bg-blue-700 text-light hover:text-dark hover:bg-blue-300 rounded-0 font-bold ">Batch 2017-2018</button>
                          <button className="btn bg-blue-700 text-light rounded-0 font-bold hover:text-dark hover:bg-blue-300">Batch 2018-2019</button>
                          <button className="btn bg-blue-700 text-light rounded-0 font-bold hover:text-dark hover:bg-blue-300">Batch 2019-2020</button>


                  </div>
                  <div className='flex lg:flex-row flex-col w-100 justify-center  gap-3 text-gray-600'>
                          <button className="btn bg-blue-700 text-light rounded-0 font-bold hover:text-dark hover:bg-blue-300 ">Batch 2020-2021</button>
                          <button className="btn bg-blue-700 text-light rounded-0 font-bold hover:text-dark hover:bg-blue-300">Batch 2021-2022</button>
                          <button className="btn bg-blue-700 text-light rounded-0 font-bold hover:text-dark hover:bg-blue-300">Batch 2022-2023</button>


                  </div>
                </div>
                <a href={placementPdf} className='btn mt-3 bg-red-700 text-light rounded-0 font-bold hover:text-dark hover:bg-blue-300' >View PDF</a>
       
        </div>
        <hr className='mt-3 container mb-3'/>
    </div>
  )
}

export default Placement