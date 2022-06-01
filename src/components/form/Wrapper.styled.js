import styled from 'styled-components';

const Wrapper = styled.div`
	 {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		_background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
		position: fix;
	}
	button {
		background: rgba(21, 146, 230, 0.5);

		width: 9rem;
		height: 2.3rem;

		border: 1px solid #1592e6;
		margin: 0.1rem;
		font-size: 0.8em;
		font-family: Arial, Helvetica, sans-serif;
		letter-spacing: 0.1rem;
		cursor: pointer;
		text-transform: uppercase;
		border-radius: 10px;
	}

	input {
		border-radius: 15px;
		margin: 0.5rem;
		margin-left: 1.1rem;
		margin-right: 1.1rem;

		width: 19rem;
		background: #f0f0f0;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
		border: white;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 0.8em;
		padding: 0.75rem;
		padding-top: 0.9rem;
		padding-bottom: 0.9rem;
		outline: none;
		border: 1px solid #004ba3;
	}
	span {
		display: flex;
		font-size: 0.75em;
		color: red;
		margin-left: 1.25rem;
		font-style: italic;
	}
	h4 {
		text-align: center;
		padding-top: 2.5rem;
		letter-spacing: 0.1em;
		line-height: 1.3rem;
		padding-bottom: 2.5rem;
		font-size: 1em;
		color: #000000;
	}
`;
export default Wrapper;
