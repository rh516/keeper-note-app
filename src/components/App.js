import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";


export default function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        /* returns all note items from the previous 
        notes array as well as the newly added note */
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        /* returns all note items from the previous notes array 
        except for the one whose index matches the specified id */
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        })
    }

    return (
        <div>
            <Header/>
            <CreateArea onAdd={addNote}/>
            {/* creates a note component for each note item in the array */}
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                );
            })}
            <Footer/>
        </div>
    );
}