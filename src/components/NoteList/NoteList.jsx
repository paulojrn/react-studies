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
                    return(
                        <li
                            className="lista-notas_item"
                            key={`list-${index}`}
                        >
                            <NoteCard
                                title={note.title}
                                text={note.text} />
                        </li>
                    );                    
                })}
            </ul>
        );
    }
}

export default NoteList;