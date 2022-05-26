import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import { v4 as uuidv4 } from 'uuid';

export default function CreateArea(props) {
  const blankNote = { id: '', title: '', content: '' };
  const [note, setNote] = useState(blankNote);
  const [isExpanded, setIsExpanded] = useState(false);

  function handleTitleChanged(event) {
    const newTitle = event.target.value;
    setNote((previousValue) => {
      return { ...previousValue, title: newTitle };
    });
  }

  function handleContentChanged(event) {
    const newContent = event.target.value;
    setNote((previousValue) => {
      return { ...previousValue, content: newContent };
    });
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            value={note.title}
            onChange={handleTitleChanged}
            name="title"
            placeholder="Title"
          />
        )}

        <textarea
          value={note.content}
          onChange={handleContentChanged}
          name="content"
          placeholder="Take a note..."
          onClick={() => setIsExpanded(true)}
          rows={isExpanded ? '3' : '1'}
        />
        <Zoom in={isExpanded}>
          <Fab
            onClick={(event) => {
              note.id = uuidv4(); // Setting the id before creating
              props.handleAddNewNote(note);
              setNote(blankNote);
              event.preventDefault();
            }}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
