import { useState } from 'react';
import Footer from './Footer';
import Note from './Note';
import Header from './Header';
import CreateArea from './CreateArea';

export default function App() {
  const [notes, setNotes] = useState([]);

  function handleAddNewNote(newNote) {
    setNotes([...notes, newNote]);
  }

  function handleDeleteNote(noteId) {
    const newNotes = notes.filter((n) => n.id !== noteId);
    setNotes(newNotes);
  }

  return (
    <div>
      <Header />

      <CreateArea handleAddNewNote={handleAddNewNote} />

      {notes.map((n) => {
        return (
          <Note
            key={n.id}
            id={n.id}
            title={n.title}
            content={n.content}
            handleDeleteNote={handleDeleteNote}
          />;
        );
      })}

      <Footer />
    </div>
  );
}
