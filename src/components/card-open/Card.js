import CardContainer from './Card.styled';
import LowerContainer from './LowerContainer.styled';
import UpperContainer from './UpperContainer.styled';
import ButtonContainer from './Button.styled';
import React, { useState } from 'react';
import Image from 'next/image';

function Card({ health, name, age, feed, location, verhalten, image, notes }) {
	const [show, setShow] = useState(false);
	const handleOpen = () => {
		setShow(!show);
	};
	return (
		<CardContainer>
			<UpperContainer>
				<Image className="Card-image" src={image} alt="Hund" width="150" height="150" />
			</UpperContainer>

			<LowerContainer>
				<h3>{name}</h3>
				<h4>{health}</h4>
				<h4>{age}</h4>
				<h4>{feed}</h4>
				<h4>{location}</h4>
				<h4>{verhalten}</h4>
				<p className={'infobox' + (!show && ' hidden')}>{notes}</p>
				<ButtonContainer>
					<button type="button" onClick={handleOpen}>
						{show ? '🐈 Go back' : 'About me 🐕'}
					</button>
				</ButtonContainer>
			</LowerContainer>
		</CardContainer>
	);
}

export default Card;
