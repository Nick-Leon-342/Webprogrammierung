

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Karaoke from '../pics/Karaoke.jpg'
import DJ from '../pics/DJ.jpg'
import { useState } from 'react'


export default function Veranstaltungen() {

	//Zwei Dummy-Veranstaltungen
	//Könnten auch vom Server übertragen werden
	const list_slide = [
		{
			Image: <img src={Karaoke} alt='karaoke' width='100%'/>,
			Text: 
				<>
					<h1>Karaoke-Abend</h1>
					<p>Macht euch bereit für eine unvergessliche Nacht voller Musik, Spaß und kulinarischer Genüsse!<br/>
						Der "Zum Sch'tis" lädt euch herzlich zu unserem exklusiven Karaoke-Abend ein.</p>
					<h3>Wann? Jeden ersten Freitag des Monats!</h3>
					<h3>Höhepunkte des Abends:</h3>
					<ul>
						<li><strong>Köstliche Spezialitäten:</strong> Genießt während eurer Gesangseinlagen unsere exquisiten Gerichte und erfreut eure Gaumen mit den Aromen der französischen Küche.</li>
						<li><strong>Umfangreiche Getränkeauswahl:</strong> Unsere Barkeeper stehen bereit, um euch mit erfrischenden Cocktails und exzellenten Weinen zu verwöhnen.</li>
						<li><strong>Breite Songauswahl:</strong> Egal, ob Pop, Rock, Schlager oder Klassiker, wählt eure Lieblingssongs aus unserer umfangreichen Karaoke-Liste.</li>
					</ul>
					<p>Wir ermutigen alle, vom Gelegenheitssänger bis zum Dusch-Rockstar, die Bühne zu betreten und euer Talent zu zeigen. 
						Die besten Auftritte werden belohnt, also lasst eure Stimmen erklingen und habt eine großartige Zeit mit Freunden, Familie und unserer gastfreundlichen Gemeinschaft.</p>
					<p>Sichert euch eure Plätze frühzeitig und erlebt einen Abend voller Musik, Lachen und unvergesslicher kulinarischer Erlebnisse.</p>
					<p>Das "Zum Sch'tis" Team freut sich darauf, mit euch gemeinsam eine Nacht der Freude, des Gesangs und des guten Essens zu verbringen!</p>
					<p><strong>À votre santé!</strong></p>
				</>
		},
		{
			Image: <img src={DJ} alt='dj' width='100%'/>,
			Text: 
				<>
					<h1>"Gourmet Grooves" Ein Exklusiver DJ-Abend</h1>
					<p>Herzlich willkommen zu einer einzigartigen Verschmelzung von Gaumenfreuden und exquisiten Klängen!<br/>
						Das "Zum Sch'tis" präsentiert stolz den "Gourmet Grooves" DJ-Abend, bei dem kulinarische Köstlichkeiten auf mitreißende Beats treffen.</p>
					<h3>Wann? Jeden zweiten Freitag des Monats!</h3>
					<h3>Höhepunkte des Abends:</h3>
					<ul>
						<li><strong>Live-DJ-Performance:</strong> Genießt eine besondere musikalische Begleitung zu eurem kulinarischen Erlebnis, während unser talentierter DJ die perfekte Melodie für jede Geschmacksnote findet.</li>
						<li><strong>Spezialitäten des Hauses:</strong> Lasst euch von unserer exquisiten Speisekarte verführen, die mit sorgfältig ausgewählten Gerichten und erlesenen Zutaten für einen wahren Gaumenschmaus sorgt.</li>
						<li><strong>Elegante Atmosphäre:</strong> Taucht ein in die raffinierte und dennoch entspannte Atmosphäre unseres Restaurants, während die Klänge die Sinne beleben.</li>
						<li><strong>Weinbegleitung:</strong> Unsere Sommeliers haben die perfekten Weine ausgewählt, um eure Gourmet-Erfahrung zu vervollkommnen.</li>
					</ul>
					<p>Wir laden alle Feinschmecker und Musikliebhaber herzlich ein, sich uns anzuschließen und einen unvergesslichen Abend voller Genuss und Klänge zu erleben. 
						Reserviert eure Plätze im Voraus, um sicherzustellen, dass ihr Teil dieses exklusiven "Gourmet Grooves" Abends werdet.</p>
					<p>Das "Zum Sch'tis" Team freut sich darauf, mit euch gemeinsam einen Abend voller kulinarischer und musikalischer Höhepunkte zu teilen!</p>
					<p><strong>Lasst uns die Sinne beleben und die Nacht zu einem Fest der Sinne machen!</strong></p>
				</>
		}
	]

	//Welche Veranstaltung angezeigt werden soll
	const [ currentSlide, setCurrentSlide ] = useState(0)
    



	
    return (
		<>
		
			<Navbar dark={true}/>
			
			<div className='site' style={{ backgroundColor: 'black' }}>

				<div className='site-content'>
					<div className='carousel'>
						<div className='carousel-button-container prev' onClick={() => setCurrentSlide((currentSlide + list_slide.length - 1) % list_slide.length)}><svg className='carousel-button prev' height="24" viewBox="0 -960 960 960" width="24"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg></div>
						<div className='carousel-button-container next' onClick={() => setCurrentSlide((currentSlide + 1) % list_slide.length)}><svg className='carousel-button next' height="24" viewBox="0 -960 960 960" width="24"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></div>
						<div className='slide'>
							{list_slide[currentSlide].Image}
						</div>
					</div>

					<p className='events-text'>
						{list_slide[currentSlide].Text}
					</p>
				</div>

				<Footer dark={true}/>

			</div>

		</>			
    )

}
