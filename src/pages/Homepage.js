


import '../App.css'

import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import HomepageBackground from '../pics/Homepage-background.jpg'


export default function Homepage() {

	const navigate = useNavigate()




	return (
		<>

			<Navbar dark={true}/>
			
			<div className='site' style={{ backgroundImage: `url(${HomepageBackground})`, backgroundSize: 'cover' }}>

				<div className='site-content'>

					<h2 className='welcome'>Willkommen</h2>
					<h1 className='zumschtis'>Zum Sch'tis</h1>

					<div className='columns'>

						<div className='column'>
							<h2>Hunger?</h2>
							<p>Wenn es kaum noch aushalten kannst<br/>und unbedingt JETZT was zu essen brauchst,<br/>schau bei unserem Lieferservice vorbei!</p>
							<button onClick={() => navigate('/lieferservice', { replace: false })} className='visit-button'>{'>'} Lieferservice</button>
						</div>

						<div className='column'>
							<h2>Sehnsucht?</h2>
							<p>Du hast uns zu lange nicht mehr gesehen<br/>und willst das demnächst nachholen?<br/>Lass dir einen Tisch reservieren und komm vorbei!</p>
							<button onClick={() => navigate('/reservierung', { replace: false })} className='visit-button'>{'>'} Reservierung</button>
						</div>

						<div className='column'>
							<h2>Restaurant?</h2>
							<p>Du willst nicht nur was essen,<br/>sondern auch mal in deinem Restaurant aufdrehen?<br/>Besuch unsere Veranstaltungen!</p>
							<button onClick={() => navigate('/veranstaltungen', { replace: false })} className='visit-button'>{'>'} Veranstaltungen</button>
						</div>

					</div>

				</div>

				<Footer />
			</div>
		</>
	)
}
