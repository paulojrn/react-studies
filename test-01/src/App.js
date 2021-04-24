import React, { Component } from "react";
import NoteList from "./components/NoteList/NoteList";
import NoteForm from "./components/NoteForm/NoteForm";
import CategoryList from "./components/CategoryList/CategoryList";
import "./assets/App.css";
import "./assets/index.css";
import Categories from "./data/Categories";
import Notes from "./data/Notes";

class App extends Component
{

  constructor()
  {
    super();

    this.categories = new Categories();
    this.notes = new Notes();

    // this.state = {
    //   notes: [],
    //   categories: [],
    // };
  }

  // createNote(title, text, category)
  // {
  //   const newNote = {title, text, category};
  //   const newNoteList = [...this.state.notes, newNote];
  //   const newState = {notes: newNoteList};

  //   this.setState(newState);
  // }

  // deleteNote(id)
  // {
  //   const noteList = this.state.notes;
  //   const newNoteList = noteList.filter((note) => {
  //     return note.id !== id;
  //   });
  //   const newState = {notes: newNoteList};

  //   this.setState(newState);
  // }

  // addCategory(categoryName)
  // {
  //   const newCategoryList = [...this.state.categories, categoryName];
  //   const newState = {categories: newCategoryList};

  //   this.setState(newState);
  // }

  render()
  {
    return(
      <section className="conteudo">
        <aside>
          <NoteForm
            categories={this.categories}
            createNote={this.notes.createNote.bind(this.notes)}
          />
        </aside>
        <main className="conteudo-principal">
          <CategoryList
            categories={this.categories}
            addCategory={this.categories.addCategory.bind(this.categories)}
          />
          <NoteList  
            notes={this.notes}
            deleteNote={this.notes.deleteNote.bind(this.notes)}
          />
        </main>        
      </section> 
    );
  }
}

export default App;