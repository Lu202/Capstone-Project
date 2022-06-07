import { useState } from 'react';
import Image from 'next/image';
import ModalBackground from './ModalCard.styled';
import ModalContainer from './ModalContainer.styled';
import Title from './Title.styled';
import TitleCloseBtn from './TitleCloseBtn.styled';
import ImageContainer from './ImageContainer.styled';
import ModelBody from './ModelBody.styled';
import MySvg from '../Basics/Icons/icons';
import DeleteButton from '../button/DeleteButton.styled';
import useStore from '../form/useStore/useStore';

function Modal({ setOpenModal, name, health, age, feed, location, image, notes, behave, id }) {
	const [show, setShow] = useState(false);
	const deleteCard = useStore(state => state.deleteCard);
	const handleOpen = () => {
		setShow(!show);
	};
	return (
		<ModalBackground>
			<ModalContainer>
				<TitleCloseBtn>
					<button type="button" onClick={() => setOpenModal(false)}>
						x
					</button>
				</TitleCloseBtn>
				<ImageContainer>
					<Image className="Card-image" src={image} alt="Hund" width="80" height="80" />
				</ImageContainer>
				<Title>
					<h3>{name}</h3>
					<h4>{health}</h4>
					<h4>{behave}</h4>
					<h4>{age}</h4>
					<h4>{feed}</h4>
					<h4>{location}</h4>

					<p className={'infobox' + (!show && ' hidden')}>{notes}</p>
				</Title>

				<ModelBody>
					<button type="button" onClick={handleOpen}>
						{show ? '🐈 Go back' : 'About me 🐕'}
					</button>
				</ModelBody>
				<DeleteButton>
					<button
						type="button"
						onClick={() => {
							deleteCard(id);
						}}
					>
						<MySvg variant="delete" color="#1592e6">
							Löschen
						</MySvg>
					</button>
				</DeleteButton>
			</ModalContainer>
		</ModalBackground>
	);
}

export default Modal;
