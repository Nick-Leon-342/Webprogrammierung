

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Karaoke from '../pics/Karaoke.jpg'
import DJ from '../pics/DJ.jpg'


export default function Veranstaltungen() {
    
    return (
        <>
            <Navbar/>

            <div className='site'>
                <div className='carousel'>
                    <svg className='carousel-button' height="24" viewBox="0 -960 960 960" width="24"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
                    <svg className='carousel-button' height="24" viewBox="0 -960 960 960" width="24"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                    <ul>
                        <li className='slide' data-active>
                            <img src={Karaoke} alt='karaoke' width='100%'/>
                        </li>
                        <li className='slide'>
                            <img src={DJ} alt='dj' width='100%'/>
                        </li>
                    </ul>
                </div>
            </div>

            <Footer/>
        </>
    )

}
