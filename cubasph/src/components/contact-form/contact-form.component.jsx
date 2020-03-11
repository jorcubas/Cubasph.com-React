import React from 'react';

import './contact-form.styles.scss';

class ContactForm extends React.Component {
    
    render() {
        return(
            <div className="Contact-Form">
                <div className="Contact-Form-Window">
                    <div className="Contact-Form-Info">
                        <div className="close-button">+</div>
                        <h1 className="form-title">Contacto</h1>
                        <div className="personal-info">
                            <input className="input-name" placeholder="Nombre" onChange={this.handleEmailChange} value={this.props.email}></input>
                            <input className="input-email" placeholder="E-mail" onChange={this.handleEmailChange} value={this.props.email}></input>
                        </div>
                        <input className="input-subject" placeholder="Asunto" onChange={this.handleEmailChange} value={this.props.email}></input>
                        <textarea rows="5" column="25" className="input-body" placeholder="Detalle Adicional" onChange={this.handleBodyChange} value={this.props.body}></textarea>
                        <p>La cotización será respondida directamente por el correo del formulario. </p>
                        <div className="button">
                            <button> Mandar Cotización</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactForm;

