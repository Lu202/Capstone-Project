import styled from 'styled-components';

const NavContainer = styled.div`
	_background-color: #342293;
	width: 100%;
	bottom: 0;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-around;

}
nav{
	_background: linear-gradient(-180deg, #bcc5ce 0%, #929ead 98%),
	_radial-gradient(at top left, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%);
_background-blend-mode: screen;
	width: 100%;
	bottom: 0;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-image: linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%);
 background-blend-mode: normal, lighten, soft-light;
	

         a {
             color:#424242;
			
            font-size: 1.2em;
            width: 40px;
            _border-radius: 50%;
            padding: 4px;
            margin: 10px;
            display: flex;
            justify-content: center;
        }
    
`;

export default NavContainer;
