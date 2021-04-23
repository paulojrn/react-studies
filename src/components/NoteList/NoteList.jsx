import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard";
import "./style.css";

class NoteList extends Component
{
    render()
    {
        return(
            <ul className="lista-notas">
                {this.props.notes.map((note, index) => {

                    note.id = `note-${index}`;

                    return(
                        <li
                            className="lista-notas_item"
                            key={`list-note-${index}`}
                        >
                            <NoteCard
                                note = {note}
                                deleteNote = {this.props.deleteNote}/>
                        </li>
                    );                    
                })}
            </ul>
        );
    }
}

export default NoteList;