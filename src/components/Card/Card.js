import CardContainer from './Card.styled';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '../modal/Modal';
import CardWrapper from './CardWrapper.styled';

function Card({ name, health, age, feed, location, notes, image, behave }) {
	const [openModal, setOpenModal] = useState(false);
	console.log(image);
	return (
		<>
			<CardWrapper>
				<CardContainer>
					<Image
						className="Card-image"
						src={image.url}
						alt="Hund"
						width="50"
						height="50"
					/>

					<h2>{name}</h2>

					<svg
						width="16"
						height="20"
						viewBox="0 0 16 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						onClick={() => {
							setOpenModal(true);
						}}
					>
						<path
							d="M2.65477 0.00015831C2.9963 -0.00100327 3.33376 0.0743542 3.64234 0.220692C3.95092 0.367029 4.22278 0.580629 4.43795 0.845795L15.4799 14.5588C15.8162 14.9677 16 15.4807 16 16.0101C16 16.5395 15.8162 17.0524 15.4799 17.4614L4.0493 31.1744C3.66126 31.6411 3.10365 31.9346 2.49914 31.9903C1.89463 32.046 1.29273 31.8594 0.825867 31.4715C0.359002 31.0835 0.0654087 30.5261 0.00967312 29.9217C-0.0460625 29.3174 0.140627 28.7157 0.52867 28.2489L10.7477 15.9986L0.871591 3.74837C0.592036 3.4129 0.414456 3.00439 0.359865 2.57117C0.305273 2.13796 0.375953 1.69818 0.563543 1.30386C0.751133 0.909552 1.04778 0.577213 1.41839 0.346172C1.78899 0.115131 2.21804 -0.00494385 2.65477 0.00015831Z"
							fill="#1592E6"
						/>
					</svg>
				</CardContainer>
			</CardWrapper>

			{openModal && (
				<Modal
					setOpenModal={setOpenModal}
					name={name}
					health={health}
					behave={behave}
					age={age}
					feed={feed}
					location={location}
					notes={notes}
					image={image.url}
				/>
			)}
		</>
	);
}

export default Card;
