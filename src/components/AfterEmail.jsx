import cup from '../assets/images/ic_success.svg'
import SocialIcons from "./SocialIcons";
import '../style/AfterEmail.css'
import '../style/footer.css'
export default function AfterEmail(){
    return(
       
       <>
        <img src={cup} className='cup'/>
        
        <div>
            <div className='sub2'>Thanks for subscribing!</div>
            <div className='disc2'>You have successfully subscribed to our email listing. Check your email for the discount code.</div>

            <div className='line-after'></div>
            <div className="social-icons2">
                <SocialIcons/>
            </div>
        </div>
       </>
    )

}