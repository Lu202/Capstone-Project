import React from 'react';
import Card from './Card';

const cards = [
	{
		id: 1,
		name: 'Struppi',
		image: '/hund1.png',
		health: 'Fit',
		behave: 'verspielt',
		age: '4 Jahre',
		feed: 'Lamm Ba Zamba',
		location: 'Box 4',
		notes: 'Lorem ipsum dolor sit amet, consetetur  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores At vero eos et ac',
	},
	{
		id: 2,
		name: 'Kasper',
		image: '/hund3.png',
		health: 'Fit',
		behave: 'lebhaft',
		age: '2 jahre',
		feed: 'am liebsten Hühnchen',
		location: 'Box 1',
		notes: 'Lorem ipsum dolor sit amet, consetetur  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores At vero eos et ac',
	},
	{
		id: 3,
		name: 'Heidi',
		image: '/hund1.png',
		health: 'Fit',
		behave: 'Temperament',
		age: '1 Jahr',
		feed: 'Lachs',
		location: 'Box 2',
		notes: 'Lorem ipsum dolor sit amet, consetetur  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores At vero eos et ac',
	},
	{
		id: 4,
		name: 'Pepe',
		image: '/hund2.png',
		health: 'Fit',
		behave: 'verspielt',
		age: '2 Jahre',
		feed: 'Hühnchen',
		location: 'Box 6',
		notes: 'Lorem ipsum dolor sit amet, consetetur  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores At vero eos et ac',
	},
	{
		id: 5,
		name: 'Twiny',
		image: '/hund4.png',
		healt: 'Fit',
		behave: 'lieb',
		age: '3 Jahre',
		location: 'Box 7',
		notes: 'Lorem ipsum dolor sit amet, consetetur  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores At vero eos et ac',
	},
];

function CardList() {
	return (
		<ul>
			{cards.map(item => {
				return (
					<Card
						key={item.id}
						name={item.name}
						image={item.image}
						health={item.health}
						behave={item.behave}
						age={item.age}
						feed={item.feed}
						location={item.location}
						notes={item.notes}
					/>
				);
			})}
		</ul>
	);
}

export default CardList;
