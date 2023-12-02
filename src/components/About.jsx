import React from 'react';
import {Instagram , Facebook , Twitter} from "@mui/icons-material"
const aboutData = [
  {
    name: "Shivprasad Titre",
    description: "Asst. Professor, TPO Department",
    image: "https://www.roadtolaughtale.com/wp-content/uploads/2023/03/why-is-luffy-so-strong-min.jpg",
    quote:"inventore maiores quia accusamus dicta ipsum, sapiente quos architecto quas corporis totam tenetur quasi incidunt expedita reiciendis similique eum. Cumque.",
    paragraph:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perspiciatis ea pariatur nam dolor quisquam, laboriosam iste odit possimus illo inventore recusandae sequi voluptatem dolore vero nostrum qui dignissimos laborum numquam delectus. Magni consectetur consequuntur sapiente soluta quibusdam, distinctio ducimus libero, odit repudiandae quisquam quo nobis. Labore error reiciendis tempora ullam earum voluptatibus vitae minus dolores eveniet blanditiis vero voluptatem ducimus qui magnam dolore modi natus, dignissimos atque iusto consectetur quam laborum nisi eum ea? Repellat ex enim iure, veritatis inventore maiores quia accusamus dicta ipsum, sapiente quos architecto quas corporis totam tenetur quasi incidunt expedita reiciendis similique eum. Cumque.`
  },
  {
    name: "Ashutosh Kumar",
    description: "Asst. Professor, TPO Department",
    quote:"inventore maiores quia accusamus dicta ipsum, sapiente quos architecto quas corporis totam tenetur quasi incidunt expedita reiciendis similique eum. Cumque.",
    image: "https://cdnb.artstation.com/p/assets/images/images/026/142/657/large/sleepy-jhin-roronoa-zoro-portrait.jpg?1587999560",
    paragraph:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perspiciatis ea pariatur nam dolor quisquam, laboriosam iste odit possimus illo inventore recusandae sequi voluptatem dolore vero nostrum qui dignissimos laborum numquam delectus. Magni consectetur consequuntur sapiente soluta quibusdam, distinctio ducimus libero, odit repudiandae quisquam quo nobis. Labore error reiciendis tempora ullam earum voluptatibus vitae minus dolores eveniet blanditiis vero voluptatem ducimus qui magnam dolore modi natus, dignissimos atque iusto consectetur quam laborum nisi eum ea? Repellat ex enim iure, veritatis inventore maiores quia accusamus dicta ipsum, sapiente quos architecto quas corporis totam tenetur quasi incidunt expedita reiciendis similique eum. Cumque.`
  }
]

function About() {
  return (
    <div className='container-fluid mt-5 flex flex-col gap-5'>

    {aboutData.map((data, index) => (
      
      <div className="container-fluid w-full lg:w-2/3 rounded-2xl shadow-xl p-5" key={index}>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:p-3 p-2">
          <div className='flex flex-col justify-center items-center lg:items-start'>
            <img
              src={data.image}
              className='w-full h-[300px] position-center object-cover rounded-xl  shadow'
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

    </div>
  );
}

export default About;
