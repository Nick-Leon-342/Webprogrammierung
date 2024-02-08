

import { useNavigate } from "react-router-dom"





export default function Footer() {

    const navigate = useNavigate()

    return (
        <div className='footer'>
            <div className='footer-element' onClick={() => navigate('/impressum', { replace: false })}>Impressum</div>
            <div className='footer-element' onClick={() => navigate('/überuns', { replace: false })}>Über uns</div>
        </div>
    )

}
