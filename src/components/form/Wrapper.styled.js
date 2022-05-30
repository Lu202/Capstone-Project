import styled from 'styled-components';

const Wrapper = styled.div`
	 {
		witdh: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
	}
	button {
		background: rgba(21, 146, 230, 0.5);
		width: 9.375rem;
		height: 2.5rem;
		border: 1px solid rgba(255, 0, 0, 0.8);
		margin: 0.3rem;
		border-radius: 2px;
		font-size: 0.8rem;
		font-family: Arial, Helvetica, sans-serif;
		letter-spacing: 0.1rem;
		cursor: pointer;
		color: white;
		text-transform: uppercase;
	}

	input {
		border-radius: 5px;
		margin: 0.5rem;
		margin-left: 1.1rem;
		width: 16.25rem;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
		border: white;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 0.688em;
		padding: 0.75rem;
		outline: none;
		border: 1px solid #1592e6;
	}

	h4 {
		text-align: center;
		padding-top: 2.5rem;
		letter-spacing: 0.1em;
		line-height: 1.3rem;
		padding-bottom: 2.5rem;
		font-size: 0.9em;
	}
`;
export default Wrapper;
