import styled from 'styled-components';

const Wrapper = styled.div`
	witdh: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;

}
button {
background: rgba(21, 146, 230, 0.5);
width: 160px;
height: 40px;
border: 1px solid rgba(255, 0, 0, 0.8);
margin: 5px;
padding-left:5px;
border-radius: 2px;
font-size: 14px;
font-family: Arial, Helvetica, sans-serif;
letter-spacing: 0.1rem;
color: #000000;

}
input {
	border-radius: 5px;
	margin: 10px;
	width: 210px;
	height: 35px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border: white;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 12px;
	padding-left: 5px;
	letter-spacing: 0.1rem;
}
section{
	margin-left: 30px;
	margin-top: 20px;
}
h4{
	padding-left:65px;
}
`;
export default Wrapper;
