import React, { Component } from 'react';
import './style.css';
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg";
//import deleteSVG from "../../assets/img/delete.svg";

class NoteCard extends Component
{

    deleteNote()
    {
        let id = this.props.note.id;
        this.props.deleteNote(id);
    }

    render()
    {
        return(
            <section key={this.props.note.id} className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.note.title}</h3>
                    <h4>{this.props.note.category}</h4>
                    <DeleteSVG onClick={this.deleteNote.bind(this)} />
                </header>
                <p className="card-nota_texto">{this.props.note.text}</p>
                {/* <img src={deleteSVG} /> */}
            </section>
        );
    }
}

export default NoteCard;