import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


export default function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    
    const [isExpanded, setExpanded] = useState(false);


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

        setExpanded(false);
    }

    
    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded ? 
                    <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                    />
                    : null
                }
                <textarea
                    name="content"
                    onClick={expand}
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon/>
                    </Fab>
                </Zoom>              
            </form>
        </div>
    );
}
