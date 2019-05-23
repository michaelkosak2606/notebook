import React, { Component } from 'react'
import Modal from "./Modal"
import Overlay from "./Overlay"
//import axios from 'axios'

export default class CreateTodo extends Component {

    state = {
        title: "",
        description: "",
        tags: [],
        url: "",
        date: "",
        duration: "",
        descriptionShown: true,
        showOverlay: false,
        showModal: false,
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


    openModal = () => {
        this.setState({
            showModal: true,
            showOverlay: true
        }, () => console.log(this.state)
        )

    }

    closeModal = () => {
        this.setState({
            showModal: false,
            showOverlay: false
        }, () => console.log(this.state)
        )
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
        const visibile = `form__group--${this.state.descriptionShown ? 'shown' : 'hidden'}`
        return (
            <React.Fragment>
                <Overlay
                    show={this.state.showOverlay}
                />
                <Modal
                    title="Tags"
                    show={this.state.showModal}
                    close={this.closeModal}
                >
                    <p>Modal Content</p>
                </Modal>
                <h3>New Resource</h3>
                <form onSubmit={this.onSubmit} className="form">
                    <div className="form__group">
                        <label className="form__group_label">Title*</label>
                        <input
                            type="text"
                            className="form__group_input"
                            value={this.state.title}
                            onChange={this.textOnChange}
                            name="title"
                            autoFocus
                            required
                        />
                    </div>
                    <div className="form__group">
                        <label className="form__group_label">Tags*</label>
                        <input
                            type="text"
                            className="form__group_input"
                            value={this.state.tags.join(",")}
                            onChange={this.tagsOnChange}
                            name="tags"
                            required
                        />
                        <span
                            className="form__group_addtags"
                            onClick={this.openModal}
                        >
                            <i className="fa fa-plus-circle"></i>
                        </span>
                    </div>
                    <div className="form__group">
                        <label className="form__group_label">Url*</label>
                        <input
                            type="text"
                            className="form__group_input"
                            value={this.state.url}
                            onChange={this.textOnChange}
                            name="url"
                            required
                        />
                    </div>
                    <div className="form__grouppair">
                        <div className="form__group form__grouppair_child">
                            <label className="form__group_label">Duration</label>
                            <input
                                type="text"
                                className="form__group_input input--short"
                                value={this.state.duration}
                                onChange={this.textOnChange}
                                name="duration"
                            />
                        </div>
                        <div className="form__group form__grouppair_child">
                            <label className="form__group_label">Date</label>
                            <input
                                type="text"
                                className="form__group_input input--short"
                                value={this.state.date}
                                onChange={this.textOnChange}
                                name="date"
                            />
                        </div>

                    </div>
                    <div className={`form__group ${visibile}`}>
                        <label className="form__group_label">Description</label>
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

                    <div className="form__actions">
                        <button
                            className="button"
                            type="button"
                            onClick={() => this.setState({ descriptionShown: true })}
                            disabled={this.state.descriptionShown}
                        >
                            <i className="fa fa-plus-circle"></i>
                            Add Description
                        </button>
                        <button
                            className="button"
                            type="submit"
                        >
                            <i className="fa fa-check"></i>
                            Create
                        </button>
                    </div>

                </form>
            </React.Fragment>
        )
    }
}
