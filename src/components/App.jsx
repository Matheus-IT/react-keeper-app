import Footer from './Footer';
import Note from './Note';
import Header from './Header';
import notes from '../notes';


export default function App() {
	return (
		<div>
			<Header />
	
			{notes.map(e => {
				return <Note key={e.key} title={e.title} content={e.content} />
			})}
	
			<Footer />
		</div>
	);
}
