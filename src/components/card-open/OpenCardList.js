import React from 'react';
import Card from './Card';

const OpenCard = [
	{
		id: 1,
		name: 'Struppi',
		health: 'Health: Fit',
		age: 'Age: 4 Jahre',
		feed: 'Feed: Lamm Ba Zamba',
		location: 'Location: Box 4',
		image: '/hund1.png',
		notes: 'Lorem ipsum dolor sit amet, consetetur  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores At vero eos et ac',
	},
];
function CardList() {
	return (
		<div>
			{OpenCard.map(item => {
				return (
					<Card
						key={item.id}
						name={item.name}
						health={item.health}
						age={item.age}
						feed={item.feed}
						location={item.location}
						verhalten={item.verhalten}
						image={item.image}
						notes={item.notes}
					/>
				);
			})}
		</div>
	);
}

export default CardList;
