import React from 'react'
import { Link } from 'react-router-dom'

function Checkout() {
    return (
        <div className='pb-5 bg-body-secondary  d-flex flex-column justify-content-center pt-5 align-items-center '>
            <h1 className='text-2xl lg:text-4xl font-bold '>Check out This</h1>
            <p className='text-secondary lg:w-50 w-100 hidden lg:block text-center m-3'>
                Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.
            </p>
            <div className="container mt-4 lg:flex flex-col lg:flex-row justify-content-evenly">
                <Link to="/college" className="card  hover:bg-slate-300 lg:w-[400px] w-[350px] mb-4 lg:mb-0" >
                    <img className="card-img-top object-cover h-[350px]" src="https://yt3.googleusercontent.com/ytc/APkrFKbbH3rl6Y5QUAFC6wpe4iEev669pwyoArDSTbopiA=s900-c-k-c0x00ffffff-no-rj" alt="Card image"   />
                        <div className="card-body justify-content-center d-flex align-items-center">
                            <h5 className="card-title text-xl font-bold ">MGMs College of Engineering</h5>
                           
                        </div>
                </Link>

                <Link to="/campus" className="card hover:bg-slate-300 lg:w-[400px] w-[350px]  mb-4 lg:mb-0"  >
                    <img className="card-img-top h-[350px]" src="https://content3.jdmagicbox.com/comp/nanded/dc/9999p2462.2462.090902123344.n8q3dc/catalogue/mahatma-gandhi-mission-s-college-of-engineering-airport-road-anand-nagar-chowk-nanded-colleges-1lbtudt.jpg" alt="Card image"/>
                        <div className="card-body justify-content-center d-flex align-items-center">
                            <h5 className="card-title  text-xl font-bold">Campus</h5>
                           
                        </div>
                </Link>
                <Link to="/placement" className="card hover:bg-slate-300 lg:w-[400px] w-[350px]  mb-4 lg:mb-0"  >
                    <img className="card-img-top h-[350px]" src="https://content.jdmagicbox.com/comp/def_content/placement_services_for_employers/default-placement-services-for-employers-5.jpg" alt="Card image"  />
                        <div className="card-body justify-content-center d-flex align-items-center">
                            <h5 className="card-title  text-xl font-bold">Placements</h5>
                           
                        </div>
                </Link>
            </div>
        </div>
    )
}

export default Checkout
