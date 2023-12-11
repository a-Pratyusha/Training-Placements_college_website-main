import React from 'react';
import {Instagram , Facebook , Twitter} from "@mui/icons-material"
import FacultyProfile from './FacultyProfile';
import titresir from '../assets/titresir.png' 
const aboutData = [
  {
    name: "Mr. Shivprasad Titare",
    description: "Asst. Professor and TPO",
    image: "http://www.mgmcen.ac.in/images/gallery/21082018134646-TPO.jpg",
    quote:"“Education is the key that unlocks the golden door to freedom.” ",
    paragraph:`Training & Placement Cell has an important role to play in a student’s future and is an indispensable pillar of the Institute. This cell continuously strives to help students in pursuing their career goals by acquiring employment-seeking skills and ultimately to attain desired employment. This is accomplished through building a strong partnership amongst students, alumni, faculty-members and industries.
    MGM’s COE follows centralized placement activity which gives each branch equal opportunity to grow for sustained excellence in career through training & placement. Towards this, a Training and Placement Cell has been established with the following major objectives in order to assist students to develop their academic and career interests, and help them in achieving their short-term and long-term goals through individual counseling and group discussion.
    `
  },
  
]

function About() {
  return (
    <div className='container-fluid mt-5 flex flex-col gap-5'>

      <div className="container text-3xl lg:text-5xl text-center font-bold">
          Training and Placement Officer
      </div>

    {aboutData.map((data, index) => (
      
      <div className="container-fluid w-full lg:w-2/3 rounded-2xl shadow-xl p-5" key={index}>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:p-3 p-2">
          <div className='flex flex-col justify-center items-center lg:items-start'>
            <img
              src={data.image}
              className='w-full h-[300px] lg:h-[400px] position-center object-cover rounded-xl  shadow'
              alt="Shivprasad Titre"
            />
            <div className='flex flex-col mt-3 text-center lg:text-left'>
              <span className='text-2xl lg:text-3xl font-bold'>{data.name}</span>
              <span className='text-sm text-gray-500'>{data.description}</span>
            </div>
          </div>
          <div className='flex-col justify-center hidden lg:flex p-5'>
            <p className='text-2xl lg:text-4xl font-serif text-gray-700 w-full '>
              {data.quote}
            </p>
            <div className="flex  text-primary mt-3 lg:mt-4 text-xl">
            <a href="#" className="mr-4">
              <Twitter />
            </a>
            <a href="#" className="mr-4">
              <Facebook />
            </a>
            <a href="#">
              <Instagram />
            </a>
          </div>
          </div>
        </div>
        <div className='lg:p-3 p-1'>
          <p className='lg:text-xl text-lg text-justify'>
            {data.paragraph}
          </p>
        </div>
      </div>
    ))}

        <div className="container text-5xl text-center font-bold hidden lg:block">
          Faculty Profile
      </div>
      <div className="container overflow-x-scroll hidden lg:block">
      <FacultyProfile/>
      </div>

    </div>
  );
}

export default About;
