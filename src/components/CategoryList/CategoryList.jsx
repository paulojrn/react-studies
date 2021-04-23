import React, { Component } from 'react';
import "./style.css";

class CategoryList extends Component
{

    handlerInputEvent(event)
    {
        if (event.key === "Enter") {
            let categoryName = event.target.value;
            this.props.addCategory(categoryName);
        }
    }

    render()
    {
        return(
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categories.map((category, index) => {
                        return(
                            <li key={`category-${index}`} className="lista-categorias_item">
                                {category}
                            </li>
                        );
                    })}
                </ul>
                <input
                    type="text" 
                    className="lista-categorias_input"
                    placeholder="Adicionar categoria"
                    onKeyUp={this.handlerInputEvent.bind(this)}/>
            </section>
        );
    }
}

export default CategoryList;