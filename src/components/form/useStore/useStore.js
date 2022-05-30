import create from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(set => ({
		newCards: [
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
		],
		addNewCard: card =>
			set(state => ({
				newCards: [
					...state.newCards,
					{
						id: nanoid(),
						name: card.name,
						image: card.image,
						health: card.health,
						behave: card.behave,
						age: card.age,
						feed: card.feed,
						location: card.location,
						notes: card.notes,
					},
				],
			})),

		deleteCard: id => {
			set(state => {
				return {
					newCards: state.newCards.filter(cards => cards.id !== id),
				};
			});
		},
	}))
);

export default useStore;
