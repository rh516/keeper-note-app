import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

export default function App() {
    const renderedNotes = notes.map(note => {
        return (
            <Note
                key={note.key}
                title={note.title}
                content={note.content}
            />
        );
    });

    return (
        <div>
            <Header/>
            {renderedNotes}
            <Footer/>
        </div>
    );
}