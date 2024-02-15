

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import SpeisekarteBackground from '../pics/Speisekarte.jpg'


export default function Speisekarte() {
    
	const MenuItem = ({ name, price }) => (

		<div className='menu-item'>
			<span className='dish-name'>{name}</span>
			<span className='dish-price'>{price}</span>
		</div>

	)
	  
	const MenuCategory = ({ title, items }) => (

		<section className='menu-category'>
			
			<h2>{title}</h2>
			
			{items.map((item, index) => (
				<MenuItem key={index} {...item} />
			))}

		</section>

	)

	const menuData = [
		{
			title: 'Vorspeisen',
			items: [
				{ name: '1. Französische Zwiebelsuppe', price: '€6,50' },
				{ name: '2. Escargots de Bourgogne', price: '€9,00' },
				{ name: '3. Tomate-Mozzarella Salat', price: '€7,50' },
			],
		},
		{
			title: 'Hauptgerichte - Fleisch',
			items: [
				{ name: '4. Boeuf Bourguignon', price: '€16,50' },
				{ name: '5. Coq au Vin', price: '€15,00' },
				{ name: '6. Entrecôte mit Kräuterbutter', price: '€18,00' },
			],
		},
		{
			title: 'Hauptgerichte - Fisch',
			items: [
				{ name: '7. Lachs in Kräuterkruste', price: '€18,50' },
				{ name: '8. Meeresfrüchte Paella', price: '€20,00' },
				{ name: '9. Forelle Müllerin Art', price: '€16,00' },
			],
		},
		{
			title: 'Vegetarische Optionen',
			items: [
				{ name: '10. Ratatouille', price: '€14,00' },
				{ name: '11. Gefüllte Paprika mit Quinoa', price: '€12,50' },
				{ name: '12. Vegetarische Lasagne', price: '€13,50' },
			],
		},
		{
			title: 'Beilagen',
			items: [
				{ name: '13. Gratin Dauphinois', price: '€5,00' },
				{ name: '14. Rösti', price: '€4,50' },
				{ name: '15. Gemischtes Gemüse', price: '€3,50' },
			],
		},
		{
			title: 'Desserts',
			items: [
				{ name: '16. Crème Brûlée', price: '€7,00' },
				{ name: '17. Schokoladenfondant', price: '€8,50' },
				{ name: '18. Tarte Tatin', price: '€6,50' },
			],
		},
		{
			title: 'Getränke',
			items: [
				{ name: '19. Hausgemachte Limonade', price: '€4,00' },
				{ name: '20. Rotwein (Flasche)', price: '€20,00' },
				{ name: '21. Mineralwasser', price: '€2,00' },
			],
		},
		{
			title: 'Kaffee',
			items: [
				{ name: '22. Espresso', price: '€2,50' },
				{ name: '23. Cappuccino', price: '€3,00' },
				{ name: '24. Latte Macchiato', price: '€3,50' },
			],
		},
	]





    return (
        <>
            <Navbar dark={true}/>

			<div className='site' style={{ backgroundImage: `url(${SpeisekarteBackground})`, backgroundSize: 'cover' }}>

				<div className='site-content' style={{ padding: '100px 400px', color: 'var(--color-light)' }}>

					<h1 style={{ marginBottom: '50px' }}>Speisekarte</h1>

					{menuData.map((category, index) => (
						<MenuCategory key={index} {...category} />
					))}

				</div>

				<Footer dark={true}/>

			</div>
        </>
    )

}
