import React from 'react';
import Card from './Card';

const cards = [
	{ id: 1, name: 'Struppi', image: '/hund1.png' },
	{ id: 2, name: 'Kasper', image: '/hund3.png' },
	{ id: 3, name: 'Heidi', image: '/hund1.png' },
	{ id: 4, name: 'Pepe', image: '/hund2.png' },
	{ id: 5, name: 'Twiny', image: '/hund4.png' },
];

function CardList() {
	return (
		<ul>
			{cards.map(item => {
				return <Card key={item.id} name={item.name} image={item.image} />;
			})}
		</ul>
	);
}

export default CardList;
