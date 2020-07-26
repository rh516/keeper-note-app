import React, { useState } from "react";


export default function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });


    function handleChange(event) {
        /* grabs the element that was changed (typed in) */
        const {name, value} = event.target;

        /* using the grabbed values above, modifies the 
        state of the previous note accordingly */
        setNote(prevNoteState => {
            return {
                ...prevNoteState,
                [name]: value
            };
        });
    }


    function submitNote(event) {
        /* props.onAdd, which gets the addNote function in app.js, is 
        called, so the newly created note is added to the array of 
        notes in app.js when the submit button is clicked */
        props.onAdd(note);

        /* clears the form fields */
        setNote({
            title: "",
            content: ""
        })

        /* prevents the browser from refreshing automatically */
        event.preventDefault();
    }


    return (
        <div>
            <form className="create-note">
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows="3"
                />
                <button onClick={submitNote}>Add</button>              
            </form>
        </div>
    );
}
