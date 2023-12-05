import React from 'react'

function College() {
    return (
        <div>
            <div className="container p-4">
                <h1 className="text-3xl hidden lg:block font-bold text-decoration-underline m-4">MGMs College Of  Engineering  Nanded</h1>
                <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 m-2 lg:m-4">
                    <div className="container  lg:pb-0 pb-4 flex justify-center items-center">
                        <img src="https://i.ytimg.com/vi/a0zP8MWIF6I/maxresdefault.jpg" alt="" className='object-fit  lg:w-[600px] rounded-3 shadow' />
                    </div>
                    <div className='flex justify-center items-center p-2 lg:p-4'>
                        <p className='text-lg lg:text-3xl '>
                         <span className='text-primary font-bold'>Vision</span> -
                            "To ensure sustainable human development which encourages self reliant and self content society and to promote activities related to community services and social welfare."
                        </p>
                    </div>
                </div>
                <div className="container lg:p-5 p-2">
                    <p className='text-2xl text-justify'>
                    Since its inception in 1982 Mahatma Gandhi Mission has been developed now in a chain of more than 50 educational organizations, health care centers and social welfare units functioning under its umbrella at 5 centers wiz. Aurangabad, Nanded, Navi Mumbai, Noida and Parbhani. It has been a quest of 25 years MGM proves the deep faith of its management in the power of education that leads the society towards prosperity of the nation. Mahatma Gandhi Mission has endeavored providing value based education in all streams of knowledge like Engineering, Medicine, Dental, Nursing, Management, Law, Mass communication and Journalism, Library science, Computer Science, Biotechnology, Bioinformatics, Fine Arts, Indian classical dance with state of art technology and infrastructure.
                    </p>
                </div>

                <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 m-2 lg:m-4">
                    
                    <div className='flex justify-center items-center p-2 lg:p-4'>
                        <p className='text-lg lg:text-3xl '>
                         <span className='text-primary font-bold'>Mission</span> -
                            "To impart state of art education and technical expertise to students and give necessary training to teachers to create self reliant society for future."
                        </p>
                    </div>
                    <div className="container  lg:pb-0 pb-4  justify-center items-center hidden lg:flex">
                        <img src="https://pbs.twimg.com/media/EC-z-mgW4AIMA2r?format=jpg&name=large" alt="" className='object-fit  lg:w-[600px] rounded-3 shadow' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default College
