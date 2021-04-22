import React, { Component } from "react";
import NoteList from "./components/NoteList/NoteList";
import NoteForm from "./components/NoteForm/NoteForm";
import "./assets/index.css";
import "./assets/App.css";

class App extends Component
{

  constructor()
  {
    super();
    this.state = {
      notes: []
    };
  }

  createNote(title, text)
  {
      const newNote = {title, text};
      console.log(newNote);
      const newNoteList = [...this.state.notes, newNote];
      const newState = {
        notes: newNoteList
      }
  
      this.setState(newState);
  }

  render()
  {
    return(
      <section className="conteudo">
        <NoteForm createNote={this.createNote.bind(this)} />
        <NoteList notes={this.state.notes}/>
      </section> 
    );
  }
}

export default App;