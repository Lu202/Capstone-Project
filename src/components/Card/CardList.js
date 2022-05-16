import React from 'react';
import Card from './Card';

const cards = [
	{ id: 1, name: 'Struppi', bild: '/hund1.png' },
	{ id: 2, name: 'Kasper', bild: '/hund3.png' },
	{ id: 3, name: 'Heidi', bild: '/hund1.png' },
	{ id: 4, name: 'Pepe', bild: '/hund2.png' },
	{ id: 5, name: 'Twiny', bild: '/hund4.png' },
];

function CardList() {
	return (
		<div>
			{cards.map(item => {
				return <Card key={item.id} name={item.name} bild={item.bild} />;
			})}
		</div>
	);
}

export default CardList;
