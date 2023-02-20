import {useState} from 'react'
import '../style/beforeEmail.css'

import ic_arrow from '../assets/images/ic_arrow.svg'

import Footer from '../components/Footer';


const BeforeEmail = () => {
    
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [tos, setTos] = useState(false);

    const handleSubmit = e => {
        
        e.preventDefault();
        setError("");
    
        if (!email) {
          setError("Email address is required");
          return;
        }
    
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          setError("Please provide a valid e-mail address");
          return;
        }
    
        if (email.endsWith(".co")) {
          setError("We are not accepting subscriptions from Colombia emails");
          return;
        }
    
        if (!tos) {
          setError("You must accept the terms and conditions");
          return;
        }
    
        console.log(`Email: ${email}`);
        window.location.assign('AfterSub')
    
        
      };
    return(
       
       <div>
            <div className='sub'>Subscribe to newsletter</div>
            <div className='disc'>Subscribe to our newsletter and get 10% discount on pineapple glasses.</div>
            
            <div className='sub-cont'>
                <div className='sub-area'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email"></label>
                            <input
                                className='input'
                                type="email"
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder='Type your email address here…'
                            />
                            
                            <div className='blue-line'></div>
                            
                            <button className='btn' type="submit">
                              <img  className='arrow' src={ic_arrow} alt='arrow'/> 
                            </button>
                        </div>
                    </form>
                </div>
            </div>


            {error && <div className='error'>{error}</div>} 
            <div className='tos'>
                <label className='tainer'>
                    <input
                        type="checkbox"
                        id="tos"
                        checked={tos}
                        onChange={() => setTos(!tos)}
                    />
                    <span className="mark"></span>
                </label>
          <label htmlFor="tos" className='agree-tos'>I agree to <span className='ub'><a href='#' className='link'>terms of service</a></span></label>
        </div>
        <Footer/>

        </div>
    )

}

export default BeforeEmail;