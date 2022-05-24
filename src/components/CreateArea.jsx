import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

export default function CreateArea(props) {
  const blankNote = {id: '', title: '', content: ''};
  const [note, setNote] = useState(blankNote);

	function handleTitleChanged(event) {
		const newTitle = event.target.value;
		setNote((previousValue) => {
			return {...previousValue, title: newTitle};
		});
	}

	function handleContentChanged(event) {
		const newContent = event.target.value;
		setNote((previousValue) => {
			return {...previousValue, content: newContent};
		});
	}

  return (
    <div>
      <form>
        <input
					value={note.title}
					onChange={handleTitleChanged}
					name="title"
					placeholder="Title"
				/>
        
				<textarea
					value={note.content}
					onChange={handleContentChanged}
					name="content"
					placeholder="Take a note..."
					rows="3"
				/>
        
				<button onClick={(event) => {
					note.id = uuidv4();  // Setting the id before creating
					props.handleAddNewNote(note);
					setNote(blankNote);
					event.preventDefault();
				}}>Add</button>
      </form>
    </div>
  );
}
