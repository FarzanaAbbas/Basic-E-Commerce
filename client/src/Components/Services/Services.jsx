import { AiOutlineMail } from "react-icons/ai"; 
import { AiOutlinePhone } from "react-icons/ai"; 
import { BsFillTruckFrontFill } from "react-icons/bs"; 
import './Services.css'


const Services = () => {
  return (
    <div> 
      <h1 className="heading-tags">Our Services</h1>
      <div className="services-container">
      <div>
        <BsFillTruckFrontFill className="icons" size={30}/>
        <h3 className="services-tags">Free Delivery upto 5000 Rs</h3>
      </div>
      <div>
        <AiOutlinePhone className="icons"  size={40} />
        <h3 className="services-tags">24/7 Contact Services</h3>
      </div>
      <div>
        <AiOutlineMail className="icons"  size={40} />
        <h3 className="services-tags">24/7 Onlive Services</h3>
      </div>

      </div>
    </div>
  )
}

export default Services
