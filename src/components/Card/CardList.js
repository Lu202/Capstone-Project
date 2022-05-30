import React from 'react';
import useStore from '../form/useStore/useStore';
import Card from './Card';

function CardList() {
	const newCards = useStore(state => state.newCards);
	console.log(newCards);

	return (
		<ul>
			{newCards.map(item => {
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
