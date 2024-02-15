

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Team from '../pics/Team.jpg'


export default function ÜberUns() {
    
    return (
        <>
            <Navbar/>

            <div className='site' style={{ backgroundImage: `url(${Team})`, backgroundSize: 'cover' }}>
				<div style={{ backgroundColor: 'rgba(250, 250, 250, .7)', padding: '0 10px', margin: '0' }}>

					<div className='site-content'>

						<h1 style={{ margin: '0', paddingTop: '150px' }}>Über uns</h1>

						<p style={{ textAlign: 'justify' }}>

							Willkommen bei Zum Sch'tis - dem Ort, an dem Gastfreundschaft auf kulinarische Abenteuer trifft!<br/><br/>

							Unsere Geschichte begann in einem kleinen Dorf, weit weg von hier... na ja, vielleicht nicht so weit, aber definitiv mit einer großartigen Portion Herzlichkeit! 
							Jacques Baguette, unser tapferer Geschäftsführer, träumte davon, die köstlichen Aromen der französischen Küche in die Herzen unserer Gäste zu zaubern. 
							Zusammen mit dem kreativen Genius Amélie Pommes und dem Meister der gemütlichen Unordnung Marcel Escargot, haben wir Zum Sch'tis zum Leben erweckt.<br/><br/>

							Unser Motto? "Genieße das Essen, lache viel und vergiss die Kalorien!" Wir glauben fest daran, dass gutes Essen nicht nur den Magen, 
							sondern auch die Seele glücklich macht. Deshalb zaubert Amélie in unserer Küche nicht nur kulinarische Meisterwerke, 
							sondern auch Lächeln auf die Gesichter unserer Gäste.<br/><br/>

							Marcel, unser Chaos-Koordinator, sorgt dafür, dass jeder Gast die perfekte Mischung aus Gemütlichkeit und Genuss erlebt. 
							Ob es um die Suche nach dem besten Platz oder die Entschlüsselung der Geheimsprache auf der Speisekarte geht - Marcel ist der Mann für alle Fälle.<br/><br/>

							Also komm vorbei, lass den Alltag draußen und tauche ein in die herzliche Atmosphäre von Zum Sch'tis. 
							Wir freuen uns darauf, dich mit einer Mischung aus französischem Flair und sch'tiastischem Charme zu verwöhnen!<br/><br/>

							À votre santé!<br/><br/>

							Das Zum Sch'tis Team

						</p>

					</div>

					<Footer/>

				</div>
            </div>
        </>
    )

}
