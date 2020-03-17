import React from 'react';
import {connect} from 'react-redux';

import './subscribe-section.styles.scss';
import {createStructuredSelector} from 'reselect';

import SubscribeButton from '../subscribe-button/subscribe-button.component';
import {setSubscribeEmail, subscribed} from '../../redux/subscribe/subscribe.actions';
import {selectSubscribeEmail} from '../../redux/subscribe/subscribe.selectors';
import {addSubmission} from '../../redux/subscribe/subscribe.utils';
import { subscribeTypes } from '../../redux/subscribe/subscribe.types';

class SubscribeSection extends React.Component {
 
    handleEmailChange = event => {
        const {value} = event.target;
        const {emailSubmission} = this.props;
        emailSubmission(value);
    }

    handleSubscription = () => {
        const {email} = this.props;
        addSubmission(email);
    }

    render(){
        return(
            <div className="SubscribeSection">
                <div className="subscribe-space-title">
                    <h1>Suscribete Para Conocer <br/> de Próximos Productos</h1>
                </div>
                <div className="subscribe-space-input">
                    <input 
                        className="email" 
                        placeholder="email" 
                        onChange={this.handleEmailChange}
                        value={this.props.email}
                        type="email">
                    </input>
                    <button 
                        onClick={this.handleSubscription}>
                        Suscribirse 
                    </button>
                </div>
            </div>
        )
    }
};

const mapStateToProps = createStructuredSelector({
    email: selectSubscribeEmail
});

const mapDispatchToProps = dispatch => ({
    emailSubmission: objects => dispatch(setSubscribeEmail(objects))
    // submission: object => dispatch(addSubmission(object))
    
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeSection);