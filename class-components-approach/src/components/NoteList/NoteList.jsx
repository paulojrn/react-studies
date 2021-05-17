import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard";
import "./style.css";

class NoteList extends Component
{

    constructor()
    {
        super();

        this.state = {notes: []};
        this.newNotes = this.newNotes.bind(this);
    }

    componentDidMount()
    {
        this.props.notes.subscribe(this.newNotes);
    }

    componentWillUnmount()
    {
        this.props.notes.unsubscribe(this.newNotes);
    }

    newNotes(notes)
    {
        this.setState({...this.state, notes});
    }

    render()
    {
        return(
            <ul className="lista-notas">
                {this.state.notes.map((note, index) => {
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