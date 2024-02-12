

import { useNavigate } from "react-router-dom"


export default function Navbar({ dark }) {

    const navigate = useNavigate()

    return (
        <div className='navbar'>
            <div className='navbar-elements'>
                <div className={`navbar-element ${dark ? 'dark' : ''}`} onClick={() => navigate('/', { replace: false })}><span>Home</span></div>
                <div className={`navbar-element ${dark ? 'dark' : ''}`} onClick={() => navigate('/lieferservice', { replace: false })}><span>Lieferservice</span></div>
                <div className={`navbar-element ${dark ? 'dark' : ''}`} onClick={() => navigate('/reservierung', { replace: false })}><span>Reservierung</span></div>
                <div className={`navbar-element ${dark ? 'dark' : ''}`} onClick={() => navigate('/speisekarte', { replace: false })}><span>Menü</span></div>
                <div className={`navbar-element ${dark ? 'dark' : ''}`} onClick={() => navigate('/veranstaltungen', { replace: false })}><span>Veranstaltungen</span></div>
            </div>
        </div>
    )

}
