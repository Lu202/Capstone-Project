import GlobalStyle from '../src/components/Basics/GlobalStyle';
import Layout from '../src/components/Layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
