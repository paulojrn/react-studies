export default class Notes
{
    constructor()
    {
        this.notes = [];
        this.subscribers = [];
    }

    subscribe(fn)
    {
        this.subscribers.push(fn);
    }

    unsubscribe(fn)
    {
        this.subscribers = this.subscribers.filter(f => f !== fn);
    }

    notify()
    {
        this.subscribers.forEach(fn => {
            fn(this.notes);
        });
    }

    createNote(title, text, category)
    {
        const newNote = new Note(title, text, category);

        this.notes.push(newNote);
        this.notify();
    }

    deleteNote(id)
    {
        const noteList = this.notes;
        const newNoteList = noteList.filter((note) => {
            return note.id !== id;
        });
        
        this.notes = newNoteList;
        this.notify();
    }
}

class Note
{
    constructor(title, text, category)
    {
        this.title = title;
        this.text = text;
        this.category = category;
    }
}