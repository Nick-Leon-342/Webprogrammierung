

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


export default function Impressum() {

    return (
		<>

			<Navbar/>

			<div className='site'>

				<div className='site-content impressum'>
					<h1>
						Impressum
					</h1>

					<p>
						Zum Sch'tis<br/><br/>

						Kekkusstraße 21<br/>
						00001 Wolkenhausen<br/>
						Deutschland<br/><br/>

						support@zum-schtis.com<br/>
						Tel. 0187 420 21 420<br/>

						Ust Nr. DE420 187049<br/><br/>

						Vertretungsberechtigter Vorstand: Maxelina Musterfrau

					</p>
				</div>

				<Footer/>

			</div>

		</>
    )

}
