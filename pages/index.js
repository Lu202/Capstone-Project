import Form from '../src/components/form/Form';
import dynamic from 'next/dynamic';
const CardList = dynamic(() => import('../src/components/Card/CardList'), { ssr: false });
export default function Home() {
	return (
		<div>
			<CardList />
			<Form />
		</div>
	);
}
