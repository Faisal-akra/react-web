import watsapp from '../assets/footer/watsapp.png'
import github from '../assets/footer/github.png'
import linkdin from '../assets/footer/linkdin.png.png'
import email from '../assets/footer/email.png.png'

const Footer = () => {
  return(
    <div className="p-5 mt-20 mb-20">
      <div id='footer' className="flex justify-center gap-5  ">

        <a href="https://wa.me/03149061501">
        <img src={watsapp} alt="" />
        </a>
       
        <a href="https://github.com/Faisal-akra">
        <img src={github} alt="" />
        </a>
        
        <a href="https://www.linkedin.com/in/faisal-akram-7962a9257/">
        <img src={linkdin} alt="" />
        </a>
        <a href="mailto:zjan45097@gmail.com">
        <img src={email} alt="" />
        </a>

      
      </div>
    </div>
  )
}

export default Footer;