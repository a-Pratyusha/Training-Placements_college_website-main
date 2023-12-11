import React from 'react'
import { Link } from 'react-router-dom'

function Main1() {
  return (
    <div className=' lg:p-5 p-3 d-flex mt-4 flex-column align-items-center ' style={{ backgroundColor: "whitesmoke" }}>
      <div className='d-flex flex-column fw-bolder justify-content-center align-items-center '  >
        <div className='flex items-center  justify-center  flex-col w-full lg:p-5 text-center '>

        <span className='text-dark mt-3 text-2xl lg:text-5xl hidden lg:block' >Empowering Futures, Transforming Lives</span>
        <span className='text-primary text-2xl lg:text-5xl lg:mt-3' > Our Training and Placement Department</span>
        </div>
      </div>
      <hr className='w-full mt-3'/>

      <div className="container  grid grid-cols-1 lg:grid-cols-2 mt-5">
        <div className=" ">
         
          <div className='flex items-center gap-3 justify-start'>
            <img src="http://www.mgmcen.ac.in/images/gallery/21082018134646-TPO.jpg"  className='shadow rounded-full w-[80px] lg:w-[90px] h-[80px] lg:h-[90px] object-cover ' alt="" />
            <div className='flex flex-col'>
              <span className='text-2xl font-bold'>Shivprasad Titre</span>
              <span className='text-sm text-grey-500'> Asst. Professior TPO Department </span>
            </div>
          </div>
            <p className='mt-4 text-justify fs-5   '>
            Assist students to develop and implement successful job search strategies.
Work with faculty members, department heads and administration to integrate career planning with academic curriculum.
Empower students with life-long, career decision-making skills.
Providing resources and activities to facilitate the career-planning process.
Act as an interface among students, alumni and the employment community.
Create awareness in the students regarding future career options. </p>
              <Link to="/about" className='text-primary fs-5'>read more</Link>
        </div>
        <div className=" flex justify-center ">
     
        <iframe className='shadow-lg mt-5 lg:mt-0 lg:w-[500px] lg:h-[300px] w-[600px] h-[200px]'  src="https://www.youtube.com/embed/hC9GpxRy9SE?si=0SItnzfwUqsIQ6Nz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

      </div>
    </div>
  )
}

export default Main1
