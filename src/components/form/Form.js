import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputContainer from './Form.styeld';
import useStore from './useStore/useStore';
import Wrapper from './Wrapper.styled';
import ButtonContainer from './ButtonConatiner.styled.js';
import Label from './Label.styled';

export default function Form() {
	const addNewCard = useStore(state => state.addNewCard);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data, event) => {
		addNewCard(data);
		event.target.reset();
	};

	const initialButtonText = 'Submit';
	const [buttonText, setButtonText] = useState(initialButtonText);

	const handleClick = () => {
		setButtonText('Added');

		setTimeout(() => {
			setButtonText(initialButtonText);
		}, 1000);
	};

	return (
		<Wrapper>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputContainer>
					<h4>Animal Profil</h4>
					<Label htmlFor="name">name</Label>

					<div>
						<input
							id="name"
							type="text"
							aria-invalid={errors.name ? 'true' : 'false'}
							{...register('name', {
								required: 'Add animal name',
								maxLength: 20,
							})}
							placeholder="Name"
						/>
					</div>
					<div>
						<Label htmlFor="health">health</Label>
						<input
							id="health"
							type="text"
							{...register('health', {
								required: 'Add health status ',
								maxLength: 170,
							})}
							placeholder="Health"
						/>
					</div>
					<div>
						<Label htmlFor="behave">behave</Label>
						<input
							id="behave"
							type="text"
							{...register('behave', {
								required: 'Add behavior',
								maxLength: 70,
							})}
							placeholder="Character"
						/>
					</div>
					<div>
						<Label htmlFor="age">age</Label>
						<input
							id="age"
							type="text"
							{...register('age', {
								required: 'Add age',
								maxLength: 70,
							})}
							placeholder="Age"
						/>
					</div>
					<div>
						<Label htmlFor="feed">feed</Label>
						<input
							id="feed"
							type="text"
							{...register('feed', {
								required: 'Add feed',
								maxLength: 70,
							})}
							placeholder="Feed"
						/>
					</div>
					<div>
						<Label htmlFor="ocation">location</Label>
						<input
							id="location"
							type="text"
							{...register('location', {
								required: 'Add location',
								maxLength: 70,
							})}
							placeholder="Location"
						/>
					</div>
					<div>
						<Label htmlFor="notes">notes</Label>
						<input
							id="notes"
							type="text"
							{...register('notes', {
								required: 'Add notes',
								maxLength: 170,
							})}
							placeholder="Notes"
						/>
					</div>
					<ButtonContainer>
						<button type="submit" onClick={handleClick}>
							{buttonText}
						</button>
					</ButtonContainer>
				</InputContainer>
			</form>
		</Wrapper>
	);
}
