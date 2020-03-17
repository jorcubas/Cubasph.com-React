import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './about.styles.scss';

import Image from './Cubas2.jpg';
import ContactForm from '../../components/contact-form/contact-form.component';
import {selectToggleContact} from '../../redux/contact/contact.selectors';
import {toggleContactForm} from '../../redux/contact/contact.actions';



class aboutPage extends React.Component {

    // componentWillUnmount() {
    //     this.props.toggleContactForm();
    // }
 
    render(){
        return(
            <div className="about-info">
                <img  src= {Image} alt="About Me"/>
                <div className="text">
                    <h1>Conoce Sobre Mi</h1>
                    <p>Viajar y aventurar son cosas que siempre me han apasionado. El capturar un momento en el tiempo
                    y crear un recuerdo es algo que no tiene precio. Las fotografías de paisajes son las fotografías que mas me 
                    apasionan, por lo tanto el tener una plataforma donde pueda vender mis fotografías siempre ha sido 
                    un pequeño sueño mío. Por eso cree esta plataforma como página web donde se pueden cotizar mis 
                    fotografías y enmarcarlas para diferentes ambientes que queden a imaginación de las personas.  </p>
                    <button onClick ={() => {
                        this.props.toggleContactForm();
                    }}>Contactar</button>
                </div>
                { 
                    this.props.hiddenForm ? (<ContactForm/>) : (null)
                }
             
            </div>
        )
    }

}

const mapStateToProps = createStructuredSelector ({
    hiddenForm: selectToggleContact
});

const mapDispatchToProps = dispatch => ({
    toggleContactForm: () => dispatch(toggleContactForm())
});


export default connect(mapStateToProps, mapDispatchToProps)(aboutPage);