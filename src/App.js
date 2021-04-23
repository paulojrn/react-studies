import React, { Component } from "react";
import NoteList from "./components/NoteList/NoteList";
import NoteForm from "./components/NoteForm/NoteForm";
import CategoryList from "./components/CategoryList/CategoryList";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component
{

  constructor()
  {
    super();

    this.state = {
      notes: [],
      categories: [],
    };
  }

  createNote(title, text)
  {
    const newNote = {title, text};
    const newNoteList = [...this.state.notes, newNote];
    const newState = {notes: newNoteList};

    this.setState(newState);
  }

  deleteNote(id)
  {
    const noteList = this.state.notes;
    const newNoteList = noteList.filter((note) => {
      return note.id !== id;
    });
    const newState = {notes: newNoteList};

    this.setState(newState);
  }

  addCategory(categoryName)
  {
    const newCategoryList = [...this.state.categories, categoryName];
    const newState = {categories: newCategoryList};

    this.setState(newState);
  }

  render()
  {
    return(
      <section className="conteudo">      
        <NoteForm createNote={this.createNote.bind(this)} />             
        <main className="conteudo-principal">
          <CategoryList
            categories={this.state.categories}
            addCategory={this.addCategory.bind(this)} />
          <NoteList  
            notes={this.state.notes}
            deleteNote={this.deleteNote.bind(this)}/>
        </main>        
      </section> 
    );
  }
}

export default App;