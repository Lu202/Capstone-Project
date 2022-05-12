import GlobalStyle from '../src/components/Basics/GlobalStyle';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
