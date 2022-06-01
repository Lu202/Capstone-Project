import dynamic from 'next/dynamic';
const CardList = dynamic(() => import('../src/components/Card/CardList'), { ssr: false });

export default function cards() {
	return (
		<section>
			<div>
				<CardList />
			</div>
		</section>
	);
}
