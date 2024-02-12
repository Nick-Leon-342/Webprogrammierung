

import { useNavigate } from "react-router-dom"





export default function Footer({ dark }) {

    const navigate = useNavigate()

    return (
        <div className='footer'>
			<div className={`footer-container ${dark ? 'dark' : ''}`}>
				<div className={`footer-element ${dark ? 'dark' : ''}`} onClick={() => navigate('/impressum', { replace: false })}>Impressum</div>
				<div className={`footer-element ${dark ? 'dark' : ''}`} onClick={() => navigate('/überuns', { replace: false })}>Über uns</div>
			</div>
        </div>
    )

}
