import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import Contactcard from './Contactcard';

const facultyData = [
    {
        facultyName: "Bhupendra jogi",
        description: "Professor of Computer Science",
        email: "john.doe@example.com",
        phoneNumber: "+1234567890",
        image: "https://storiespub.com/wp-content/uploads/2023/02/Luffy-22-100-790x1024.webp",
    },
    {
        facultyName: "Bhupendra jogi",
        description: "Assistant Professor of Mathematics",
        email: "jane.smith@example.com",
        phoneNumber: "+9876543210",
        image: "https://storiespub.com/wp-content/uploads/2023/02/Luffy-22-100-790x1024.webp",
    },
    {
        facultyName: "Bhupendra jogi",
        description: "Associate Professor of Physics",
        email: "bob.johnson@example.com",
        phoneNumber: "+1122334455",
        image: "https://storiespub.com/wp-content/uploads/2023/02/Luffy-22-100-790x1024.webp",
    },
];


function Contact() {
    const form = useRef();
    const navigate = useNavigate();

    const sendEmail = async (e) => {
        e.preventDefault();

        await emailjs.sendForm('service_wad1uqb', 'template_sxovywc', form.current, 'zZFALP4bkPVP94DTX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        navigate('/');
    };
    return (
        <>
            <div className='h-[70vh] ' style={{ backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundImage: "url('https://i.ytimg.com/vi/WOY1fySdVZo/maxresdefault.jpg')" }}>
                <div className='w-100 h-100 bg-dark bg-opacity-50 flex'>
                    <div className="container lg:p-[50px] p-[10px] flex justify-center items-center ">
                        <form ref={form} onSubmit={sendEmail} className='bg-light bg-opacity-50 lg:w-[800px]  p-[30px]  rounded-3 shadow'>
                            <input type="email" name="email" placeholder='Enter Your Email Address' id="" className="form-control " required />
                            <textarea name="message" placeholder='Enter Your Message' className='form-control mt-3' id="" cols="10" rows="5" required></textarea>

                            <button type='submit' className="btn bg-primary  btn-primary rounded-0 shadow font-bold btn-lg mt-4">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className=' p-4 pb-5' style={{backgroundImage:"url('https://i.gifer.com/Tf2a.gif')"}}>
                <div className="flex justify-center items-center mt-5 bg-transparent ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {facultyData.map((faculty, index) => (
                            <Contactcard key={index} {...faculty} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
