import React, { Component } from 'react'
import "../scss/form.scss";
//import axios from 'axios'

export default class CreateTodo extends Component {

    state = {
        title: "",
        description: "",
        tags: [],
        url: "",
        date: "",
        duration: "",
        descriptionShown: false
    }

    textOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    tagsOnChange = event => {
        const tags = event.target.value.split(",");
        console.log(tags);
        this.setState({
            tags: tags
        })

    }

    addDescription = () => {
        this.setState({
            descriptionShown: true
        })
    }
    // onSubmit = event => {
    //     event.preventDefault();
    //     //console.table(this.state);

    //     const resource = {
    //         description: this.state.description,

    //     }

    //     axios.post("/dashboard", resource)
    //         .then(window.location.href = 'http://localhost:3000')

    //     this.setState({
    //             title: "",
    // description: "",
    // tags: [],
    // url: "",
    // date: "",
    // duration: "",
    // descriptionShown: false

    //     });
    // }

    render() {

        return (
            <div>
                <h3>New Resource</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="input_text">
                        <label>Title*</label>
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.textOnChange}
                            name="title"
                            autoFocus
                            required
                        />
                    </div>
                    <div className="input_text">
                        <label>Tags*</label>
                        <input
                            type="text"
                            value={this.state.tags.join(",")}
                            onChange={this.tagsOnChange}
                            name="tags"
                            required
                        />
                        <span className="add_tags">
                            <i className="fa fa-plus-circle"></i>
                        </span>
                    </div>
                    <div className="input_text">
                        <label>Url*</label>
                        <input
                            type="text"
                            value={this.state.url}
                            onChange={this.textOnChange}
                            name="url"
                            required
                        />
                    </div>
                    <div className="input_text__pair">
                        <div className="input_text">
                            <label>Duration</label>
                            <input
                                type="text"
                                className="input_text--short"
                                value={this.state.duration}
                                onChange={this.textOnChange}
                                name="duration"
                            />
                        </div>
                        <div className="input_text">
                            <label>Date</label>
                            <input
                                type="text"
                                className="input_text--short"
                                value={this.state.date}
                                onChange={this.textOnChange}
                                name="date"
                            />
                        </div>

                    </div>
                    <div className={`input_text ${this.state.descriptionShown ? 'shown' : 'hidden'}`}>
                        <label>Description</label>
                        <textarea
                            value={this.state.description}
                            onChange={this.textOnChange}
                            name="description"
                        />
                        <span
                            className="hide_description"
                            onClick={() => this.setState({ descriptionShown: false, description: "" })}
                        >
                            <i className="fas fa-times"></i>
                        </span>

                    </div>

                    <div className="buttons_container">
                        <button
                            className="add_description"
                            type="button"
                            onClick={() => this.setState({ descriptionShown: true })}
                            disabled={this.state.descriptionShown}
                        >
                            <i className="fa fa-plus-circle"></i>
                            Add Description
                        </button>

                        <button
                            className="create_resource"
                            type="submit"
                        >
                            <i className="fa fa-check"></i>
                            Create
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}
