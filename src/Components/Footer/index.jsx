import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import './style.css';



const Footer = () => {
    return (
        <>
            <div className='Footer'>
                <div>
                    <p>Bablu Mahto</p>
                    <p>Aldus PageMaker including versions of Loream ipsum</p>
                    <p>@ 2023 Bablu Mahto All Rights Reserved</p>
                </div>
                <div className='second-footer'>
                    <p>Subscribe to get important updates</p>
                    <div>
                        <input type="text" placeholder='YOUR E-MAIL' />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
                <div>
                    <p>Follow Us</p>
                    <a href=""><FaInstagram /></a>
                    <a href=""><FaFacebookF /></a>
                    <a href=""><FaYoutube /></a>
                </div>
                <div>
                   <p>Call Us</p>
                   <p>7004XXXXXX</p>
                </div>
            </div>
        </>
    )
}
export default Footer;