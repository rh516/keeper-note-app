import React from "react";

export default function Note(props) {
    /* props.onDelete, which gets the deleteNote function in 
    app.js, is called, so the note item whose delete button is 
    clicked gets deleted from the notes array */
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    );
}