

import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import FancyInput from '../components/FancyInput'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import axios from '../api/axios'


export default function Reservierung() {

	const [ firstName, setFirstName ] = useState()
	const [ lastName, setLastName ] = useState()
	const [ email, setEmail ] = useState()
	const [ phone, setPhone ] = useState()

	const [ date, setDate ] = useState()
	const [ numberOfPeople, setNumberOfPeople ] = useState()




	const send = () => {

		//Eingaben prüfen
		if(!firstName || !lastName || !email || !phone || !date || !numberOfPeople) {
			return window.alert('Bitte alles ausfüllen!')
		}

		const json = {
			firstName,
			lastName,
			email,
			phone,
			date,
			numberOfPeople
		}

		//Daten an den Server senden
		axios.post('/reservierung', json).then((res) => {
			
			window.alert('Die Anfrage für die Reservierung wurde erfolgreich eingereicht!')

			//Eingaben löschen
			setFirstName('')
			setLastName('')
			setEmail('')
			setPhone('')
			setDate()
			setNumberOfPeople('')

		}).catch((err) => {
			console.log(err)
			window.alert('Es ist ein Fehler aufgetreten.')
		})

	}





    return (
        <>
            <Navbar/>

			<div className='site'>

				<div className='site-content' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>


					<div style={{ display: 'flex', flexDirection: 'column' }}>

						<h1>Reservierung</h1>

						<FancyInput
							id='FirstName'
							type='text'
							text='Vorname'
							value={firstName}
							setValue={setFirstName}
							isRequired={true}
							
						/>
						
						<FancyInput
							id='LastName'
							type='text'
							text='Nachname'
							value={lastName}
							setValue={setLastName}
							isRequired={true}
						/>

						<FancyInput
							id='EMail'
							type='text'
							text='E-Mail'
							value={email}
							setValue={setEmail}
							isRequired={true}
						/>

						<FancyInput
							id='Phone'
							type='number'
							text='Telefonnummer'
							value={phone}
							setValue={setPhone}
							isRequired={true}
						/>

						<div 
							style={{ 
								display: 'flex', 
								justifyContent: 'space-between',
								padding: '10px 1px 15px 1px' 
							}}
						>
							<label 
								style={{ 
									fontSize: '20px', 
									color: 'var(--navbar-color)' 
									}}
								>Datum:</label>
							<DatePicker selected={date} onChange={(date) => setDate(date)}/>
						</div>

						<div 
							style={{ 
								display: 'flex', 
								justifyContent: 'space-between',
								padding: '0px 1px 10px 1px' 
							}}
						>
							<label 
								style={{ 
									fontSize: '20px', 
									color: 'var(--navbar-color)' 
									}}
								>Anzahl an Personen:</label>
							<input 
								type='number' 
								value={numberOfPeople}
								onChange={(e) => setNumberOfPeople(e.target.value)}
								min={1}
								style={{ 
									outline: 'none', 
									width: '50px', 
									color: 'var(--navbar-color)' 
								}}
							/>
						</div>

						<button onClick={send} className='button'>Reservierung abschicken</button>

					</div>

				</div>

				<Footer/>

			</div>
            
        </>
    )

}
