import GlobalStyle from '../src/components/Basics/GlobalStyle';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<main className="container">
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default MyApp;
