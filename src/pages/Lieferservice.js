

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'


export default function Lieferservice() {
    
	const [ firstName, setFirstName ] = useState()
	const [ lastName, setLastName ] = useState()
	const [ phone, setPhone ] = useState()

	const [ street, setStreet ] = useState()
	const [ houseNumber, setHouseNumber ] = useState()
	const [ postcode, setPostcode ] = useState()
	const [ city, setCity ] = useState()





    return (
        <>
		
			<Navbar/>

			<div className='site'>

				<div className='site-content' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>


					<div style={{ display: 'flex', flexDirection: 'column' }}>

						<h2>Lieferservice</h2>

						<div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
							<input placeholder='Vorname' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
							<input placeholder='Nachname' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
						</div>

						<div className='lieferservice-container'>
							<input type='number' placeholder='Telefonnummer' style={{ width: '100%' }} value={phone} onChange={(e) => setPhone(e.target.value)}/>
						</div>
						
						<br/>

						<div className='lieferservice-container'>
							<input placeholder='Straße' style={{ width: '100%' }} value={street} onChange={(e) => setStreet(e.target.value)}/>
							<input type='number' placeholder='Nr' style={{ width: '50px' }} value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)}/>
						</div>

						<div className='lieferservice-container'>
							<input placeholder='Postleitzahl' style={{ width: '75px' }} value={postcode} onChange={(e) => setPostcode(e.target.value)}/>
							<input placeholder='Ort' style={{ width: '100%' }} value={city} onChange={(e) => setCity(e.target.value)}/>
						</div>

						<br/>

						<div className='add-container'>
							<div className='add-button'>
								<svg fill='var(--navbar-color)' height='20' viewBox="0 -960 960 960" width='20'><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
							</div>
						</div>

						<ul>
							<li>

							</li>
						</ul>

						<button className='button'>Bestellung abschicken</button>

					</div>

				</div>

				<Footer/>

			</div>

        </>
    )

}
