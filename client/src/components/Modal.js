import React from 'react';

const modal = props => (
    <div className={`modal modal--${props.show ? 'shown' : 'hidden'}`}>
        <header className="modal__header">
            <div className="modal__header_close">
                <i className="fas fa-times" onClick={props.close}></i>
            </div>
            <div className="modal__header_title">
                <h2>
                    {props.title}
                </h2>
            </div>
        </header>
        <section className="modal__content">
            <article className="modal__content_container">
                {props.children}
            </article>
        </section>
        <section className="modal__actions">
            <button className="button button--cancel" onClick={props.close}>Cancel</button>
            <button className="button" onClick={props.addTags}>{props.confirm}</button>
        </section>
    </div>
)

export default modal;