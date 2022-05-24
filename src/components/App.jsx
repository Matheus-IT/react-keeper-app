import {useState} from 'react';
import Footer from './Footer';
import Note from './Note';
import Header from './Header';
import CreateArea from './CreateArea';


export default function App() {
	const [notes, setNotes] = useState([]);

	function handleAddNewNote(newNote) {
		setNotes([...notes, newNote]);
	}

	return (
		<div>
			<Header />

			<CreateArea handleAddNewNote={handleAddNewNote} />
	
			{notes.map(n => {
				return <Note key={n.content} title={n.title} content={n.content} />
			})}
	
			<Footer />
		</div>
	);
}
