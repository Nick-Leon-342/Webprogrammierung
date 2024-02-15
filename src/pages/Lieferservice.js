
import './css/Lieferservice.css'


import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { v4 } from 'uuid'


export default function Lieferservice() {
    
	const [ firstName, setFirstName ] = useState()
	const [ lastName, setLastName ] = useState()
	const [ phone, setPhone ] = useState()

	const [ street, setStreet ] = useState()
	const [ houseNumber, setHouseNumber ] = useState()
	const [ postcode, setPostcode ] = useState()
	const [ city, setCity ] = useState()

	const [ list_orders, setList_orders ] = useState([])




	const add = () => {
		const tmp = [...list_orders]
		tmp.push({ ID: v4, OrderNR: undefined, AdditionalInfo: '' })
		setList_orders(tmp)
	}

	const remove = (index) => {
		const tmp = [...list_orders]
		tmp.splice(index, 1)
		setList_orders(tmp)
	}

	const handleChange = (v, id) => {
		const tmp = [...list_orders]
		for(const e of tmp) {
			if(e.ID === id) {
				e.AdditionalInfo = v
				break
			}
		}
		setList_orders(tmp)
	}

	const handleSend = () => {

		//Eingaben überprüfen
		if(!firstName || !lastName || !phone || !street || !houseNumber || !postcode || !city || list_orders.length <= 0) {
			window.alert('Bitte alles ausfüllen!')
		}

		for(const e of list_orders) {
			if(!e.OrderNR) {
				return window.alert('Bitte alle Nummern der Bestellung angeben!')
			}
		}

		//JSON für das Backend erstellen
		const json = {
			firstName,
			lastName,
			phone,
			street, 
			houseNumber, 
			postcode, 
			city, 
			list_orders
		}






		//



	}




    return (
        <>
		
			<Navbar/>

			<div className='site'>

				<div className='site-content' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>


					<div className='lieferservice'>

						<h1>Lieferservice</h1>

						<div className='lieferservice-name'>
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
							<input placeholder='Postleitzahl' style={{ width: '105px' }} value={postcode} onChange={(e) => setPostcode(e.target.value)}/>
							<input placeholder='Ort' style={{ width: '100%' }} value={city} onChange={(e) => setCity(e.target.value)}/>
						</div>

						<br/>

						<div className='add-container'>
							<div className='add-button'>
								<svg fill='var(--navbar-color)' onClick={add} height='30' viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
							</div>
						</div>

						<ul className='list_orders'>
							{list_orders.map((le, index) => (
								<li className='list_orders-element' key={index}>
									<div onClick={() => remove(index)}>-</div>
									<input type='number' min={0} placeholder='Nr' value={le.OrderNR} onChange={(e) => le.OrderNR = e.target.value}/>
									<input type='text' placeholder='Bemerkungen' value={le.AdditionalInfo} onChange={(e) => handleChange(e.target.value, le.ID)}/>
								</li>
							))}
						</ul>

						<button className='button' onClick={handleChange}>Bestellung abschicken</button>

					</div>

				</div>

				<Footer/>

			</div>

        </>
    )

}
