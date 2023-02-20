import logo from '../assets/images/Union.png'
import comp_name from '../assets/images/pineapple.png'
import '../style/navBar.css'


export default function NavBar(){
    return(
        <>
        <div className='nav-bar'>
            <img src={logo} className='logo'alt='logo'/>
            <img src={comp_name} className='comp-name' alt='cname'/>


            <ul>
                <li className='aout'>About</li>
                <li className='how'>How it works</li>
                <li className='contact'>Contact</li>
            </ul>
        </div>
        </>
    )

}