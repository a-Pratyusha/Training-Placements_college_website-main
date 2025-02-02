import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Footer() {
  return (
    
    <footer className="text-center text-lg-start bg-light text-muted">
     
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
       
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
       
        <div>
          <a href="" className="me-4 text-reset">
            <FacebookIcon/>
          </a>
          <a href="" className="me-4 text-reset">
            <TwitterIcon/>
          </a>
          <a href="" className="me-4 text-reset">
            <InstagramIcon/>
          </a>
          <a href="" className="me-4 text-reset">
            <WhatsAppIcon/>
          </a>
         
        </div>
       
      </section>
     
      <section className="">
        <div className="container text-center text-md-start mt-5">
         
          <div className="row mt-3">
          
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Placement Cell , MGMs COE
              </h6>
              <p>
              MGM Institutions have the privilege of the high caliber & long standing experience of all our trustees in the field of education and health services.
              </p>
            </div>
           
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              
              <h6 className="text-uppercase fw-bold mb-4">
                Address
              </h6>
              <p>
                <a href="#!" className="text-reset">Mahatma Gandhi Missions College of Engineering Nanded</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Airport Road,</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Nanded.</a>
              </p>
              <p>
                <a href="#!" className="text-reset">PIN:431605</a>
              </p>
            </div>
           
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
             
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">Report us</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Imergency Contact</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Administration</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Help</a>
              </p>
            </div>
          
    
          
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
             
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> Placement Cell</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
               tpo@mgmcen.ac.in
              </p>
              <p><i className="fas fa-phone me-3"></i> + 91 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 91 234 567 89</p>
            </div>
            
          </div>
          
        </div>
      </section>
      
    
      
      <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="">MGMCEN TPC </a>
      </div>
      
    </footer>
    
  )
}

export default Footer
