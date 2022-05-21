import styled from 'styled-components';

const LowerContainer = styled.article`
	button {
		border-radius: 5px;
		border: 2px solid pink;
		padding: 0.6rem;
		color: black;
		letter-spacing: 0.1em;
		font-size: 0.7rem;
		text-transform: unset;
		margin-left: 5.6rem;
		margin-top: 0.6rem;
		transition-duration: 0.5s;
		animation: ease-in-out;
	}
	button,
	p {
		margin: 0.1rem;
		font-size: 0.7rem;
	}

	h3 {
		color: #3b3b3b;
		font-size: 1rem;
		margin: 0.9rem;
		text-align: center;
	}
	&:hover button {
		background-color: pink;
		transform: scale(1.2);
	}
	h4 {
		padding-left: 0.9rem;
		color: #3b3b3b;
	}
	.hidden {
		display: none;
	}
`;
export default LowerContainer;
