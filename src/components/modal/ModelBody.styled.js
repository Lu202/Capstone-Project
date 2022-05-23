import styled from 'styled-components';

const ModelBody = styled.div`
	button {
		border-radius: 5px;
		border: 2px solid pink;
		padding: 0.2rem;
		color: black;
		letter-spacing: 0.1em;
		text-transform: unset;
		margin-left: 4rem;
		margin-top: 0.6rem;
		transition-duration: 0.5s;
		animation: ease-in-out;
		font-size: 10px;
	}
	&:hover button {
		background-color: pink;
		transform: scale(1.2);
	}
`;
export default ModelBody;
