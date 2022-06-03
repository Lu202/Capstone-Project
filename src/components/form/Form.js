import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputContainer from './Form.styeld';
import useStore from './useStore/useStore';
import Wrapper from './Wrapper.styled';
import ButtonContainer from './ButtonConatiner.styled.js';
import Label from './Label.styled';

export default function Form() {
	const CLOUD = process.env.CLOUDINARY_CLOUD;
	const PRESET = process.env.CLOUDINARY_PRESET;
	//hier muss der Pfad von cloudinary /preset/ image/zu formData
	const placeholderImage = {
		url: '',
		width: 80,
		height: 80,
	};

	const [previewImage, setPreviewImage] = useState(placeholderImage);

	const uploadImage = async event => {
		try {
			const url = `https://api.cloudinary.com/v1_1/${CLOUD}/upload`;
			const image = event.target.files[0];

			const fileData = new FormData();
			fileData.append('file', image);
			fileData.append('upload_preset', PRESET);

			const response = await fetch(url, {
				method: 'POST',
				body: fileData,
			});

			setPreviewImage(await response.json());
		} catch (error) {
			console.error(error.message);
		}
	};

	//-------------------------------------------------------------------------vorher
	const addNewCard = useStore(state => state.addNewCard);
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		data.image = {
			url: previewImage.url,
			width: previewImage.width,
			height: previewImage.height,
		};
		addNewCard(data);
		reset();
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
					<h4>Animal Profile</h4>

					<div>
						<Label htmlFor="image">imageUpload</Label>
						<input
							id="image"
							type="file"
							aria-invalid={errors.image ? 'true' : 'false'}
							{...register('image', {
								required: true,
								maxLength: 20,
							})}
							onChange={uploadImage}
						/>
						{errors.image && errors.image.type === 'required' && (
							<span>please select a file</span>
						)}
					</div>

					<div>
						<Label htmlFor="name">name</Label>
						<input
							id="name"
							type="text"
							aria-invalid={errors.name ? 'true' : 'false'}
							{...register('name', {
								required: 'Add animal name',
								pattern: /\S(.*\S)?/,
								maxLength: 20,
							})}
							placeholder="Name"
						/>
						{errors.name && errors.name.type === 'required' && (
							<span role="alert">Please enter a name</span>
						)}
					</div>
					<div>
						<Label htmlFor="health">health</Label>
						<input
							id="health"
							type="text"
							{...register('health', {
								required: 'Add health status ',
								pattern: /\S(.*\S)?/,
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
								pattern: /\S(.*\S)?/,
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
								pattern: /\S(.*\S)?/,
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
								pattern: /\S(.*\S)?/,
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
								pattern: /\S(.*\S)?/,
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
								pattern: /\S(.*\S)?/,
								maxLength: 300,
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
