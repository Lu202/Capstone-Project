import styled from 'styled-components';

const NavContainer = styled.div`

	width: 100%;
	bottom: 0;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-around;

}
nav{
	width: 100%;
	bottom: 0;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-around;
	_background-image: linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%);
 	background-blend-mode: normal, lighten, soft-light;
	 _background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
	 _background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
	 background-image: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);
	
	
	
	

         a {
            color:#424242;
			font-size: 1.2em;
            width: 2.5rem;
            padding: 4px;
            margin: 10px;
            display: flex;
            justify-content: center;
        }
    
`;

export default NavContainer;
