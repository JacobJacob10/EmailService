import '../style/socialIcons.css'
import {FaTwitter, FaYoutube, FaInstagram, FaFacebookF } from  'react-icons/fa'

export default function SocialIcons(){
    return(
        <>
        <button className='tw'>
             <a href='#'>
             <FaTwitter className='icon' />  
             </a>
             </button>
             <button className='yt'>
             <a href='#'>
             <FaYoutube className='icon' />  
             </a>
             </button>
             <button className='insta'>
             <a href='#'>
             <FaInstagram className='icon' />  
             </a>
             </button>
             <button className='fb'>
             <a href=''>
             <FaFacebookF className='icon' />  
             </a>
             </button>
       </>
    )
}