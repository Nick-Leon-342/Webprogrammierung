

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'
import Impressum from './pages/Impressum'
import Lieferservice from './pages/Lieferservice'
import Reservierung from './pages/Reservierung' 
import Speisekarte from './pages/Speisekarte'
import ÜberUns from './pages/ÜberUns'
import Veranstaltungen from './pages/Veranstaltungen'


export default function App() {

	return (
		// <div style={{ overflow: 'hidden', scrollbarGutter: 'stable' }}>
		// </div>
		<Router>
			<Routes>

				<Route path='/' element={<Homepage />} />
				<Route path='/homepage' element={<Homepage />} />

				<Route path='/impressum' element={<Impressum />} />
				<Route path='/lieferservice' element={<Lieferservice />} />
				<Route path='/reservierung' element={<Reservierung />} />
				<Route path='/speisekarte' element={<Speisekarte />} />
				<Route path='/überuns' element={<ÜberUns />} />
				<Route path='/veranstaltungen' element={<Veranstaltungen />} />

			</Routes>
		</Router>
	)

}
