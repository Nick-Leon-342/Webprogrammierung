

import { useState } from "react"
import Navbar from "../components/Navbar"


export default function Reservierung() {

	const [ firstName, setFirstName ] = useState()
	const [ lastName, setLastName ] = useState()
	const [ email, setEmail ] = useState()
	const [ phone, setPhone ] = useState()

	const [ numberOfPeople, setNumberOfPeople ] = useState()
	const [ namesOfPeople, setNamesOfPeople ] = useState([])
	const [ additionalInformation, setAdditionalInformation ] = useState()




	
    return (
        <>
            <Navbar/>

			<div className='site'>



			</div>
            
        </>
    )

}
