

import {Link} from 'react-router-dom'
import './Footer.css'

const Footer =() =>{
    return(
        <div className='footer-card'>
            <div>
            <a className='a-link' href='/facebook.com'>Facebook</a>
            <a className='a-link' href='/twitter.com'>Twitter</a>
            <a className='a-link' href='Instragram.compare'>Instragram</a>
            <a className='a-link' href='/youtube.com'>Youtube</a>
            </div>


            <div>
                <Link  className='a-link' to='/about'>About</Link>
                <Link className='a-link' to='/contact'>Contact</Link>
                <Link className='a-link' to='/home'>Home</Link>
            </div>

        </div>
    )

};


export default Footer;