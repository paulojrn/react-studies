import React, { Component } from "react";
import "./style.css";

class NoteForm extends Component
{

    constructor(props)
    {
        super(props);

        this.title = "";
        this.text = "";
        this.category = "";
        this.state = {categories: []};
        this.newCategories = this.newCategories.bind(this)
    }

    componentDidMount()
    {
        this.props.categories.subscribe(this.newCategories);
    }

    componentWillUnmount()
    {
        this.props.categories.unsubscribe(this.newCategories);
    }

    newCategories(categories)
    {
        this.setState({...this.state, categories});
    }

    handlerTitleChange(event)
    {
        event.stopPropagation();
        this.title = event.target.value;
    }

    handlerTextChange(event)
    {
        event.stopPropagation();
        this.text = event.target.value;
    }

    handlerCategoryChange(event)
    {
        event.stopPropagation();
        this.category = event.target.value;
    }

    createNote(event)
    {
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title, this.text, this.category);
    }
    
    render()
    {
        return(
            <form
                className="form-cadastro"
                onSubmit={this.createNote.bind(this)}
            >
                <select
                    className="form-cadastro_input"
                    onChange={this.handlerCategoryChange.bind(this)}
                >
                    <option>Sem categoria</option>

                    {this.state.categories.map((category, index) => {
                        return(
                            <option key={index}>{category}</option>
                        );
                    })}
                </select>
                <input
                    type="text"
                    placeholder="Informe o título"
                    className="form-cadastro_input"
                    onChange={this.handlerTitleChange.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    onChange={this.handlerTextChange.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar nota
                </button>
            </form>
        );
    }
}

export default NoteForm;