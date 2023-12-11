import React from 'react'


const tabledata = [
    {
        name:"Dr Geeta S Lathkar",
        image:"http://mgmcen.ac.in/resizeimage.aspx?file=90,100,images/department/faculty/Department_7-20212012115653.jpg",
        position:"Director",
        special:"Machine Design, Manufacturing",
        email:"director@mgmcen.ac.in"


    },
    {
        name:"R R Alurwad",
        image:"http://mgmcen.ac.in/resizeimage.aspx?file=90,100,images/department/faculty/Department_7-20212012121003.jpg",
        position:"( Dept Coordinator, Civil Engg )",
        special:"Structural Engineering",
        email:"alurwad_rr@mgmcen.ac.in"


    },
    {
        name:"C A Bandela",
        image:"http://mgmcen.ac.in/resizeimage.aspx?file=90,100,images/department/faculty/Department_7-20212012121312.png",
        position:"( Dept Coordinator, Mech Engg )",
        special:"Product Lifecycle Management Automobile Engineering Refrigeration & Air Conditioning Manufacturing",
        email:"bandela_cv@mgmcen.ac.in"


    },
    {
        name:"Dr Geeta S Lathkar",
        image:"http://mgmcen.ac.in/resizeimage.aspx?file=90,100,images/department/faculty/Department_7-20212012115653.jpg",
        position:"Director",
        special:"Machine Design, Manufacturing",
        email:"director@mgmcen.ac.in"


    },
    {
        name:"Dr Geeta S Lathkar",
        image:"http://mgmcen.ac.in/resizeimage.aspx?file=90,100,images/department/faculty/Department_7-20212012115653.jpg",
        position:"Director",
        special:"Machine Design, Manufacturing",
        email:"director@mgmcen.ac.in"


    },
    {
        name:"Dr Geeta S Lathkar",
        image:"http://mgmcen.ac.in/resizeimage.aspx?file=90,100,images/department/faculty/Department_7-20212012115653.jpg",
        position:"Director",
        special:"Machine Design, Manufacturing",
        email:"director@mgmcen.ac.in"


    },
    {
        name:"Dr Geeta S Lathkar",
        image:"http://mgmcen.ac.in/resizeimage.aspx?file=90,100,images/department/faculty/Department_7-20212012115653.jpg",
        position:"Director",
        special:"Machine Design, Manufacturing",
        email:"director@mgmcen.ac.in"


    },
    {
        name:"Dr Geeta S Lathkar",
        image:"http://mgmcen.ac.in/resizeimage.aspx?file=90,100,images/department/faculty/Department_7-20212012115653.jpg",
        position:"Director",
        special:"Machine Design, Manufacturing",
        email:"director@mgmcen.ac.in"


    },

]


function FacultyProfile() {
  return (
    <div>
        <div className="table-responsive w-[800px] lg:w-full">
      <table className="table  text-center table-striped  table-hover w-full overflow-scroll">
        <thead>
          <tr className='text-lg lg:text-2xl'>
            <th scope="col" >Faculty Name</th>
            <th scope="col">Specialization</th>
            <th scope="col">Email</th>
            
          </tr>
        </thead>
        <tbody>
          {tabledata.map((item) => (
            <tr className="text-lg lg:text-2xl" >
             
              <td className="p-4">
                <div className="p-4 flex flex-column justify-center items-center">
                    <img src={item.image} alt="" />
                    <span className='font-bold'>
                    {item.name}
                    </span>
                    <span>
                    {item.position}
                    </span>
                </div>
              </td>
              <td className="p-4 ">
                <div className='mt-5 pt-4 flex justify-center items-center'>

                {item.special}
                </div>
                </td>
              <td className="p-4">
              <div className='mt-5 pt-4 flex justify-center items-center'>

                {item.email}
            </div>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default FacultyProfile