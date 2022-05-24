import { useState } from "react";

export default function CreateArea(props) {
  const [note, setNote] = useState({title: '', content: ''});

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
					props.handleAddNewNote(note);
					event.preventDefault();
				}}>Add</button>
      </form>
    </div>
  );
}
