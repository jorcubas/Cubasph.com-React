import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './contact-form.styles.scss';

import {selectContactName, selectContactEmail, selectContactSubject, selectContactBody} from '../../redux/contact/contact.selectors';
import {setContactName, setContactEmail, setContactSubject, setContactBody, setContactStateNull, toggleContactForm} from '../../redux/contact/contact.actions';
import {addContact} from '../../redux/contact/contact.utils';

class ContactForm extends React.Component {

    

    handleNameChange = event => {
        const {value} = event.target;
        const {nameSubmission} = this.props;
        console.log(value);
        nameSubmission(value);
    }    

    handleEmailChange = event => {
        const {value} = event.target;
        const {emailSubmission} = this.props;
        emailSubmission(value);
    }

    handleSubjectChange = event => {
        const {value} = event.target;
        const {subjectSubmission} = this.props;
        subjectSubmission(value);
    }

    handleBodyChange = event => {
        const {value} = event.target;
        const {bodySubmission} = this.props;
        bodySubmission(value);
    }


    render() {
        return(
            <div className="Contact-Form">
                <div className="Contact-Form-Window">
                    <div className="Contact-Form-Info">
                        <div className="close-button" onClick={() => {
                            this.props.nullContact();
                            this.props.toggleContactForm();
                        }}>
                        +
                        </div>
                        <h1 className="form-title">Contacto</h1>
                        <div className="personal-info">
                            <input className="input-name" placeholder="Nombre" onChange={this.handleNameChange} value={this.props.name}></input>
                            <input className="input-email" placeholder="E-mail" onChange={this.handleEmailChange} value={this.props.email}></input>
                        </div>
                        <input className="input-subject" placeholder="Asunto" onChange={this.handleSubjectChange} value={this.props.subject}></input>
                        <textarea rows="5" column="25" className="input-body" placeholder="Detalle Adicional" onChange={this.handleBodyChange} value={this.props.body}></textarea>
                        <p>La cotización será respondida directamente por el correo del formulario. </p>
                        <div className="button">
                            <button onClick={() => {
                                addContact(this.props.name, this.props.email, this.props.subject, this.props.body);
                                this.props.toggleContactForm();
                            }}> Mandar Cotización</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector ({
    name: selectContactName,
    email: selectContactEmail,
    subject: selectContactSubject,
    body: selectContactBody
  });

const mapDispatchToProps = dispatch => ({
    nameSubmission: objects => dispatch(setContactName(objects)),
    emailSubmission: objects => dispatch(setContactEmail(objects)),
    subjectSubmission: objects => dispatch(setContactSubject(objects)),
    bodySubmission: objects => dispatch(setContactBody(objects)),
    nullContact: () => dispatch(setContactStateNull()),
    toggleContactForm: () => dispatch(toggleContactForm())
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

